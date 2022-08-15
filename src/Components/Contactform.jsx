import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { postContactData } from '../Redux/contact';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactform = () => {

    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const contact = useSelector(state => state.postContactData)
    const { error } = contact;

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = {
            name: name,
            email: email,
            message: message,
        }

        dispatch(postContactData(form))
        toast.success("Form Submitted Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        })
    }

    return (
        <>
            <Form onSubmit={handleSubmit} className="formSection">
                <ToastContainer />
                {error && <div className="alert alert-danger">{error}</div>}
                <Form.Group className="mb-3 inputFormName" controlId="exampleForm.ControlInput1">
                    <Form.Label >Name <span style={{ color: "red" }}>*</span> </Form.Label>
                    <Form.Control onChange={(e) => setName(e.target.value)} required type="text" placeholder="Full Name" className='inputName' />
                </Form.Group>
                <Form.Group className="mb-3 inputFormEmail" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address <span style={{ color: "red" }}>*</span></Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="name@example.com" className='inputEmail' />
                </Form.Group>
                <Form.Group className="mb-3 inputFormMessage" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message <span style={{ color: "red" }}>*</span></Form.Label>
                    <Form.Control onChange={(e) => setMessage(e.target.value)} required className='inputText' placeholder="Your Message" as="textarea" rows={5} />
                </Form.Group>
                <div className="d-grid gap-2 ">
                    <Button size="lg" variant="primary" type="submit">
                        Send us a message
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default Contactform