'use client';

import { Languages, Bell, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Languages className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">LinguaLearn</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              My Courses
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Community
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Bell className="h-6 w-6" />
            </button>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}