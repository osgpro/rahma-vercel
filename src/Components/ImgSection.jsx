import React from 'react'
import PropTypes from 'prop-types'

import child from "../Assets/images/ourwork-bg.jpg"


const imgSection = props => {
    return (
        <div className="">
            <div class="row" id="box-search">
                <div class="imgBox thumbnail text-center">
                    <img src={child} alt="" className='img-responsive' />
                    <div class="caption">
                        <p className='headLine'>{props.headLine}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

imgSection.propTypes = {}

export default imgSection