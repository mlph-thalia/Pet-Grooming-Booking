'use client'
import Image from 'next/image'
import logo from '@/assets/img/logo.png'
import type { FC } from 'react'

const Footer: FC = () => (
  <footer className="bg-footer-color text-dark-gray py-8">
    <div className="max-w-screen-lg mx-auto flex flex-col items-center px-4 text-center">
      <Image src={logo} alt="Pet Grooming Logo" width={50} height={30} />
      <h2 className="text-title-menu ">Pet Grooming Booking</h2>
      <nav className="flex gap-6 mt-4 text-dark-gray text-normal-title">
        <a href="/" className="hover:underline ">
          Home
        </a>
        <a href="/about" className="hover:underline">
          About
        </a>
        <a href="/services" className="hover:underline">
          Service Offer
        </a>
      </nav>
      <p className="text-normal-sm mt-4 opacity-70">© 2025 Pet Grooming Booking. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer
