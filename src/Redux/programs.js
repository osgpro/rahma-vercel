import axios from 'axios';
const GET_PROGRAMS_DATA_REQUEST = 'GET_PROGRAMS_DATA_REQUEST';
const GET_PROGRAMS_DATA_SUCCESS = 'GET_PROGRAMS_DATA_SUCCESS';
const GET_PROGRAMS_DATA_FAILURE = 'GET_PROGRAMS_DATA_FAILURE';

export const getProgramsData = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_PROGRAMS_DATA_REQUEST,
        })
        const { data } = await axios.get('/api/programs/')
        dispatch({
            type: GET_PROGRAMS_DATA_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_PROGRAMS_DATA_FAILURE,
            payload: error.message,
        })
    }
}

export const getProgramsDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PROGRAMS_DATA_REQUEST:
            return {
                loading: true,
            }
        case GET_PROGRAMS_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            }
        case GET_PROGRAMS_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}