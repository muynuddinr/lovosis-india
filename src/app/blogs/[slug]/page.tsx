"use client"
import { use } from 'react';
import { notFound } from 'next/navigation';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

// Import the sample blogs data
import { sampleBlogs } from '../blogs';

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const blog = sampleBlogs.find(blog => blog.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-medium">
                {blog.category}
              </span>
              <span className="text-gray-500 text-sm">{blog.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {blog.title}
            </h1>
            <div className="flex items-center justify-between text-gray-600">
              <span className="font-medium">{blog.author}</span>
              <span>{blog.date}</span>
            </div>
          </div>

          <div className="relative h-[400px] mb-8 rounded-2xl overflow-hidden">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {blog.excerpt}
            </p>
            {/* Add more content sections as needed */}
            <div className="mt-8 space-y-6">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}