export default function AdminBlogs() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Blogs</h1>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Blog Posts</h2>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            Write New Post
          </button>
        </div>
        <div className="space-y-4">
          {/* Sample Blog Post */}
          <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Getting Started with Next.js</h3>
                <p className="text-gray-600 text-sm mb-2">Published: Feb 20, 2024</p>
                <p className="text-gray-600">A comprehensive guide to building modern web applications...</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800">Edit</button>
                <button className="text-red-600 hover:text-red-800">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 