import axios from 'axios';
const GET_ABOUT_DATA_REQUEST = 'GET_ABOUT_DATA_REQUEST';
const GET_ABOUT_DATA_SUCCESS = 'GET_ABOUT_DATA_SUCCESS';
const GET_ABOUT_DATA_FAILURE = 'GET_ABOUT_DATA_FAILURE';

export const getAboutData = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ABOUT_DATA_REQUEST,
        })
        const { data } = await axios.get('/api/about/')
        dispatch({
            type: GET_ABOUT_DATA_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_ABOUT_DATA_FAILURE,
            payload: error.message,
        })
    }
}

export const getAboutDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ABOUT_DATA_REQUEST:
            return {
                loading: true,
            }
        case GET_ABOUT_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            }
        case GET_ABOUT_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}