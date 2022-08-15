import React, { useEffect, useState } from 'react'
import ChartComponent from '../Components/ChartComponent'
import DonateBtnAndsocialMedia from '../Components/DonateBtnAndsocialMedia'
import Footer from '../Components/Footer'
import bgShadow from '../Assets/images/rahmawebsitePAGES-02-02-02-02.jpg'
import headerImg from "../Assets/images/covid_bg.jpg"
import NavBar from '../Components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { getCovidData } from '../Redux/covid'
import Loader from '../Components/Loader'

const Covid = () => {

    const dispatch = useDispatch()

    const covidData = useSelector(state => state.getCovidData)
    const { loading, data, error } = covidData

    const [windosY, setWindowY] = useState()
    window.addEventListener('scroll', () => {
        setWindowY(window.scrollY)
    })

    useEffect(() => {
        dispatch(getCovidData())
    }, [dispatch])

    return (
        <>
            {loading && <Loader />}
            {data && (
                <>
                    <NavBar passPrograms="active" />
                    {windosY >= 550 ? <DonateBtnAndsocialMedia /> : ""}

                    <section className="covid-header">
                        <div className='shadowONtheImage'><img src={bgShadow} alt="" /></div>
                        <img className='' src={data['data'][0].hero_image} />
                        <h1 style={{ fontWeight: '700' }}>{data['data'][0].title}</h1>
                    </section>

                    <section className='rahma-covid'>
                        <div className="container">
                            <h1>VACCINATION EFFORTS</h1>
                            <div className="videoDiv">
                                <iframe className="videoBox videoBox1" src={data['data'][0].video_url}></iframe>
                            </div>
                            <div className="videoDiscDiv">
                                <p className="videoDiscHead">{data['data'][0].content}
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className='vaccine_clinics'>
                        <h1>VACCINE CLINICS IN OAKLAND COUNTY, MICHIGAN</h1>
                        <h3>OUR CEO DR. SHADI ZAZA IS FULLY VACCINATED ALONG WITH MANY
                            OTHERS WHO SIGNED UP FOR THIS YEAR’S VACCINATION CLINICS </h3>
                        <div className="container">
                            <div>
                                {data['data'][0].images.map(image => (
                                    <img key={image.id} src={headerImg} alt="" />
                                ))}
                            </div>
                        </div>
                    </section>
                    <ChartComponent bgColor="#e3e3e3" />
                    <Footer />
                </>
            )}
        </>
    )
}

export default Covid