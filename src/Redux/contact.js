import axios from 'axios';
const POST_CONTACT_DATA_REQUEST = 'POST_CONTACT_DATA_REQUEST';
const POST_CONTACT_DATA_SUCCESS = 'POST_CONTACT_DATA_SUCCESS';
const POST_CONTACT_DATA_FAILURE = 'POST_CONTACT_DATA_FAILURE';

export const postContactData = (form) => async (dispatch) => {
    try {
        dispatch({
            type: POST_CONTACT_DATA_REQUEST,
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.post('/api/contact/',
            form,
            config,
        )

        dispatch({
            type: POST_CONTACT_DATA_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: POST_CONTACT_DATA_FAILURE,
            payload: error.message,
        })
    }
}

export const postContactDataReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_CONTACT_DATA_REQUEST:
            return {
                loading: true,
            }
        case POST_CONTACT_DATA_SUCCESS:
            return {
                loading: false,
                success: true,
                data: action.payload,
            }
        case POST_CONTACT_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}