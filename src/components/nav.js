import { myeongjo } from '@/font-config'
import Link from 'next/link';

export default function Nav() {
    return (
      <nav>
          {/* desktop nav */}
          <section className="new-white-background px-6 py-4 border-b border-black">
                <div className="space-x-16 uppercase text-xs tracking-wider flex items-center justify-between text-black max-w-7xl mx-auto">
                    <div className='space-x-10'>
                        <Link href="/">Home</Link>
                        <Link href="/services">Services</Link>
                    </div>
                    <div>
                        <p className={`${myeongjo.className} text-2xl`}>McBell Creative House</p>
                    </div>
                    <div className='space-x-10'>
                        <Link href="/work">Work</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
          </section>

          {/* mobile nav */}
          <section>

          </section>
        </nav>
    );
}
