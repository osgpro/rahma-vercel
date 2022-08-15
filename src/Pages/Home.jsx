import React, { useEffect } from 'react'

const Home = ({ history }) => {

    useEffect(() => {
        history.push('/home-page')
    }, [])

    return (
        <></>
    )
}

export default Home