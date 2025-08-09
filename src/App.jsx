import ZohoCreatorFrame from './components/ZohoCreatorFrame'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="px-6 py-4 border-b border-gray-200 bg-white sticky top-0">
        <h1 className="text-xl font-semibold">Property Management Dashboard</h1>
        <p className="text-sm text-gray-500">Embedded Draw Schedule Report (Zoho Creator)</p>
      </header>

      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <ZohoCreatorFrame />
        </div>
      </main>
    </div>
  )
}
