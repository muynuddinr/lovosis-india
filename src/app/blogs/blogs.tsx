"use client"
import { useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export const sampleBlogs: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-web-development',
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends in web development, from AI integration to WebAssembly and edge computing...',
    category: 'Technology',
    author: 'John Doe',
    date: 'March 15, 2024',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479'
  },
  {
    id: '2',
    slug: 'maximizing-business-growth',
    title: 'Maximizing Business Growth',
    excerpt: 'Strategic insights and practical tips for scaling your business in the digital age...',
    category: 'Business',
    author: 'Jane Smith',
    date: 'March 12, 2024',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  },
  {
    id: '3',
    slug: 'ui-design-trends-2024',
    title: 'UI Design Trends 2024',
    excerpt: 'Discover the latest UI/UX design trends shaping the digital landscape this year...',
    category: 'Design',
    author: 'Sarah Wilson',
    date: 'March 10, 2024',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5'
  },
  {
    id: '4',
    slug: 'social-media-marketing-strategies',
    title: 'Social Media Marketing Strategies',
    excerpt: 'Learn effective social media marketing techniques to boost your brand presence...',
    category: 'Marketing',
    author: 'Mike Johnson',
    date: 'March 8, 2024',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868'
  },
  {
    id: '5',
    slug: 'artificial-intelligence-in-business',
    title: 'Artificial Intelligence in Business',
    excerpt: 'How AI is transforming business operations and decision-making processes...',
    category: 'Technology',
    author: 'Alex Chen',
    date: 'March 5, 2024',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8'
  },
  {
    id: '6',
    slug: 'sustainable-business-practices',
    title: 'Sustainable Business Practices',
    excerpt: 'Implementing eco-friendly strategies for long-term business sustainability...',
    category: 'Business',
    author: 'Emma Davis',
    date: 'March 3, 2024',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8'
  }
];

const categories = ['All', 'Technology', 'Business', 'Design', 'Marketing'];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs = selectedCategory === 'All' 
    ? sampleBlogs 
    : sampleBlogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-blue-100/50 blur-3xl transform -skew-y-6"></div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-gradient">
            Our Blog
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Insights, thoughts, and stories about technology, business, and innovation
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                  : 'bg-white text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fade-in backdrop-blur-sm">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                  <span className="text-gray-500 text-sm font-medium">{blog.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>
                <div className="flex items-center justify-between border-t pt-4">
                  <span className="text-gray-500 text-sm font-medium">{blog.author}</span>
                  <span className="text-gray-500 text-sm">{blog.date}</span>
                </div>
                <Link 
                  href={`/blogs/${blog.slug}`}
                  className="mt-4 inline-block w-full text-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
