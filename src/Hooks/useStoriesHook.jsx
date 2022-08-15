import { useEffect, useState } from 'react'
import axios from 'axios'

const useStoriesHook = (pageNumber) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [stories, setStories] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setStories([])
    }, [])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: '/api/success-stories/',
            params: { page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setStories(prevNews => {
                return [...prevNews, ...res.data['stories'].map(b => b)]
            })
            setHasMore(res.data['stories'].length > 0 && res.data['pages'] > pageNumber)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [pageNumber])

    return { loading, error, stories, hasMore }
}

export default useStoriesHook