import Image from 'next/image'
import backimg from '../public/IMG_1004-2.jpg';
import Typewriter from 'typewriter-effect';
import img01 from '../public/IMG_1505.jpg';
import img02 from '../public/IMG_1484.jpg';
import img03 from '../public/IMG_0244.jpg';
import aboutme from "../public/IMG_004.jpg";
import Link from 'next/link'


export default function Portfol() {
  return (
    <main id='main'>
      
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap');
      </style>
      <div className='slide1'>
        <ul className='header'>
          <li className='li2'><h1><a>J-L</a></h1></li>
          <div className='lir'>
            <li className='li1'><h3><a href="#about_mes">About me</a></h3></li>
            <li className='li1'><h3><Link href="/page.tsx">Portfolio</Link></h3></li>
            <li className='li1'><h3><a href="#small_displays">Showcase</a></h3></li>
            <li className='li1'><h3><a href='#landingPhos'>Home</a></h3></li>
          </div>
          
        </ul>

        
        

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