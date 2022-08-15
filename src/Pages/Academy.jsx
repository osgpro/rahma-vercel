import React, { useEffect, useState } from 'react'
import ChartComponent from '../Components/ChartComponent'
import DonateBtnAndsocialMedia from '../Components/DonateBtnAndsocialMedia'
import bgShadow from '../Assets/images/rahmawebsitePAGES-02-02-02-02.jpg'
import headerImg from "../Assets/images/academy_header-01.jpg"
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import { ReactComponent as AboutIcon1 } from '../Assets/svgs/all-icons/aboutIcons-03.svg'
import { ReactComponent as AboutIcon2 } from '../Assets/svgs/all-icons/aboutIcons-04.svg'
import { ReactComponent as AboutIcon3 } from '../Assets/svgs/all-icons/aboutIcons-05.svg'
import { ReactComponent as AboutIcon4 } from '../Assets/svgs/all-icons/aboutIcons-06.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getAcademyData } from '../Redux/academy'
import Loader from '../Components/Loader'

const Academy = () => {

    const dispatch = useDispatch()

    const getAcademy = useSelector(state => state.getAcademyData)
    const { loading, data, error } = getAcademy

    const [windosY, setWindowY] = useState()
    window.addEventListener('scroll', () => {
        setWindowY(window.scrollY)
    })

    useEffect(() => {
        dispatch(getAcademyData())
    }, [dispatch])

    return (
        <>
            {loading && <Loader />}
            {data && (
                <>
                    <NavBar passPrograms="active" />
                    {windosY >= 550 ? <DonateBtnAndsocialMedia /> : ""}
                    <section className="academy-header">
                        <div className='shadowONtheImage'><img src={bgShadow} alt="" /></div>
                        <img className='' src={data['data'][0].hero_image} />
                        <h1 style={{ fontWeight: '700' }}>{data['data'][0].title}</h1>
                    </section>

                    <section className='rahma-international-academy'>
                        <div className="container">
                            <div className="videoDiv">
                                <iframe className="videoBox videoBox1" src={data['data'][0].video_url}></iframe>
                            </div>
                            <div className="videoDiscDiv">
                                <p className="videoDiscHead">{data['data'][0].content}
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className='mission_vision'>
                        <div className="container">
                            <h3>MISSION & VISION</h3>
                            <h6>
                                WE STRIVE TO BUILDING MEANINGFUL RELATIONSHIPS BY CREATING A
                                RESPONSIVE AND INDIVIDUALIZED ACADEMIC EXPERIENCE, IN ORDER
                                TO BRING ABOUT THE BEST IN SCHOLARS WHO ARE COMPETENT AND
                                CONFIDENT FOR THE 21ST CENTURY.
                            </h6>
                        </div>
                    </section>

                    <div className='core_values_academy'>
                        <h3>CORE VALUES</h3>
                        <div className="container">
                            <div>
                                <AboutIcon1 />
                                <h6 style={{ textAlign: 'center' }}>REFLECTION AND REALIZATION</h6>
                            </div>

                            <div>
                                <AboutIcon2 />
                                <h6 style={{ textAlign: 'center' }}>INNOVATION AND INTELLECTUAL CURIOSITY</h6>
                            </div>

                            <div>
                                <AboutIcon3 />
                                <h6 style={{ textAlign: 'center' }}>ASPIRATION AND ACADEMIC EXCELLENCE</h6>
                            </div>
                        </div>
                    </div>

                    <section className='history_academy'>
                        <h1>HISTORY OF THE ACADEMY</h1>
                        <div className="container">
                            <div>
                                <h4>BEGINNINGS</h4>
                                <p>RAHMA INTERNATIONAL ACADEMY; A
                                    SUBSIDIARY OF RAHMA WORLDWIDE AID AND
                                    DEVELOPMENT, WAS REALIZED IN 2021.
                                    RAHMA WORLDWIDE; A NON-PROFIT
                                    ORGANIZATION, WHOSE HUMANITARIAN
                                    ACTIVITIES SPAN THE GLOBE, WAS ALWAYS
                                    INTERESTED IN THE EDUCATIONAL SECTOR
                                    SINCE DAY ONE OF ITS INCEPTION IN 2014. THE
                                    EFFORTS OF SHEDDING LIGHT ON THE
                                    IMPORTANCE OF EDUCATION, DESPITE
                                    UNSTABLE POLITICAL EVENTS AND
                                    INTERNATIONAL CRISES, STARTED BY
                                    DELIVERING SCHOOL SUPPLIES TO THOSE IN
                                    NEED, FUNDED UNIVERSITIES RESTORATION,
                                    AND LAUNCHED LECTURE SERIES TO
                                    EMPOWER AND EDUCATE, ALL IN THE HOPES
                                    OF BUILDING A BRIGHTER FUTURE. THE
                                    LECTURE SERIES FOCUSED ON LEARNING A
                                    NEW LANGUAGE TO HELP IMMIGRANTS AND
                                    REFUGEES IMPROVE THEIR CHANCES OF
                                    GETTING BETTER JOBS AND SUPPORT
                                    THEMSELVES AND THEIR FAMILIES IN A
                                    HUMANE WAY.</p>
                            </div>
                            <div>
                                <h4>EDUCATION</h4>
                                <p>OVER THE COURSE OF SEVEN
                                    YEARS RAHMA WORLDWIDE HAS
                                    CONTRIBUTED $252,226 TOWARDS
                                    EDUCATION IN OVER A DOZEN
                                    COUNTRIES WORLDWIDE. THE
                                    NUMBER OF TOTAL BENEFICIARIES
                                    WAS 22,833 INDIVIDUALS. IT IS THE
                                    CORE BELIEF OF RAHMA
                                    INTERNATIONAL ACADEMY THAT
                                    EDUCATION IS THE KEY FOR A
                                    BRIGHTER FUTURE. MOST
                                    RECENTLY, RAHMA
                                    INTERNATIONAL ACADEMY
                                    LAUNCHED ITS MOST RECENT
                                    CAMPAIGN, “TEACH ME, SO I CAN
                                    BE”, A CAMPAIGN THAT SPANS 13
                                    COUNTRIES AROUND THE GLOBE:
                                    FROM THE UNITED STATES TO
                                    BANGLADESH, AND FROM YEMEN
                                    TO TURKEY.</p>
                            </div>
                            <div>
                                <h4>PROGRESS</h4>
                                <p>OUR EDUCATIONAL CAMPAIGNS HAVE HELPED
                                    MANY COPE WITH THE STRESS OF COVID-19
                                    PANDEMIC. WE HELPED, THROUGH OUR
                                    GROUND TEAMS, BY TEACHING PEOPLE ABOUT
                                    THE BEST WAYS TO AVOID GETTING SICK;
                                    ESPECIALLY IN POORLY DEVELOPED
                                    COUNTRIES SUCH AS GHANA, NIGERIA, MALI,
                                    AND KENYA TO NAME FEW. A TEAM OF
                                    SPECIALISTS IN THE FIELD OF MENTAL HEALTH
                                    PLAYED A MAJOR ROLE IN HELPING
                                    INDIVIDUALS AND FAMILIES DEAL WITH PRE
                                    AND POST PANDEMIC CONSEQUENCES.</p>
                            </div>
                            <div>
                                <h4>EXPANSION</h4>
                                <p>BEING ABLE TO ADAPT TO NEW CHALLENGES
                                    AND REACH A GLOBAL AUDIENCE IN NEED,
                                    RAHMA INTERNATIONAL ACADEMY
                                    CONTINUES A JOURNEY THAT STARTED YEARS
                                    AGO BY A VISIONARY MAN; DR. SHADI ZAZA,
                                    THE PRESIDENT AND CEO OF RAHMA
                                    WORLDWIDE. HIS REALIZATION OF THE NEED,
                                    AND THE GIFT OF BEING ABLE TO ACT
                                    ACCORDINGLY MADE ALL OF THIS POSSIBLE.
                                    WHILE DR. ZAZA HOLDS THE TORCH FOR
                                    RAHMA INTERNATIONAL ACADEMY, WE SHALL
                                    BE IN THE LIGHT THAT GUIDES US TO WHERE
                                    WE WANT TO BE, AND HOW TO GET THERE</p>
                            </div>
                        </div>
                    </section>

                    <section className='rahma_aca_programs'>
                        <div className="container">
                            <h1>RAHMA INTERNATIONAL ACADEMY’S PROGRAM</h1>
                            <h2>{data['data'][0].courses[0].title}</h2>
                            <div className="videoDiv">
                                <iframe className="videoBox videoBox1" src={data['data'][0].courses[0].course_video_url}></iframe>
                            </div>
                            <p>{data['data'][0].courses[0].description}</p>
                        </div>
                    </section>

                    <section className='course_cost'>
                        <h1>COURSE COST</h1>
                        <h2>CURRENTLY, WE ARE ONLY OFFERING IN-PERSON COURSES AS WE KNOW
                            YOU’LL HAVE FUN WHILE LEARNING THE ART OF SAVING LIVES!</h2>
                        <div className="container">
                            <div>
                                <h1>${data['data'][0].courses[0].first_time_cost}</h1>
                                <h4>FIRST-TIMERS IN-PERSON</h4>
                            </div>
                            <div>
                                <h1>${data['data'][0].courses[0].renewal_cost}</h1>
                                <h4>RENEWALS IN-PERSON</h4>
                            </div>
                        </div>
                        <h3>TOO FAR? WE’LL COME TO YOU!!!</h3>
                        <h6 style={{textAlign: 'center', fontWeight: '500', margin: 'auto', width: '100%'}}>Call or email us for group rates and discounts.</h6>
                        <br />
                        <h5 style={{textAlign: 'center', margin: 'center'}}><a style={{textAlign: 'center', textDecoration: 'none', color: 'black', fontWeight: '700', margin: 'auto', width: '100%'}} href="mailTo:training@Rahmaww.org">Training@Rahmaww.org</a></h5>
                    </section>

                    <ChartComponent bgColor="#e3e3e3" />
                    <Footer />
                </>
            )}
        </>
    )
}

export default Academy