'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Provider from '../lib/provider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>News App</title>
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
