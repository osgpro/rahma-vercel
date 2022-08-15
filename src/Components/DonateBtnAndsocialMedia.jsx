import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { motion } from 'framer-motion'

const DonateBtnAndsocialMedia = () => {

    const [windosY, setWindowY] = useState()
    window.addEventListener('scroll', () => {
        setWindowY(window.scrollY)
    })

    var styleI = {
        backgroundColor: 'red',
        pointerEvents: 'auto',
    }

    const motionvar = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
        }
    }

    const actions = [
        {
            icon: <a
                href='https://www.facebook.com/RahmaWorldwide/' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-facebook-f" style={{ color: '#3b5998' }}></i></a>
        },
        {
            icon: <a
                href='https://www.instagram.com/rahmaworldwide/' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-instagram" style={{ color: '#bc2a8d' }}></i></a>
        },
        {
            icon: <a
                href='https://twitter.com/rahmaworldwide' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-twitter" style={{ color: '#1DA1F2' }}></i></a>
        },
        {
            icon: <a
                href='https://www.youtube.com/c/RahmaWorldwide' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-youtube" style={{ color: '#FF0000' }}></i></a>
        },
    ];

    const [enter, setEnter] = useState(false)

    useEffect(() => {
        const el = document.getElementById('footer_id')
        const observer = new window.IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setEnter(true)
                return
            }
            setEnter(false)
        }, {
            root: null,
            threshold: 0,
        })
        observer.observe(el);
    }, [])

    return (
        <>
            {!enter && (
                <div id="box4" className='donateBtnandsocialContainer'>
                    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }} className='MuiBoxBtnTest'>
                        <SpeedDial
                            ariaLabel=""
                            sx={{ position: 'absolute', bottom: 16, right: 16 }}
                            icon={<SpeedDialIcon />}
                        >
                            {actions.map((action) => (
                                <SpeedDialAction
                                    icon={action.icon}
                                />
                            ))}
                        </SpeedDial>
                    </Box>
                    <div className='donateBtnFix'>
                        <motion.a
                            variants={motionvar}
                            className="btndonateanimateed"
                            initial='hidden'
                            animate={windosY >= 550 ? 'visible' : 'hidden'}
                            layout
                            href="https://rahmaww.donorsupport.co/-/XGDAEUZV"> Donate <span style={{ marginLeft: '0.4rem' }}> Now</span> </motion.a>
                    </div>
                </div>
            )}
        </>
    )
}

export default DonateBtnAndsocialMedia