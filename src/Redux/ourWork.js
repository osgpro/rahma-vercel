import axios from 'axios';
const GET_WORK_DATA_REQUEST = 'GET_WORK_DATA_REQUEST';
const GET_WORK_DATA_SUCCESS = 'GET_WORK_DATA_SUCCESS';
const GET_WORK_DATA_FAILURE = 'GET_WORK_DATA_FAILURE';

export const getOurWorkData = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_WORK_DATA_REQUEST,
        })
        const { data } = await axios.get('/api/our-work/')
        dispatch({
            type: GET_WORK_DATA_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_WORK_DATA_FAILURE,
            payload: error.message,
        })
    }
}

export const getOurWorkDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_WORK_DATA_REQUEST:
            return {
                loading: true,
            }
        case GET_WORK_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            }
        case GET_WORK_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}