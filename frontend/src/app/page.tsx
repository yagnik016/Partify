'use client';

import { useRouter } from 'next/navigation';
import { authService } from '@/lib/auth';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (authService.isAuthenticated()) {
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold mb-6 text-gray-900">
          Plan Your Perfect Event with Partify
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          All-in-one event planning platform. Manage vendors, budgets, guests, and more in one place.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => router.push('/login')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 text-lg"
          >
            Sign In
          </button>
          <button
            onClick={() => router.push('/register')}
            className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 transition duration-200 text-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
