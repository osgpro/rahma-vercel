import axios from 'axios';
const GET_COVID_DATA_REQUEST = 'GET_COVID_DATA_REQUEST';
const GET_COVID_DATA_SUCCESS = 'GET_COVID_DATA_SUCCESS';
const GET_COVID_DATA_FAILURE = 'GET_COVID_DATA_FAILURE';

export const getCovidData = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_COVID_DATA_REQUEST,
        })
        const { data } = await axios.get('/api/covid/')
        dispatch({
            type: GET_COVID_DATA_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_COVID_DATA_FAILURE,
            payload: error.message,
        })
    }
}

export const getCovidDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_COVID_DATA_REQUEST:
            return {
                loading: true,
            }
        case GET_COVID_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            }
        case GET_COVID_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}