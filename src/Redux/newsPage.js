import axios from 'axios';
const GET_NEWS_DATA_REQUEST = 'GET_NEWS_DATA_REQUEST';
const GET_NEWS_DATA_SUCCESS = 'GET_NEWS_DATA_SUCCESS';
const GET_NEWS_DATA_FAILURE = 'GET_NEWS_DATA_FAILURE';

const GET_NEWS_SINGLE_REQUEST = 'GET_NEWS_SINGLE_REQUEST';
const GET_NEWS_SINGLE_SUCCESS = 'GET_NEWS_SINGLE_SUCCESS';
const GET_NEWS_SINGLE_FAILURE = 'GET_NEWS_SINGLE_FAILURE';

export const getNewsData = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_NEWS_DATA_REQUEST,
        })
        const { data } = await axios.get('/api/news/')
        dispatch({
            type: GET_NEWS_DATA_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_NEWS_DATA_FAILURE,
            payload: error.message,
        })
    }
}

export const getNewsDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_NEWS_DATA_REQUEST:
            return {
                loading: true,
            }
        case GET_NEWS_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            }
        case GET_NEWS_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export const getSingleNewsData = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_NEWS_SINGLE_REQUEST,
        })
        const { data } = await axios.get(`/api/news/${id}`)
        dispatch({
            type: GET_NEWS_SINGLE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_NEWS_SINGLE_FAILURE,
            payload: error.message,
        })
    }
}

export const getSingleNewsDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_NEWS_SINGLE_REQUEST:
            return {
                loading: true,
            }
        case GET_NEWS_SINGLE_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            }
        case GET_NEWS_SINGLE_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}