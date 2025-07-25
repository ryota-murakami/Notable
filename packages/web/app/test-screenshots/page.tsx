'use client'

import React, { useState } from 'react'

// Simple mock components for screenshot purposes
const SimpleEditor = ({ content, onChange }: { content: string; onChange: (content: string) => void }) => {
  return (
    <div className="min-h-96 p-4 border border-gray-300 rounded-lg bg-white">
      <textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-96 p-4 border-none outline-none resize-none font-mono text-sm"
        placeholder="Start writing your note..."
      />
    </div>
  )
}

const NoteCard = ({ title, content, date }: { title: string; content: string; date: string }) => (
  <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{content}</p>
    <p className="text-xs text-gray-400">{date}</p>
  </div>
)

const TagBadge = ({ tag }: { tag: string }) => (
  <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mr-2 mb-2">
    {tag}
  </span>
)

export default function ScreenshotTestPage() {
  const [currentView, setCurrentView] = useState('editor')
  const [editorContent, setEditorContent] = useState(`# My Computer Science Notes

## Data Structures and Algorithms

### Arrays and Lists
- Dynamic arrays provide O(1) access time
- Linked lists offer efficient insertion/deletion
- Use arrays when you need random access
- Use linked lists when you frequently insert/delete

### Code Example - Binary Search
\`\`\`javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}
\`\`\`

### Time Complexity Analysis
- **Binary Search**: O(log n)
- **Linear Search**: O(n)
- **Insertion Sort**: O(n²)
- **Quick Sort**: O(n log n) average case

## Study Plan
- [ ] Complete LeetCode problems (20/100)
- [ ] Review sorting algorithms
- [ ] Practice dynamic programming
- [ ] Prepare for technical interviews

## References
- [Algorithms by Robert Sedgewick](https://example.com)
- [MIT 6.006 Introduction to Algorithms](https://example.com)
- [GeeksforGeeks Data Structures](https://example.com)`)

  const sampleNotes = [
    {
      title: "Meeting Notes - Project Planning",
      content: "Discussed timeline for Q1 deliverables. Key stakeholders: John, Sarah, Mike. Action items: finalize requirements by Friday, setup development environment...",
      date: "2 hours ago",
      tags: ["work", "meetings", "planning"]
    },
    {
      title: "Recipe Collection - Italian Pasta",
      content: "Carbonara recipe from Nonna: 400g spaghetti, 200g guanciale, 4 egg yolks, 100g pecorino romano. Cook guanciale until crispy...",
      date: "1 day ago",
      tags: ["cooking", "recipes", "italian"]
    },
    {
      title: "Travel Journal - Tokyo 2024",
      content: "Amazing trip to Tokyo! Visited Senso-ji Temple, tried authentic ramen in Shibuya, cherry blossoms were in full bloom. Best travel experience ever...",
      date: "3 days ago",
      tags: ["travel", "japan", "journal"]
    },
    {
      title: "Book Notes - The Lean Startup",
      content: "Key concepts: Build-Measure-Learn cycle, MVP (Minimum Viable Product), validated learning. Important quote: 'The only way to win is to learn faster than anyone else'...",
      date: "1 week ago",
      tags: ["business", "books", "entrepreneurship"]
    },
    {
      title: "Workout Plan - January 2024",
      content: "Monday: Upper body (bench press, rows, pull-ups). Tuesday: Lower body (squats, deadlifts, lunges). Wednesday: Cardio (30min run). Thursday: Upper body...",
      date: "2 weeks ago",
      tags: ["fitness", "health", "planning"]
    },
    {
      title: "API Documentation - User Service",
      content: "POST /api/users - Create new user. GET /api/users/{id} - Get user by ID. PUT /api/users/{id} - Update user. DELETE /api/users/{id} - Delete user...",
      date: "3 weeks ago",
      tags: ["development", "api", "documentation"]
    }
  ]

  const allTags = ["work", "meetings", "planning", "cooking", "recipes", "italian", "travel", "japan", "journal", "business", "books", "entrepreneurship", "fitness", "health", "development", "api", "documentation"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">Notable</h1>
              </div>
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  onClick={() => setCurrentView('notes')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentView === 'notes' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Notes
                </button>
                <button
                  onClick={() => setCurrentView('editor')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentView === 'editor' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Editor
                </button>
                <button
                  onClick={() => setCurrentView('tags')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentView === 'tags' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Tags
                </button>
                <button
                  onClick={() => setCurrentView('search')}  
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentView === 'search' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                New Note
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'notes' && (
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">My Notes</h2>
              <p className="text-gray-600 mt-2">Organize your thoughts, ideas, and knowledge</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleNotes.map((note, index) => (
                <div key={index}>
                  <NoteCard {...note} />
                  <div className="mt-2">
                    {note.tags.map((tag, tagIndex) => (
                      <TagBadge key={tagIndex} tag={tag} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'editor' && (
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Rich Text Editor</h2>
              <p className="text-gray-600 mt-2">Write and format your notes with our powerful editor</p>
            </div>
            <div className="bg-white rounded-lg shadow">
              <div className="border-b border-gray-200 p-4">
                <input
                  type="text"
                  placeholder="Note title..."
                  className="text-2xl font-bold border-none outline-none w-full"
                  defaultValue="My Computer Science Notes"
                />
              </div>
              <div className="p-4">
                <SimpleEditor content={editorContent} onChange={setEditorContent} />
              </div>
            </div>
          </div>
        )}

        {currentView === 'tags' && (
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Tags</h2>
              <p className="text-gray-600 mt-2">Organize your notes with tags and categories</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap">
                {allTags.map((tag, index) => (
                  <TagBadge key={index} tag={tag} />
                ))}
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Tag Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full cursor-pointer transition-colors ${
                        index % 3 === 0 ? 'text-lg bg-blue-200 text-blue-800' :
                        index % 3 === 1 ? 'text-base bg-green-200 text-green-800' :
                        'text-sm bg-purple-200 text-purple-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'search' && (
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Search</h2>
              <p className="text-gray-600 mt-2">Find your notes quickly and efficiently</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search your notes..."
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  defaultValue="algorithms"
                />
              </div>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Computer Science Notes</h3>
                  <p className="text-gray-600 mb-2">
                    Data Structures and <mark className="bg-yellow-200">Algorithms</mark> - Binary Search provides O(log n) time complexity...
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Last modified: 2 hours ago</span>
                    <span className="mx-2">•</span>
                    <span>Computer Science</span>
                  </div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Study Resources</h3>
                  <p className="text-gray-600 mb-2">
                    MIT 6.006 Introduction to <mark className="bg-yellow-200">Algorithms</mark> course covers fundamental data structures...
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Last modified: 1 day ago</span>
                    <span className="mx-2">•</span>
                    <span>Education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}