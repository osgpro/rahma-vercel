import React, { useEffect } from 'react'
import { useState } from 'react'
import DonateBtnAndsocialMedia from '../Components/DonateBtnAndsocialMedia'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import bgShadow from '../Assets/images/rahmawebsitePAGES-02-02-02-02.jpg'
import headerImg from "../Assets/images/countypage.jpg"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCountryUpdateData } from '../Redux/whereWeWork'
import Loader from '../Components/Loader'

const CountryPageDetails = ({ match }) => {

    const id = match.params.id

    const dispatch = useDispatch()

    const getCountryUpdate = useSelector(state => state.getCountryUpdateData)
    const { loading, data, error } = getCountryUpdate

    const [windosY, setWindowY] = useState()
    window.addEventListener('scroll', () => {
        setWindowY(window.scrollY)
    })

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getCountryUpdateData(id))
    }, [dispatch, id])
    return (
        <>
            {loading && <Loader />}
            {data && (
                <>
                    <NavBar />
                    {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
                    <div style={{ backgroundColor: '#f3efea' }}>
                        <section className="countrypagedetails_header">
                            <div className='shadowONtheImage' style={{ opacity: '0.2' }}><img src={bgShadow} alt="" /></div>
                            <img src={data['updates'].main_image} />
                            <div className="container">
                                <p>{data['updates'].tag}</p>
                                <h5>{data['updates'].headline}</h5>
                                <p>{data['updates'].created_at.slice(0, 10)}</p>
                            </div>
                        </section>

                        <section className='country_Details_text'>
                            <div className="container">
                                <h5>{data['updates'].body_1}</h5>
                            </div>
                        </section>

                        <section className='news_features_detalis'>
                            <div className="container">
                                <div>
                                    <img src={data['updates'].body_image} alt="" />
                                    <div>
                                        {data['updates'].title}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className='country_Details_text'>
                            <div className="container">
                                <h5>{data['updates'].body_2}</h5>
                            </div>
                        </section>

                        <div className='countryVidContainer'>
                            <div className="container">
                                <p><iframe src={data['updates'].video_url}></iframe></p>
                            </div>
                        </div>

                        <section className='related_news'>
                            <div className="container">
                                <h1>Related News & Features</h1>
                            </div>
                            {data['related_updates_1'] !== null && data['related_updates_2'] !== null && (
                                <div className="container boxes">
                                    {
                                        <>
                                            <div className='box'>
                                                <img src={data['related_updates_1'].main_image} alt="" />
                                                <div>
                                                    <p>{data['related_updates_1'].tag}</p>
                                                    <h5>{data['related_updates_1'].title.length > 80 ? data['related_updates_1'].title.slice(0, 80) : data['related_updates_1'].title}</h5>
                                                    <Link to={`/country-details/${data['related_updates_1'].id}`}>Read More</Link>
                                                </div>
                                            </div>

                                            <div className='box'>
                                                <img src={data['related_updates_2'].main_image} alt="" />
                                                <div>
                                                    <p>{data['related_updates_2'].tag}</p>
                                                    <h5>{data['related_updates_2'].title.length > 80 ? data['related_updates_2'].title.slice(0, 80) : data['related_updates_2'].title}</h5>
                                                    <Link to={`/country-details/${data['related_updates_2'].id}`}>Read More</Link>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                            )}
                        </section>
                    </div>
                    <Footer />
                </>
            )}
            {error && <div>{error}</div>}
        </>
    )
}

export default CountryPageDetails