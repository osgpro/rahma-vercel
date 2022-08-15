import React, { useEffect, useState } from 'react'
import {ReactComponent as Map} from './Map.svg'
import { motion } from "framer-motion"
import useMouse from '@react-hook/mouse-position'

const MapComponent = () => {

    return (
        <>  
            <motion.div 
            // variants={MapContainerAnimate}
            // initial={'hidden'}
            // animate={clicked ? 'visible' : 'hidden'}
            className="MapContainer">
                <Map/>
                {/* <div className='mapHovercircle' id='mapHovercircle'>
                    <div className='mapHovercircle1'>
                        <div className='mapHovercircle2'>
                        </div>
                    </div>
                </div> */}
            </motion.div>
        </>
    )
}   

export default MapComponent