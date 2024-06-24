import { myeongjo } from '@/font-config'
import Link from 'next/link';

export default function Nav() {
    return (
      <nav>
          {/* desktop nav */}
          <section className="new-white-background px-6 py-4 black-bottom-brdr">
              <div className="flex items-center justify-between text-black max-w-7xl mx-auto">
                  <div>
                      <p className={`${myeongjo.className} font-bold text-2xl`}>McBell Creative House</p>
                  </div>
                  <div className="space-x-10 uppercase font-medium text-sm">
                      <Link href="/">Home</Link>
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
