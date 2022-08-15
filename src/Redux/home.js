import axios from 'axios';
const GET_HOME_DATA_REQUEST = 'GET_HOME_DATA_REQUEST';
const GET_HOME_DATA_SUCCESS = 'GET_HOME_DATA_SUCCESS';
const GET_HOME_DATA_FAILURE = 'GET_HOME_DATA_FAILURE';

export const getHomeData = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_HOME_DATA_REQUEST,
        })
        const { data } = await axios.get('/api/home/')
        dispatch({
            type: GET_HOME_DATA_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_HOME_DATA_FAILURE,
            payload: error.message,
        })
    }
}

export const getHomeDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_HOME_DATA_REQUEST:
            return {
                loading: true,
            }
        case GET_HOME_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            }
        case GET_HOME_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}