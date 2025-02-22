"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  MdDashboard, 
  MdInventory, 
  MdEvent, 
  MdArticle, 
  MdEmail, 
  MdLogout 
} from 'react-icons/md';

const menuItems = [
  { name: 'Dashboard', icon: MdDashboard, path: '/admin' },
  { name: 'Products', icon: MdInventory, path: '/admin/products' },
  { name: 'Events', icon: MdEvent, path: '/admin/events' },
  { name: 'Blogs', icon: MdArticle, path: '/admin/blogs' },
  { name: 'Contact', icon: MdEmail, path: '/admin/contact' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
  };

  return (
    <div className="w-64 bg-white h-screen shadow-xl">
      <div className="p-6">
        <Link href="/admin" className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          lovosis Admin
        </Link>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 ${
                isActive ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-r-4 border-blue-600' : ''
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
        
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:text-red-600 transition-all duration-300 mt-auto"
        >
          <MdLogout className="w-5 h-5 mr-3" />
          <span className="font-medium">Logout</span>
        </button>
      </nav>
    </div>
  );
} 