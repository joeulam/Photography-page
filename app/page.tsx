'use client'
import Image from 'next/image'
import backimg from '/Users/joeul/Desktop/port page/image/IMG_1004.jpg'
import Typewriter from 'typewriter-effect';


export default function Home() {
  return (
    <main>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap');
      </style>
      <div>
        <ul className='header'>
          <li className='li2'><h1><a>J-L</a></h1></li>
          <div className='lir'>
            <li className='li1'><h3><a>About me</a></h3></li>
            <li className='li1'><h3><a>Portfolio</a></h3></li>
            <li className='li1'><h3><a>Home</a></h3></li>
          </div>
          
        </ul>


        <div className='landingPho'>
          <Image className='homepageIMG'
            src={backimg}
            width={1728}
            height={1117}
            alt='/image/IMG_1004.jpg'
          />
          <h1 className='title'>
          <Typewriter
            onInit={(typewriter) => {
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

        <div>
          <h1>My favorite photos</h1>
          
        </div>
        
      </div>


      <div>

      </div>
    </main>
  )
}

