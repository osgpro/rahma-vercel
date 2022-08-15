import React, { useEffect } from 'react'
import { ReactComponent as Chart } from '../Assets/svgs/all-icons/chart.svg'

import { ReactComponent as HeroSvgicon7 } from '../Assets/svgs/all-icons/icon-07.svg'
import { ReactComponent as HeroSvgicon8 } from '../Assets/svgs/all-icons/newIcons-10.svg'
import HartIcon from '../Assets/images/newImagepng-02.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChartsData } from '../Redux/charts'
import { ReactComponent as newIcom } from '../Assets/svgs/all-icons/newIconhard-01.svg'

const ChartComponent = ({ bgColor }) => {

    const dispatch = useDispatch()

    const getCharts = useSelector(state => state.getChartsData)
    const { loading, data, error } = getCharts

    const [color, setColor] = useState('')

    useEffect(() => {
        setColor(bgColor)
    }, [color])

    useEffect(() => {
        dispatch(getChartsData())
    }, [dispatch])
    return (
        <>
            {data && (
                <div className='Chart' style={{ backgroundColor: `${color}` }}>
                    <div className="container">
                        <div className='firstsection'>
                            <div className='allcampaigns'>
                                <div>
                                    <HeroSvgicon7 />
                                    <p>ALL CAMPAIGNS</p>
                                    <span>{data['charts'][0].all_campaigns}</span>
                                </div>
                                <div className='text'>
                                    <div>
                                        <p>FINISHED</p>
                                        <p>{data['charts'][0].finished_campaigns}</p>
                                    </div>
                                    <div>
                                        <p>ONGOING</p>
                                        <p>{data['charts'][0].on_going_campaigns}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='allcampaigns'>
                                <div>
                                    <HeroSvgicon8 />
                                    <p>ALL CAMPAIGNS</p>
                                    <span>{data['charts'][1].all_campaigns}</span>
                                </div>
                                <div className='text'>
                                    <div>
                                        <p>FINISHED</p>
                                        <p>{data['charts'][1].finished_campaigns}</p>
                                    </div>
                                    <div>
                                        <p>ONGOING</p>
                                        <p>{data['charts'][1].on_going_campaigns}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chartcontainer">
                            <div className='chartitself'>
                                <h4>Our Efficiency</h4>
                                <Chart />
                            </div>
                            <div className='chartinfo'>
                                <div className='ProgramServices'>
                                    <figure></figure>
                                    <b>92%</b>
                                    <p>Program Services</p>
                                </div>
                                <div className='MangmentGeneral'>
                                    <figure></figure>
                                    <b>2%</b>
                                    <p>Mangment & General</p>
                                </div>
                                <div className="Fundraising">
                                    <figure></figure>
                                    <b>6%</b>
                                    <p>Fundraising</p>
                                </div>
                                <a style={{ textDecoration: "none", color: "#ffffff" }} href="https://rahmaww.donorsupport.co/-/XGDAEUZV"> Donate <img src={HartIcon} alt="" /></a> 
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ChartComponent