import { Literata } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import { Lora } from 'next/font/google'
import { Nanum_Myeongjo } from 'next/font/google'


export const montserratt = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['200', '300', '400', '500', '600']
})

export const myeongjo = Nanum_Myeongjo({
  subsets: ['latin'],
  weight: ['400', '800']
})