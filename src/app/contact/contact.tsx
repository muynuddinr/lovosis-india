"use client"
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* New Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Email Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100/50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl text-blue-600 font-medium text-center mb-2">Email Us</h3>
            <p className="text-gray-600 text-center">contact@lovosis.com</p>
          </div>

          {/* Visit Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-purple-100/50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-purple-600" viewBox="0 0 24 24" fill="none">
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-xl text-purple-600 font-medium text-center mb-2">Visit Us</h3>
            <p className="text-gray-600 text-center">123 Business Street,<br/>City, Country</p>
          </div>

          {/* Call Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100/50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="none">
                <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl text-blue-600 font-medium text-center mb-2">Call Us</h3>
            <p className="text-gray-600 text-center">+1 234 567 890</p>
          </div>
        </div>

        {/* Existing Get in Touch section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 animate-gradient">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions or want to collaborate? We'd love to hear from you. 
            <span className="block mt-2 text-blue-600 font-medium">Let's create something amazing together.</span>
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8 bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/20">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white/50 backdrop-blur-sm hover:bg-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white/50 backdrop-blur-sm hover:bg-white"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white/50 backdrop-blur-sm hover:bg-white"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white/50 backdrop-blur-sm hover:bg-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:scale-[1.02] transition-all duration-300 hover:shadow-xl animate-gradient bg-[length:200%_auto] hover:bg-[length:200%_auto]"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
