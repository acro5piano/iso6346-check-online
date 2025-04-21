import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ISO 6346 Container Number Validator',
  description:
    'Validate shipping container numbers using the ISO 6346 check digit algorithm. Avoid data entry errors in your logistics workflow.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Validate shipping container numbers using the ISO 6346 check digit algorithm. Avoid data entry errors in your logistics workflow."
        />
        <meta
          name="keywords"
          content="ISO 6346, container check digit, container validator, shipping container number, logistics tool"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
