import axios from 'axios';
const GET_UDHIA_DATA_REQUEST = 'GET_UDHIA_DATA_REQUEST';
const GET_UDHIA_DATA_SUCCESS = 'GET_UDHIA_DATA_SUCCESS';
const GET_UDHIA_DATA_FAILURE = 'GET_UDHIA_DATA_FAILURE';

export const getUdhiaData = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_UDHIA_DATA_REQUEST,
        })
        const { data } = await axios.get('/api/udhia/')
        dispatch({
            type: GET_UDHIA_DATA_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_UDHIA_DATA_FAILURE,
            payload: error.message,
        })
    }
}

export const getUdhiaDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_UDHIA_DATA_REQUEST:
            return {
                loading: true,
            }
        case GET_UDHIA_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            }
        case GET_UDHIA_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}