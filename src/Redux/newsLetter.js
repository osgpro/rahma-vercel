import axios from 'axios';
const POST_LETTER_DATA_REQUEST = 'POST_LETTER_DATA_REQUEST';
const POST_LETTER_DATA_SUCCESS = 'POST_LETTER_DATA_SUCCESS';
const POST_LETTER_DATA_FAILURE = 'POST_LETTER_DATA_FAILURE';

export const postNewsLetterData = (form) => async (dispatch) => {
    try {
        dispatch({
            type: POST_LETTER_DATA_REQUEST,
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.post('/api/newsletter/',
            form,
            config,
        )

        dispatch({
            type: POST_LETTER_DATA_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: POST_LETTER_DATA_FAILURE,
            payload: error.message,
        })
    }
}

export const postNewsLetterDataReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_LETTER_DATA_REQUEST:
            return {
                loading: true,
            }
        case POST_LETTER_DATA_SUCCESS:
            return {
                loading: false,
                success: true,
                data: action.payload,
            }
        case POST_LETTER_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}