import React from 'react'
import { motion } from "framer-motion"

const Path = () => {

    const transition = { duration: 70, yoyo: Infinity };
    // const sngVariants = {
    //     hidden: { opacity: 0.9 },
    //     visible: {
    //         opacity: 1,
    //         transition: { duration : 1 },
    //     }
    // }

    // const pathVariants = {
    //     hidden: {
    //         pathLength: 0
    //     },
    //     visible: {
    //         pathLength: 1,
    //         transition: {
    //             duration: 3,
    //             ease: 'easeInOut',
    //         }
    //     }
    // }

    const path = 'M19.21,10a9.22,9.22,0,1,1-3.59-7.29A9.15,9.15,0,0,1,19.21,10Z'

    // return (
        
        // <div style={{width: '200px', height: '200px', margin: ' 2rem auto', position: 'relative'}}>
        //     {/* <motion.svg
        //         className='svg'
        //         style={{width: '100%', height: '100%'}}
        //         viewBox='0 0 757.75 1279'
        //         variants={sngVariants}
        //         initial='hidden'
        //         animate='visible'
        //     >
        //     <motion.path
        //         fill='none'
        //         stroke='#58a67a'
        //         strokeWidth={1}
        //         variants={pathVariants}
        //         d={path}
        //     />
        //     </motion.svg> */}

        //     <svg 
        //     className='svg'
        //     style={{width: '100%', hegiht: '100%'}}
        //     initial='hidden'
        //     animate='visible'
        //     viewBox="0 0 204 204">
        //         <motion.path
        //         d="M195.86,100a95.86,95.86,0,1,1-23.81-63.23A95.53,95.53,0,0,1,195.86,100Z"
        //         fill='none'
        //         stroke='#e3e3e3'
        //         strokeWidth={5}
        //         // variants={pathVariants}
        //         // initial={{ pathLength: 0 }}
        //         // animate={{ pathLength: 1 }}
        //         strokeLinecap="round"
        //         transition={transition}/>
        //     </svg>

        //     <motion.div
        //     initial={{ offsetDistance: "0%"}}
        //     animate={{ offsetDistance: "100%"}}
        //     transition={transition}
        //     style={{width: '20px', height: '20px', backgroundColor: '#2b3990', borderRadius: '50%', position: "absolute", top: '0', left: '0', offsetPath: 'path("M195.86,100a95.86,95.86,0,1,1-23.81-63.23A95.53,95.53,0,0,1,195.86,100Z")'}} />
        // </div>
    // )
}

export default Path