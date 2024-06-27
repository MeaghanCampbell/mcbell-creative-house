import { myeongjo } from '@/font-config'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/components/projects'

export default function Work() {

    return (
        <main>
            <section className='px-6 py-24 new-white-background'>
                <div className='max-w-7xl mx-auto text-center'>
                    <h1 className={`${myeongjo.className} text-4xl md:text-6xl uppercase`}>Featured Work</h1>
                    <p className='mt-2'>copy</p>
                    <div className='mt-10'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map(project => (
                                <div className='p-2 border border-black' key={project.id}>
                                    <div className='relative h-96'>
                                        <Image 
                                            src="/assets/mountain.jpg" 
                                            layout="fill"
                                            objectFit="cover"
                                            alt="Iceland"
                                        />
                                    </div>
                                    <div className='flex justify-between pt-3'>
                                        <p className={`${myeongjo.className} text-xl`}>{project.name}</p>
                                        <Link href="/portfolio" className='blue flex items-center font-medium text-sm'>
                                            <span className='mr-2'>VIEW</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}