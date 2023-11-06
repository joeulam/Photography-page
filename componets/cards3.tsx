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
import styles from './cards.module.css'

export function Cards3(){
    const [isOpen,setIsOpen] = useState(false)
    return(
        <div>
            <motion.div onClick={() => setIsOpen(!isOpen)}>
            {!isOpen &&(
                <motion.div>
                <div className='I03'>
                    <h2>03</h2>
                    <Image className='smallImg2'
                    src={img03}
                    width={800}
                    height={400}
                    alt='/image/IMG_0244.jpg'
                    />
                    <h3>"Night runner"</h3>
                </div>
                {dim(isOpen)}
                </motion.div>
                )}

                {isOpen && (
                    <div>
                        {pop()}
                        {dim(isOpen)}
                        <div className='I03'>
                            <h2>03</h2>
                            <Image className='smallImg2'
                            src={img03}
                            width={800}
                            height={400}
                            alt='/image/IMG_0244.jpg'
                            />
                            <h3>"Night runner"</h3>
                        </div>
                    </div>
                    
                )}
            </motion.div>
        </div>
          
    )
}
function dim(bool)
{
    useEffect(() => {
        if(bool){
            document.getElementById('dimmer').style.display=(bool?'block':'none')
        }
        else{
            document.getElementById('dimmer').style.display='none'
        }
        })
    return(
        <div></div>
    )
    
    
}  

function pop(){
    return(
        <motion.div id='cards'>
                    <div className='I01m'>
                        <div className='photoCard'>

                        <div>
                            <Image className='smallImgm3'
                            src={img03}
                            width={800}
                            height={400}
                            alt='/image/IMG_0244.jpg'
                            />
                        </div>
                        <div className='descript'>
                            <h3 id='title'>"Night runner"</h3>

                            <div className="info2">
                                <h3>Iso: <span className='yellow'>1600</span> </h3>
                                <h3>Time: <span className='yellow'>12:53 am</span></h3>
                                <h3>Aperture: <span className='yellow'>f/16</span></h3>
                                <h3>Exposure: <span className='yellow'>1/50</span></h3>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                </motion.div>
    )
}