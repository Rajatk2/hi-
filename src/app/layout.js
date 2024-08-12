// src/app/layout.js
// import '../styles/globals.css'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>Excellentia</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">Welcome to Excellentia</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/join" className="hover:underline">Join Us</Link></li>
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; 2024 Excellentia. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
