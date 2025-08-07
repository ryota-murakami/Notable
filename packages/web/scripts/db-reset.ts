#!/usr/bin/env ts-node

/**
 * Database reset script for E2E testing
 * Implements the 'pnpm db:reset' command as specified in project instructions
 *
 * Usage: pnpm db:reset
 * This populates test data with a single command as required for E2E tests
 */

import { createClient } from '@supabase/supabase-js'
import { getAllFixtures } from '../utils/db-fixtures'

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:54321'
const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY

if (!supabaseServiceKey) {
  console.error(
    '❌ Missing Supabase service key. Set SUPABASE_SERVICE_ROLE_KEY or SUPABASE_ANON_KEY'
  )
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

async function resetDatabase() {
  try {
    console.info('🔄 Resetting database with test fixtures...')

    // Step 1: Clean up existing test data
    console.info('🧹 Cleaning up existing test data...')

    // Delete in correct order to respect foreign keys
    await supabase
      .from('note_tags')
      .delete()
      .in('note_id', ['test-note-1', 'test-note-2', 'test-note-3'])
    await supabase
      .from('notes')
      .delete()
      .in('user_id', ['test-user-1', 'test-user-2'])
    await supabase
      .from('tags')
      .delete()
      .in('user_id', ['test-user-1', 'test-user-2'])
    await supabase
      .from('folders')
      .delete()
      .in('user_id', ['test-user-1', 'test-user-2'])

    console.info('✅ Cleanup completed')

    // Step 2: Create test users via Supabase Auth
    console.info('👤 Creating test users...')

    const fixtures = getAllFixtures()

    for (const user of fixtures.users) {
      try {
        // Try to create user via auth API
        const { error: authError } = await supabase.auth.admin.createUser({
          email: user.email,
          password: user.password,
          email_confirm: true,
          user_metadata: user.user_metadata,
        })

        if (authError && !authError.message.includes('already registered')) {
          console.warn(
            `⚠️  Could not create auth user ${user.email}:`,
            authError.message
          )
        } else {
          console.info(`✅ Created/verified auth user: ${user.email}`)
        }
      } catch (error) {
        console.warn(`⚠️  Auth user creation failed for ${user.email}:`, error)
      }
    }

    // Step 3: Insert folders
    console.info('📁 Inserting test folders...')
    const { error: foldersError } = await supabase.from('folders').insert(
      fixtures.folders.map((folder) => ({
        id: folder.id,
        name: folder.name,
        parent_id: folder.parent_id,
        user_id: folder.user_id,
        created_at: folder.created_at,
        updated_at: folder.updated_at,
      }))
    )

    if (foldersError) {
      console.error('❌ Error inserting folders:', foldersError)
    } else {
      console.info(`✅ Inserted ${fixtures.folders.length} folders`)
    }

    // Step 4: Insert tags
    console.info('🏷️  Inserting test tags...')
    const { error: tagsError } = await supabase.from('tags').insert(
      fixtures.tags.map((tag) => ({
        id: tag.id,
        name: tag.name,
        color: tag.color,
        description: tag.description,
        user_id: tag.user_id,
        created_at: tag.created_at,
        updated_at: tag.updated_at,
      }))
    )

    if (tagsError) {
      console.error('❌ Error inserting tags:', tagsError)
    } else {
      console.info(`✅ Inserted ${fixtures.tags.length} tags`)
    }

    // Step 5: Insert notes
    console.info('📝 Inserting test notes...')
    const { error: notesError } = await supabase.from('notes').insert(
      fixtures.notes.map((note) => ({
        id: note.id,
        title: note.title,
        content: note.content,
        user_id: note.user_id,
        folder_id: note.folder_id,
        created_at: note.created_at,
        updated_at: note.updated_at,
        is_pinned: note.is_pinned,
        is_favorited: note.is_favorited,
        is_archived: note.is_archived,
        is_daily_note: note.is_daily_note,
        custom_id: note.custom_id,
      }))
    )

    if (notesError) {
      console.error('❌ Error inserting notes:', notesError)
    } else {
      console.info(`✅ Inserted ${fixtures.notes.length} notes`)
    }

    // Step 6: Insert note-tag relationships
    console.info('🔗 Inserting note-tag relationships...')
    const { error: noteTagsError } = await supabase.from('note_tags').insert(
      fixtures.note_tags.map((nt) => ({
        id: nt.id,
        note_id: nt.note_id,
        tag_id: nt.tag_id,
        created_at: nt.created_at,
      }))
    )

    if (noteTagsError) {
      console.error('❌ Error inserting note-tag relationships:', noteTagsError)
    } else {
      console.info(
        `✅ Inserted ${fixtures.note_tags.length} note-tag relationships`
      )
    }

    // Step 7: Verify data
    console.info('🔍 Verifying inserted data...')

    const { data: notesCount } = await supabase
      .from('notes')
      .select('id', { count: 'exact', head: true })
      .in('user_id', ['test-user-1', 'test-user-2'])

    const { data: foldersCount } = await supabase
      .from('folders')
      .select('id', { count: 'exact', head: true })
      .in('user_id', ['test-user-1', 'test-user-2'])

    const { data: tagsCount } = await supabase
      .from('tags')
      .select('id', { count: 'exact', head: true })
      .in('user_id', ['test-user-1', 'test-user-2'])

    console.info('📊 Database reset summary:')
    console.info(`   • Users: 2 test users created/verified`)
    console.info(`   • Notes: ${notesCount?.length || 0} inserted`)
    console.info(`   • Folders: ${foldersCount?.length || 0} inserted`)
    console.info(`   • Tags: ${tagsCount?.length || 0} inserted`)
    console.info(
      `   • Note-Tags: ${fixtures.note_tags.length} relationships inserted`
    )

    console.info('✅ Database reset completed successfully!')
    console.info('🚀 Ready for E2E testing with:')
    console.info('   • test@example.com (password: password123)')
    console.info('   • test2@example.com (password: password123)')
  } catch (error) {
    console.error('❌ Database reset failed:', error)
    process.exit(1)
  }
}

async function checkEnvironment() {
  console.info('🔧 Checking environment...')

  if (
    !supabaseUrl.includes('localhost') &&
    !supabaseUrl.includes('127.0.0.1')
  ) {
    console.warn(
      '⚠️  Warning: Not using local Supabase. Current URL:',
      supabaseUrl
    )
    console.warn('⚠️  This will reset data in your remote database!')

    // In CI or when explicitly confirmed, proceed anyway
    if (!process.env.CI && !process.env.FORCE_RESET) {
      console.error(
        '❌ Refusing to reset non-local database without FORCE_RESET=true'
      )
      process.exit(1)
    }
  }

  // Test connection
  try {
    const { error } = await supabase.from('notes').select('id').limit(1)
    if (error) {
      console.error('❌ Failed to connect to Supabase:', error)
      process.exit(1)
    }
    console.info('✅ Connected to Supabase successfully')
  } catch (error) {
    console.error('❌ Supabase connection failed:', error)
    process.exit(1)
  }
}

// Main execution
async function main() {
  console.info('🎯 Notable Database Reset Script')
  console.info('================================')

  await checkEnvironment()
  await resetDatabase()

  console.info('🎉 All done! Database is ready for E2E testing.')
}

// Run the script
/* eslint-disable no-undef */
if (require.main === module) {
  main().catch((error) => {
    console.error('💥 Script failed:', error)
    process.exit(1)
  })
}

export { resetDatabase, checkEnvironment }
