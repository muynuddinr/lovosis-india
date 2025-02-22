export default function AdminContact() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Messages</h1>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Message List</h2>
          <div className="flex space-x-2">
            <select className="border border-gray-200 rounded-lg px-3 py-2 text-gray-700">
              <option>All Messages</option>
              <option>Unread</option>
              <option>Read</option>
            </select>
          </div>
        </div>
        <div className="space-y-4">
          {/* Sample Message */}
          <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
                <p className="text-gray-600 text-sm">john.doe@example.com</p>
              </div>
              <span className="px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">New</span>
            </div>
            <p className="text-gray-600 mb-4">I'm interested in your services. Can you provide more information?</p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Received: 2 hours ago</span>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800">Reply</button>
                <button className="text-red-600 hover:text-red-800">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 