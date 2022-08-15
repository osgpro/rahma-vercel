import React from 'react'
import { useState } from 'react';
import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal';
import letter from '../Assets/images/letter.png'

const FooterModal = () => {
    const [open, setOpen] = useState(false);

    const letterimg = (
        <img src={letter} alt="" style={{width: '100%'}}/>
    );

    return (
        <>
        <h5 className="button underline" onClick={() => setOpen(true)} style={{cursor: 'pointer'}}>
            View IRS Letter
        </h5>
            <Modal open={open} onClose={() => setOpen(false)} center>
                {letterimg}
            </Modal>
        </>
    )
}

export default FooterModal