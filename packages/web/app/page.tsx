export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Notable
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          The Notion Clone but Better Experience than Original
        </p>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Keyboard Shortcuts Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">General</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+Shift+P</kbd> - Open command palette</li>
                <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+/</kbd> - Show keyboard shortcuts</li>
                <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+K</kbd> - Search notes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Notes</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+N</kbd> - Create new note</li>
                <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+E</kbd> - Toggle edit/view mode</li>
                <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+,</kbd> - Toggle sidebar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}