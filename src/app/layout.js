import './globals.css'
import { Inter } from 'next/font/google'
import { Source_Code_Pro } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });
const source_code = Source_Code_Pro({ subsets: ['latin'] });

export const metadata = {
  title: 'Evan Lin',
  description: 'My website with my stuff',
}

export default function RootLayout({ children }) {
  return (
    <html className={`${source_code.className} bg-gray-900 text-gray-100 
    container mx-auto p-4`} lang="en">
      <body>{children}</body>
    </html>
  )
}
