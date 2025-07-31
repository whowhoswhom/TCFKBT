import type { Metadata } from 'next'

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
      <body>
        {children}
      </body>
    </html>
  )
} 