import axios from "axios";
const GET_STORY_DATA_REQUEST = "GET_STORY_DATA_REQUEST";
const GET_STORY_DATA_SUCCESS = "GET_STORY_DATA_SUCCESS";
const GET_STORY_DATA_FAILURE = "GET_STORY_DATA_FAILURE";

const GET_SINGLE_STORY_DATA_REQUEST = "GET_SINGLE_STORY_DATA_REQUEST";
const GET_SINGLE_STORY_DATA_SUCCESS = "GET_SINGLE_STORY_DATA_SUCCESS";
const GET_SINGLE_STORY_DATA_FAILURE = "GET_SINGLE_STORY_DATA_FAILURE";

export const getSuccessStoriesData = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_STORY_DATA_REQUEST,
    });
    const { data } = await axios.get(
      `https://rahmaww.org/api/success-stories/`
    );
    dispatch({
      type: GET_STORY_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_STORY_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const getSuccessStoriesDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_STORY_DATA_REQUEST:
      return {
        loading: true,
      };
    case GET_STORY_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_STORY_DATA_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getSingleSuccessStoriesDataAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SINGLE_STORY_DATA_REQUEST,
    });
    const { data } = await axios.get(
      `https://rahmaww.org/api/success-stories/${id}`
    );
    dispatch({
      type: GET_SINGLE_STORY_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_STORY_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const getSingleSuccessStoriesDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_STORY_DATA_REQUEST:
      return {
        loading: true,
      };
    case GET_SINGLE_STORY_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_SINGLE_STORY_DATA_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
