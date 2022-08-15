import axios from 'axios';
const GETSERVICE_DATA_REQUEST = 'GETSERVICE_DATA_REQUEST';
const GETSERVICE_DATA_SUCCESS = 'GETSERVICE_DATA_SUCCESS';
const GETSERVICE_DATA_FAILURE = 'GETSERVICE_DATA_FAILURE';

export const getServiceData = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GETSERVICE_DATA_REQUEST,
        })
        const { data } = await axios.get(`/api/service/${id}/`)
        dispatch({
            type: GETSERVICE_DATA_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GETSERVICE_DATA_FAILURE,
            payload: error.message,
        })
    }
}

export const getServiceDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GETSERVICE_DATA_REQUEST:
            return {
                loading: true,
            }
        case GETSERVICE_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            }
        case GETSERVICE_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}