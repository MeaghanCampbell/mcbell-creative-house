import { literata } from '@/font-config'
import Link from 'next/link';

export default function Nav() {
    return (
      <nav>
          {/* desktop nav */}
          <section className="sand-background p-6">
              <div className="flex items-center justify-between blue max-w-7xl mx-auto">
                  <div>
                      <p className={`${literata.className} text-2xl`}>MCBELL CREATIVE HOUSE</p>
                  </div>
                  <div className="space-x-10 uppercase font-medium">
                      <Link href="/">Home</Link>
                      <Link href="/about">About</Link>
                      <Link href="/services">Services</Link>
                      <Link href="/portfolio">Portfolio</Link>
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