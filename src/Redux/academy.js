import axios from 'axios';
const GET_ACADEMY_DATA_REQUEST = 'GET_ACADEMY_DATA_REQUEST';
const GET_ACADEMY_DATA_SUCCESS = 'GET_ACADEMY_DATA_SUCCESS';
const GET_ACADEMY_DATA_FAILURE = 'GET_ACADEMY_DATA_FAILURE';

export const getAcademyData = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ACADEMY_DATA_REQUEST,
        })
        const { data } = await axios.get('/api/academy/')
        dispatch({
            type: GET_ACADEMY_DATA_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_ACADEMY_DATA_FAILURE,
            payload: error.message,
        })
    }
}

export const getAcademyDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ACADEMY_DATA_REQUEST:
            return {
                loading: true,
            }
        case GET_ACADEMY_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            }
        case GET_ACADEMY_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}