'use client'

import { myeongjo } from '@/font-config'
import Link from 'next/link'
import emailjs from 'emailjs-com';
emailjs.init('HogZOWObS3aupPFTN');
import { useState } from "react";

export default function Contact() {
    const [showError, setShowError] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bg9yfx9','template_enaumb4', e.target)
            .then((result) => {
                setShowSuccess(!showSuccess)
                console.log(result);
            }, (error) => {
                setShowError(!showError)
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <main className="">

            <section className='px-6 py-24 new-white-background'>
                <div className='max-w-7xl mx-auto'>
                    <h1 className={`${myeongjo.className} text-4xl md:text-6xl uppercase  text-center`}>Work With Us</h1>
                    <p className='mt-2 max-w-2xl mx-auto text-center'>copy</p>
                    <form onSubmit={sendEmail} className='max-w-2xl mx-auto mt-10 space-y-6'>
                        <div>
                            <label htmlFor="first-name" className="block leading-6">First name</label>
                            <div className="mt-1">
                                <input type="text" name="firstname" id="first-name" autoComplete="given-name" className="w-full block p-2 new-white-background border border-black" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="first-name" className="block leading-6">Last name</label>
                            <div className="mt-1">
                                <input type="text" name="lastname" id="last-name" autoComplete="family-name" className="w-full block p-2 new-white-background border border-black" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="first-name" className="block leading-6">Business name (Even if it's just your name)</label>
                            <div className="mt-1">
                                <input type="text" name="business" id="business-name" autoComplete="business-name" className="w-full block p-2 new-white-background border border-black" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="first-name" className="block leading-6">Email Address</label>
                            <div className="mt-1">
                                <input type="email" name="email" id="email" autoComplete="email" className="w-full block p-2 new-white-background border border-black" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="services" className="block leading-6">What services are you interested in? Check all that apply!</label>
                            <div className="mt-1">
                                <fieldset>
                                    <legend className="sr-only">Services</legend>
                                    <div className="space-y-1">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="branding" name="branding" type="checkbox" className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded" />
                                            </div>
                                            <div className="ml-3">
                                                <label htmlFor="branding">Branding</label>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="web-development" name="webdev" type="checkbox" className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded" />
                                            </div>
                                            <div className="ml-3">
                                                <label htmlFor="web-development">Web Development</label>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="web-design" name="webdes" type="checkbox" className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded" />
                                            </div>
                                            <div className="ml-3">
                                                <label htmlFor="graphic-design" className="">Web Design</label>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="ongoing" name="ongoing" type="checkbox" className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded" />
                                            </div>
                                            <div className="ml-3">
                                                <label htmlFor="seo">Ongoing Creative Services</label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="first-name" className="block leading-6">Tell us about your project! What kind of work do you need? Where are you at in your business journey? Do you have an initial vision for your brand? Anything you can think of that might help!</label>
                            <div className="mt-1">
                                <textarea name="message" className="w-full block p-2 new-white-background border border-black" />
                            </div>
                        </div>
                        {/* <div className='mt-4'>
                            <Link className='inline-block btn-bg transition text-white px-8 py-4 uppercase font-bold'>Submit</Link>
                        </div> */}
                        {showError && <p className="text-red-500 text-base">Form was unable to send. Please try again later.</p>}
                        {!showSuccess && <button type="submit" id="button" className="inline-block btn-bg transition text-white px-8 py-4 uppercase font-bold">Submit</button>}
                        {showSuccess && <>
                            <p className="py-1.5 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                Thank you for reaching out! We will get back to you shortly.
                            </p>
                        </>}
                  
                    </form>
                </div>

            </section>

        </main>
    );
}