'use client'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/img/logo.png'
import type { FC } from 'react'

const Header: FC = () => (
  <header className="bg-primary-green text-menu-white shadow-lg w-full">
    <div className="w-full px-8 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Image src={logo} alt="Pet Grooming Logo" width={50} height={50} className="rounded-lg" />
        <h1 className="text-title-head font-bold">Pet Grooming Booking</h1>
      </div>

      <nav>
        <ul className="flex items-center space-x-6 md:space-x-8">
          {['Home', 'About', 'Services'].map((text) => (
            <li key={text}>
              <Link
                href={`/${text === 'Home' ? '' : text.toLowerCase()}`}
                className="text-menu-white hover:text-gray-200 hover:underline transition-colors duration-200 text-normal-md font-medium"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
