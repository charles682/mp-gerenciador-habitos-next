import './globals.css'
import type { Metadata } from 'next'
import { Dosis, Inter } from 'next/font/google'
import Image from 'next/image'


const dosis = Dosis({ subsets: ['latin'], variable:"--font-dois" })

const inter = Inter({ subsets: ['latin'], variable:"--font-inter" })

export const metadata: Metadata = {
  title: 'Meta Diaria - Gerenciado de habitos',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${dosis.variable} ${inter.variable} flex items-center flex-col mt-10 bg-neutral-900 `}>
        <Image src="/images/logo.png" width={200}  height={200} alt="logo - meta diaria"/> 
        
        {children}</body>
    </html>
  )
}
