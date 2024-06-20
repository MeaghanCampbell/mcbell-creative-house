import { myeongjo } from '@/font-config'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
      <main>

          <section className='px-6 pb-16 image-bg'>
                <div className='text-center text-white max-w-3xl mx-auto flex flex-col items-center justify-center h-full'>
                    <h1 className={`${myeongjo.className} text-7xl`}>TRANSFORM YOUR BRAND: from IDEAS to IMPACT</h1>       
                    <p className='max-w-xl mx-auto mb-6 mt-2 text-lg'>Launch your brand with end-to-end creative services including brand design, website design & development</p>
                    <Link href="/services" className='btn-bg transition text-white px-8 py-4 uppercase font-bold'>Learn More</Link>
                </div>
          </section>

          <div className='ovalDivider'></div>

          <section className='px-6 pb-24 dune-background'>
              <div className='max-w-7xl mx-auto flex justify-center'>
                  <Image
                    src="/assets/me.jpg"
                    width={400}
                    height={500}
                    alt="Headshot"
                  />
                  <div className='max-w-2xl h-full my-auto ml-10 text-white'>
                      <p className={`${myeongjo.className} text-6xl font-light mb-8 -ml-32 max-w-2xl`}>You deserve to have brand visuals that are a <span className='font-bold blue'>BOLD</span> as you are</p>
                      <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
              </div>
          </section>

          <section className='blue-background py-4'></section>

          <section className='px-6 py-24 sand-bg'>
                <div className='text-center text-white max-w-3xl mx-auto flex flex-col items-center justify-center h-full'>
                  
                </div>
          </section>

          <section className='px-6 py-24 blue-background'>

          </section>


      </main>
  );
}
