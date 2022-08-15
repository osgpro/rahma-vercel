import React, { useEffect } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import { postMail } from '../Redux/gift'

const Success = ({ location }) => {

    const dispatch = useDispatch()

    const mailData = useSelector(state => state.postMail)
    const { data } = mailData

    const search = location.search

    useEffect(() => {
        let donor_email = new URLSearchParams(search).get('donor_email')
        let honoree_email = new URLSearchParams(search).get('honoree_email')
        let donor_name = new URLSearchParams(search).get('donor_name')
        let honoree_name = new URLSearchParams(search).get('honoree_name')
        let gift_price = new URLSearchParams(search).get('gift_price')
        let design_id = new URLSearchParams(search).get('design_id')
        let gift_id = new URLSearchParams(search).get('gift_id')
        let message = new URLSearchParams(search).get('message')

        let form = {
            donor_email,
            honoree_email,
            donor_name,
            honoree_name,
            gift_price,
            design_id,
            gift_id,
            message,
        }

        dispatch(postMail(form))

    }, [])

    return (
        <>
            <NavBar />
            <div className="container d-flex justify-content-center align-items-center py-5 my-5">
                <Alert show={true} variant="success">
                    <Alert.Heading>Email sent</Alert.Heading>
                    <p>
                        If you don't see the email in your inbox, please check your spam folder. Otherwise please contact us at <a href="mailto:info@rahmaww.org">info@rahmaww.org</a>
                    </p>
                </Alert>

            </div>
            <Footer />
        </>
    )
}

export default Success