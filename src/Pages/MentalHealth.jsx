import React, { useEffect, useState } from 'react'
import ChartComponent from '../Components/ChartComponent'
import DonateBtnAndsocialMedia from '../Components/DonateBtnAndsocialMedia'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import mentalImage from '../Assets/images/mental_health-01.jpg'
import newLogo from '../Assets/images/new_logo-01.png'
import { PopupWidget } from "react-calendly";
import { useDispatch, useSelector } from 'react-redux'
import { getMentalHealthData } from '../Redux/mentalHealth'
import Loader from '../Components/Loader'

const MentalHealth = () => {

    const dispatch = useDispatch()

    const getMH = useSelector(state => state.getMentalHealthData)
    const { loading, data, error } = getMH

    const [windosY, setWindowY] = useState()
    window.addEventListener('scroll', () => {
        setWindowY(window.scrollY)
    })

    useEffect(() => {
        dispatch(getMentalHealthData())
    }, [dispatch])

    return (
        <>
            {loading && (<Loader />)}
            {data && (
                <>
                    <NavBar passPrograms="active" />
                    {windosY >= 550 ? <DonateBtnAndsocialMedia /> : ""}
                    <section className="mental-header">
                        <img src={data['data'][0].hero_image} alt="" />
                    </section>

                    <section className='rahma-mental-health'>
                        <div className="container">
                            <h1>{data['data'][0].title}</h1>
                            <div className="videoDiv">
                                <iframe className="videoBox videoBox1" src={data['data'][0].video_url}></iframe>
                            </div>
                            <div className="videoDiscDiv">
                                <p className="videoDiscHead">{data['data'][0].content}</p>
                            </div>
                        </div>
                    </section>

                    {/* {data['data'].data[0].services.map(service => (
                        {service.title}
                        {service.content}
                    ))} */}
                    <section className='mental_text_section'>
                        <div className="container">
                            <div style={{width: "100%", display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} className="text_holder">
                                {data['data'][0].services.map(service => (
                                    <div style={{minWidth: '45%', width: '45%'}}>
                                        <h1>{service.title}</h1>
                                        <p style={{whiteSpace: 'break-spaces'}}>{service.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* <section className='private_therapy_session'>
                        <div className="container">
                            <h2>PRIVATE THERAPY SESSION BOOK NOW</h2>
                            <div className="container_ribbon" data-ribbon="POWERED BY Calendly ">
                                <img src={newLogo} alt="" />
                                <h4>Rahma MAH</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sequi unde? Aperiam fugiat deleniti, corrupti cupiditate atque eos, deserunt commodi ipsa fugit facere totam, numquam porro neque ab accusamus reiciendis!</p>
                            </div>
                            <button>calendar</button>
                        </div>
                    </section> */}
                    {/* 
                    <PopupWidget
                    url="https://calendly-embed.com/pop-up-text-2/"
                    
                        * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                        * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                        
                    rootElement={document.getElementById("root")}
                    text="Click here to schedule!"
                    textColor="#ffffff"
                    color="#00a2ff"
                    /> */}

                    <section className='mental_screening'>
                        <div className="container">
                            <div>
                                <h3>MENTAL HEALTH SCREENING</h3>
                                <h3>فحوصات الحالة النفسية موجودين باللغتين العربية والانجليزية</h3>
                            </div>
                            <div>
                                <a href="https://screening.mhanational.org/screening-tools/depression/?ref">DEPRESSION TEST (ENGLISH)</a>
                                <a href="https://screening.mhanational.org/screening-tools/anxiety/?ref">ANXIETY TEST (ENGLISH)</a>
                                <a href="https://screening.mhanational.org/screening-tools/bipolar/?ref">BIPOLAR TEST (ENGLISH)</a>
                                <a href="https://screening.mhanational.org/screening-tools/depression/?ref">فحص الاكتئاب (العربية)</a>
                                <a href="https://screening.mhanational.org/screening-tools/anxiety/?ref">تقييم القلق (العربية)</a>
                                <a href="https://screening.mhanational.org/screening-tools/bipolar/?ref">فحص الاكتئاب (العربية)</a>
                            </div>
                        </div>
                    </section>

                    <section className='mental_seminars'>
                        <div className="container">
                            <h1>MENTAL HEALTH SEMINARS</h1>
                            <div className='videos_container'>
                                {data['data'][0].seminars.map(seminar => (
                                    <div key={seminar.id} className='first_vid'>
                                        <h2>{seminar.title}</h2>
                                        <div className="videoDiv">
                                            <iframe className="videoBox videoBox1" src={seminar.video_url}></iframe>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <h6>THESE ARE A FEW OF OUR MOST RECENT PROGRAMS. EACH AND EVERY YEAR, WE CARRY OUT
                                MORE THAN 1000 PROGRAMS ACROSS VARIOUS COUNTRIES, INVOLVING PEOPLE OF EVERY
                                AGE, INTEREST AND NEED.</h6>
                        </div>
                    </section>
                    <ChartComponent />
                    <Footer />
                </>
            )}
        </>
    )
}

export default MentalHealth