import './globals.css'
import Header from '@/components/Header'
import Providers from '@/app/Providers'
import Navbar from '@/components/Navbar'
import SearchBar from '@/components/SearchBar'

export const metadata = {
  title: 'IMDb clone',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* SearchBox */}
          <SearchBar />
          
          {children}
        </Providers>
      </body>
    </html>
  )
}
