'use client'
import Image from 'next/image'
import backimg from '../public/IMG_1004-2.jpg';
import Typewriter from 'typewriter-effect';
import img01 from '../public/IMG_1505.jpg';
import img02 from '../public/IMG_1484.jpg';
import img03 from '../public/IMG_0244.jpg';
import aboutme from "../public/IMG_004.jpg";
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Cards } from '@/componets/cards';
import { Cards2 } from '@/componets/cards2';
import { Cards3 } from '@/componets/cards3';

export default function Home() {
  const [isOpen,setIsOpen] = useState(false)
  useEffect(() => {
    document.getElementById('main')!.style.display = 'block'},
    [])
  return (
    
    <main id='main'>

      <style> 
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap');
      </style>
      <div id='dimmer'/>
      <div className='slide1'>
        <ul className='header'>
          <li className='li2'><h1><a>J-L</a></h1></li>
          <div className='lir'>
            <li className='li1'><h3><a href="#about_mes">About me</a></h3></li>
            <li className='li1'><h3><a href="#small_displays">Showcase</a></h3></li>
            <li className='li1'><h3><a href='#landingPhos'>Home</a></h3></li>
          </div>
          
        </ul>


        <div id="landingPhos" className='landingPho'>
          <Image className='homepageIMG'
            src={backimg}
            width={1728}
            height={1117}
            alt='/image/IMG_1004.jpg'
          />
          <h1 className='title'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.pauseFor(1000)
              typewriter.typeString('Joey Lam')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .start();
            }}
          />
          </h1> 
          <h3 className='titleCap'>Amature Photographer</h3>
        </div>




        <div className='transition'></div>
            
        <div id='small_displays' className='small_display'>
          
          <h1 className='text-center pt-10 smallDisTit'>My favorite photos</h1>
         <div className='card'><Cards /></div>
         <div className='card'><Cards2 /></div>
         <div className='card'><Cards3 /></div>


          
          

          
        </div>
        
      </div>


      <div id="about_mes" className='about_me'>
        <h2 className='text-center'>About me</h2>

        <div className='inline-flex abt_me_blog'>
          <div>
            <Image className='abtmeIMG'
              src={aboutme}
              width={400}
              height={600}
              alt='/image/IMG_1505.jpg'
              />
          </div>
          <div className='aboutmeText'>

            <p>Hi, my name is Joey Lam, and I'm a freshman at Boston University majoring in computer science and economics. I was always really interested in photography and computer science but never had the time to get into photography until recently. I currently use a T7 Rebel from Canon with an 18-58mm lens. I just recently got into photography as a way to document my journey from New York to Boston.
            </p>
          </div>
        </div>

        <div className='footer'>
            <div className='copyright'>
              <p>© by Joey Lam 2023</p>
            </div>
            <div className='socials'>
              <ul>
                <li><a href='https://www.linkedin.com/in/joey-lam-89057021b/'>LinkedIn</a></li>
                <li><a href='https://github.com/joeulam'>Github</a></li>
              </ul>
          </div>
            
        </div>
      </div>
     
    </main>
  )
}
