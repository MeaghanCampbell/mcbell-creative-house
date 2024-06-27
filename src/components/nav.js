'use client'

import { myeongjo } from '@/font-config'
import Link from 'next/link';
import { useState } from'react'

export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
      <nav className='relative'>

          {/* desktop nav */}
          <section className="new-white-background px-6 py-4 border-b border-black hidden md:block">
                <div className="space-x-16 uppercase text-xs tracking-wider flex items-center justify-between text-black max-w-7xl mx-auto">
                    <div className='space-x-10'>
                        <Link href="/">Home</Link>
                        <Link href="/services">Services</Link>
                    </div>
                    <div>
                        <p className={`${myeongjo.className} text-xl lg:text-2xl`}>McBell Creative House</p>
                    </div>
                    <div className='space-x-10'>
                        <Link href="/work">Work</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
          </section>

          {/* mobile nav */}
          <section className='absolute top-0  w-full md:hidden z-40'>

                <div className="flex justify-between items-center p-4 new-white-background border-b border-black">
                    <div className={`${myeongjo.className} text-2xl`}>MCH</div>
                    <button onClick={toggleMenu} className="md:hidden">
                        {menuOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                        }
                    </button>
                    <div className="hidden md:flex space-x-4">
                        <Link href="/">Home</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/work">Work</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                {menuOpen && (
                    <div className="left-0 w-full new-white-background border-b border-black md:hidden">
                        <div className="flex flex-col items-center space-y-4 p-4 text-sm tracking-wider uppercase">
                            <Link href="/" onClick={toggleMenu}>Home</Link>
                            <Link href="/services" onClick={toggleMenu}>Services</Link>
                            <Link href="/work" onClick={toggleMenu}>Work</Link>
                            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
                        </div>
                    </div>
                )}

          </section>

        </nav>
    );
}
