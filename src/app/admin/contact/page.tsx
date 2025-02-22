'use client'

import { useEffect, useState } from 'react';

interface Message {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'read' | 'unread';
  createdAt: string;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

export default function AdminContact() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [filter, setFilter] = useState<'all' | 'read' | 'unread'>('all');
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/contact');
      const data = await response.json();
      if (data.success) {
        setMessages(data.messages);
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    }
    setLoading(false);
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'read' }),
      });

      if (!response.ok) throw new Error('Failed to update message');

      await fetchMessages(); // Refresh the messages list
    } catch (error) {
      console.error('Error updating message:', error);
    }
  };

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
  };

  const handleConfirmDelete = async () => {
    if (!deleteId) return;

    try {
      const response = await fetch(`/api/contact/${deleteId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete message');
      }

      setMessages(messages.filter(msg => msg._id !== deleteId));
    } catch (error) {
      console.error('Error deleting message:', error);
    } finally {
      setDeleteId(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteId(null);
  };

  const filteredMessages = messages.filter(msg => 
    filter === 'all' ? true : msg.status === filter
  );

  // Add stats calculation
  const stats = {
    total: messages.length,
    unread: messages.filter(msg => msg.status === 'unread').length,
    read: messages.filter(msg => msg.status === 'read').length
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Messages</h1>
      
      {/* Add Stats Section */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-600">Total Messages</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-blue-600">Unread Messages</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{stats.unread}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-600">Read Messages</h3>
          <p className="text-3xl font-bold text-gray-600 mt-2">{stats.read}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Message List</h2>
          <select 
            className="border border-gray-200 rounded-lg px-3 py-2 text-gray-700"
            value={filter}
            onChange={(e) => setFilter(e.target.value as 'all' | 'read' | 'unread')}
          >
            <option value="all">All Messages</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center py-8">Loading messages...</div>
        ) : (
          <div className="space-y-4">
            {filteredMessages.map((message) => (
              <div key={message._id} className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div>
                      <p className="text-gray-600"><span className="font-semibold">Name:</span> {message.name}</p>
                      <p className="text-gray-600"><span className="font-semibold">Email:</span> {message.email}</p>
                      <p className="text-gray-600"><span className="font-semibold">Phone:</span> {message.phone}</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><span className="font-semibold">Subject:</span> {message.subject}</p>
                      <p className="text-gray-600"><span className="font-semibold">Status:</span> 
                        <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
                          message.status === 'unread' 
                            ? 'text-blue-600 bg-blue-100' 
                            : 'text-gray-600 bg-gray-100'
                        }`}>
                          {message.status}
                        </span>
                      </p>
                      <p className="text-gray-600"><span className="font-semibold">Date:</span> {formatDate(message.createdAt)}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-600"><span className="font-semibold">Message:</span></p>
                  <p className="text-gray-700 mt-2 bg-gray-50 p-3 rounded-lg">{message.message}</p>
                </div>

                <div className="flex justify-end space-x-4 mt-4">
                  {message.status === 'unread' && (
                    <button 
                      onClick={() => handleMarkAsRead(message._id)}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Mark as Read
                    </button>
                  )}
                  <button 
                    onClick={() => handleDeleteClick(message._id)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {deleteId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this message?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 