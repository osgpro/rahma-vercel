import axios from "axios";
const GET_MH_DATA_REQUEST = "GET_MH_DATA_REQUEST";
const GET_MH_DATA_SUCCESS = "GET_MH_DATA_SUCCESS";
const GET_MH_DATA_FAILURE = "GET_MH_DATA_FAILURE";

export const getMentalHealthData = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_MH_DATA_REQUEST,
    });
    const { data } = await axios.get("https://rahmaww.org/api/mh/");
    dispatch({
      type: GET_MH_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_MH_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const getMentalHealthDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MH_DATA_REQUEST:
      return {
        loading: true,
      };
    case GET_MH_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_MH_DATA_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
