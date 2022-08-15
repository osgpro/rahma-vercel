import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import ourWorkBg from '../Assets/images/download(15).jfif'
import Footer from '../Components/Footer'
import ChartComponent from '../Components/ChartComponent'
import DonateBtnAndsocialMedia from '../Components/DonateBtnAndsocialMedia'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOurWorkData } from '../Redux/ourWork'
import { ReactComponent as HeroSvgicon2 } from '../Assets/svgs/all-icons/icon-02.svg'
import { ReactComponent as HeroSvgicon3 } from '../Assets/svgs/all-icons/newIcons-06.svg'
import { ReactComponent as HeroSvgicon4 } from '../Assets/svgs/all-icons/newIcons-07.svg'
import { ReactComponent as HeroSvgicon5 } from '../Assets/svgs/all-icons/newIcons-08.svg'
import { ReactComponent as HeroSvgicon6 } from '../Assets/svgs/all-icons/newIcons-09.svg'
import { ReactComponent as HeroSvgicon7 } from '../Assets/svgs/all-icons/icon-07.svg'
import { ReactComponent as HeroSvgicon8 } from '../Assets/svgs/all-icons/newIcons-10.svg'
import { ReactComponent as HeroSvgicon9 } from '../Assets/svgs/all-icons/newIcons-11.svg'
import { ReactComponent as HeroSvgicon10 } from '../Assets/svgs/all-icons/newIcons-12.svg'
import { ReactComponent as HeroSvgicon11 } from '../Assets/svgs/all-icons/icon-11.svg'
import Loader from '../Components/Loader'

import bgShadow from '../Assets/images/rahmawebsitePAGES-02-02-02-02.jpg'
const OurWork = () => {

    const dispatch = useDispatch()

    const getWorkData = useSelector(state => state.getOurWorkData)
    const { loading, data, error } = getWorkData

    const [windosY, setWindowY] = useState()
    window.addEventListener('scroll', () => {
        setWindowY(window.scrollY)
    })

    useEffect(() => {
        dispatch(getOurWorkData())
    }, [])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : data ? (
                <>
                    <NavBar />
                    {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
                    <section className='ourWorkPage'>
                        <div>
                            <div className='shadowONtheImage'><img src={bgShadow} alt="" /></div>
                            <img src={ourWorkBg} alt="our work background" />
                            <h1 className="firsth1">Our Work</h1>
                        </div>
                        <div className="container">
                            <div className="work-items">
                                <h4>These are a few of our most recent programs. Each and every year, we carry out more than 1000 programs across various countries, involving people of every age, interest and need.</h4>
                                <div className='items'>
                                    <Link to={`/services/${10}`}>
                                        <HeroSvgicon11 />
                                        <p>Non-Food Items</p>
                                    </Link>
                                    <Link to={`/services/${9}`}>
                                        <HeroSvgicon10 />
                                        <p>W.A.S.H</p>
                                    </Link>
                                    <Link to={`/services/${8}`}>
                                        <HeroSvgicon9 />
                                        <p>Education</p>
                                    </Link>
                                    <Link to={`/services/${7}`}>
                                        <HeroSvgicon8 />
                                        <p>Health</p>
                                    </Link>
                                    <Link to="/udhia">
                                        <HeroSvgicon6 />
                                        <p>Seasonal Campaigns</p>
                                    </Link>
                                    <Link to={`/services/${1}`}>
                                        <HeroSvgicon2 />
                                        <p>Environment</p>
                                    </Link>
                                    <Link to={`/services/${2}`}>
                                        <HeroSvgicon3 />
                                        <p>Protection</p>
                                    </Link>
                                    <Link to={`/services/${3}`}>
                                        <HeroSvgicon4 />
                                        <p>Shelter</p>
                                    </Link>
                                    <Link to={`/services/${4}`}>
                                        <HeroSvgicon5 />
                                        <p>Nutrition</p>
                                    </Link>
                                    <Link to={`/services/${6}`}>
                                        <HeroSvgicon7 />
                                        <p>food security</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="seasonal_campaigns">
                        <div className="container">
                            <h1 className='h1-styles'>SEASONAL <span>CAMPAIGNS</span></h1>
                            <p className="seasonal-p">We run various campaigns for each season and religious holidays and events such as winter warming campaigns for refugees, udhiya, ramadan and zakaat campaigns and more</p>
                            <div className='seasonal_campaigns_box'>
                                {data['campaigns'].map(el => (
                                    <div key={el.id}>
                                        <img src={el.image} alt="" />
                                        <a href="https://rahmaww.donorsupport.co/-/XGDAEUZV" style={{ padding: '2rem', textDecoration: 'none' }}><h5>{el.title}</h5></a>
                                        <p>{el.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <ChartComponent bgColor="#f3f0ea" />
                    <Footer />
                </>
            ) : <></>}
        </>
    )
}

export default OurWork