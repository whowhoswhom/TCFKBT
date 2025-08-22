import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: 'Town & Country Ford Baseball',
  description: 'Official website for Town & Country Ford Baseball Team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-white font-inter">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
