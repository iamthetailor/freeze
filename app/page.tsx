'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle fancy black gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"
      />
      
      {/* Overlay with additional gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-tl from-black/80 via-gray-900/40 to-gray-800/20"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Logo container with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-64 h-64 md:w-96 md:h-96 relative mb-8"
        >
          <Image
            src="/assets/images/white-logo.png"
            alt="Freeze Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Coming soon text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          style={{ fontFamily: 'Akira, sans-serif', letterSpacing: '0.05em' }}
        >
          LAUNCHING SOON
        </motion.h1>

        {/* Social media link - now with black and white styling */}
        <motion.a
          href="https://www.instagram.com/freezedabrand/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ 
            scale: 1.03, 
            backgroundColor: '#ffffff', 
            color: '#000000',
            boxShadow: '0 0 15px rgba(255,255,255,0.6)',
            y: -1
          }}
          whileTap={{ scale: 0.99, y: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            mass: 1
          }}
          className="flex items-center gap-2 bg-transparent border border-white px-6 py-3 rounded-full transition-colors duration-200 hover:border-transparent"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span>Follow us on Instagram</span>
        </motion.a>
      </div>
    </main>
  );
}
