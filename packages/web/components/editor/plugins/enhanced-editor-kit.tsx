'use client'

import {
  BulletedListPlugin,
  ListItemPlugin,
  NumberedListPlugin,
  TodoListPlugin,
} from '@platejs/list/react'

import { BasicNodesKit } from './basic-nodes-kit'
import { BulletedListElement } from '@/components/ui/bulleted-list-node'
import { ListItemElement } from '@/components/ui/list-item-node'
import { NumberedListElement } from '@/components/ui/numbered-list-node'
import { TodoListElement } from '@/components/ui/todo-list-node'

export const EnhancedEditorKit = [
  ...BasicNodesKit,
  // List plugins
  BulletedListPlugin.configure({
    node: { component: BulletedListElement },
    shortcuts: { toggle: { keys: 'mod+shift+8' } },
  }),
  NumberedListPlugin.configure({
    node: { component: NumberedListElement },
    shortcuts: { toggle: { keys: 'mod+shift+7' } },
  }),
  TodoListPlugin.configure({
    node: { component: TodoListElement },
    shortcuts: { toggle: { keys: 'mod+shift+9' } },
  }),
  ListItemPlugin.configure({
    node: { component: ListItemElement },
  }),
]
