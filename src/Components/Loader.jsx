import React from 'react'
import { motion } from "framer-motion"

const Loader = () => {

    const svgVariants = {
        hidden: { opacity: 0.7 },
        visible: {
            opacity: 1,
            transition: { duration: 2, repeat: Infinity } 
        }
    }

    const pathVariants = {
        hidden: { 
            opacity: 0.7,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: { duration: 2, repeat: Infinity } 
        }
    }

    return (
        <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <motion.svg
            variants={svgVariants}
            initial='hidden'
            animate='visible'
            style={{width: '150px'}} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.84 8.56"><motion.path className='pathStroke' variants={pathVariants} d="M9.93,13.25a.84.84,0,0,0-1.68,0,.84.84,0,0,0,1.68,0" transform="translate(-0.08 -11.13)" style={{fill: 'none', stroke: '#2a7a33'}}/><motion.path 
            variants={pathVariants} className='pathStroke'
            d="M2.94,12.69a.52.52,0,1,0-.51.52.51.51,0,0,0,.51-.52" transform="translate(-0.08 -11.13)" style={{fill: 'none', stroke: '#2a7a33'}}/><polygon points="2.57 0 2.57 0 2.57 0 2.57 0 2.57 0 2.57 0 2.57 0 2.57 0" style={{fill: '#2a7a33'}}/><polygon points="2.52 0.03 2.53 0.04 2.53 0.03 2.53 0.03 2.52 0.03" style={{fill: 'none'}}/><path d="M2.64,11.14h0Z" transform="translate(-0.08 -11.13)" style={{fill: 'none'}}/><motion.path
            variants={pathVariants}
            className='pathStroke'
            d="M5.27,19.82A9.45,9.45,0,0,0,7.6,18.08a3.4,3.4,0,0,0,.83-1.32c.56-2-.89-2.21-1.23-2.21-1.18,0-2.29,1.59-2.45,1.59S3.42,14.38,2.06,14.2s-2,1.34-2,1.34A2.37,2.37,0,0,1,.23,15,1.81,1.81,0,0,1,2,13.48c1.55,0,2.3,1.29,2.77,1.29s1.24-1,2.11-1.08a2.12,2.12,0,0,1,1.06.14,2.42,2.42,0,0,1,1.43,2.22,3.27,3.27,0,0,1-.14,1,3.48,3.48,0,0,1-1.93,2,20,20,0,0,1-2,.82" transform="translate(-0.08 -11.13)" style={{stroke: '#2a7a33', strokeWidth: '0.2', fill: 'none'}}/></motion.svg>
        </div>
    )
}

export default Loader