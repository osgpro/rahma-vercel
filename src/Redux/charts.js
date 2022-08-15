import axios from 'axios';
const GET_CHART_DATA_REQUEST = 'GET_CHART_DATA_REQUEST';
const GET_CHART_DATA_SUCCESS = 'GET_CHART_DATA_SUCCESS';
const GET_CHART_DATA_FAILURE = 'GET_CHART_DATA_FAILURE';

export const getChartsData = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_CHART_DATA_REQUEST,
        })
        const { data } = await axios.get('/api/charts/')
        dispatch({
            type: GET_CHART_DATA_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_CHART_DATA_FAILURE,
            payload: error.message,
        })
    }
}

export const getChartsDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CHART_DATA_REQUEST:
            return {
                loading: true,
            }
        case GET_CHART_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            }
        case GET_CHART_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}