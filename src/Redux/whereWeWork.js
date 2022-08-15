import axios from 'axios';
const GET_WWW_DATA_REQUEST = 'GET_WWW_DATA_REQUEST';
const GET_WWW_DATA_SUCCESS = 'GET_WWW_DATA_SUCCESS';
const GET_WWW_DATA_FAILURE = 'GET_WWW_DATA_FAILURE';

const GET_COUNTRY_DATA_REQUEST = 'GET_COUNTRY_DATA_REQUEST';
const GET_COUNTRY_DATA_SUCCESS = 'GET_COUNTRY_DATA_SUCCESS';
const GET_COUNTRY_DATA_FAILURE = 'GET_COUNTRY_DATA_FAILURE';

const GET_COUNTRY_UPDATES_REQUEST = 'GET_COUNTRY_UPDATES_REQUEST';
const GET_COUNTRY_UPDATES_SUCCESS = 'GET_COUNTRY_UPDATES_SUCCESS';
const GET_COUNTRY_UPDATES_FAILURE = 'GET_COUNTRY_UPDATES_FAILURE';

export const getWWWData = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_WWW_DATA_REQUEST,
        })
        const { data } = await axios.get('/api/where-we-work/')
        dispatch({
            type: GET_WWW_DATA_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_WWW_DATA_FAILURE,
            payload: error.message,
        })
    }
}

export const getWWWDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_WWW_DATA_REQUEST:
            return {
                loading: true,
            }
        case GET_WWW_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            }
        case GET_WWW_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export const getCountryData = (country) => async (dispatch) => {
    try {
        dispatch({
            type: GET_COUNTRY_DATA_REQUEST,
        })
        const { data } = await axios.get(`/api/where-we-work/${country}`)
        dispatch({
            type: GET_COUNTRY_DATA_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_COUNTRY_DATA_FAILURE,
            payload: error.message,
        })
    }
}

export const getCountryDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_COUNTRY_DATA_REQUEST:
            return {
                loading: true,
            }
        case GET_COUNTRY_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            }
        case GET_COUNTRY_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export const getCountryUpdateData = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_COUNTRY_UPDATES_REQUEST,
        })
        const { data } = await axios.get(`/api/updates/${id}`)
        dispatch({
            type: GET_COUNTRY_UPDATES_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_COUNTRY_UPDATES_FAILURE,
            payload: error.message,
        })
    }
}

export const getCountryUpdateDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_COUNTRY_UPDATES_REQUEST:
            return {
                loading: true,
            }
        case GET_COUNTRY_UPDATES_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            }
        case GET_COUNTRY_UPDATES_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}