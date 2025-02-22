export default function AdminEvents() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Events</h1>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Event List</h2>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            Create New Event
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Event Card */}
          <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Tech Conference 2024</h3>
              <span className="px-2 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full">Upcoming</span>
            </div>
            <p className="text-gray-600 mb-4">Date: March 15, 2024</p>
            <p className="text-gray-600 mb-4">Location: Virtual</p>
            <div className="flex justify-end space-x-2">
              <button className="text-blue-600 hover:text-blue-800">Edit</button>
              <button className="text-red-600 hover:text-red-800">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 