import axios from "axios";
const GET_GIFT_DATA_REQUEST = "GET_GIFT_DATA_REQUEST";
const GET_GIFT_DATA_SUCCESS = "GET_GIFT_DATA_SUCCESS";
const GET_GIFT_DATA_FAILURE = "GET_GIFT_DATA_FAILURE";

export const getGiftData = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_GIFT_DATA_REQUEST,
    });
    const { data } = await axios.get("https://rahmaww.org/api/gifts/");
    dispatch({
      type: GET_GIFT_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_GIFT_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const getGiftDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_GIFT_DATA_REQUEST:
      return {
        loading: true,
      };
    case GET_GIFT_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_GIFT_DATA_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const POST_CHECKOUT_DATA_REQUEST = "POST_CHECKOUT_DATA_REQUEST";
const POST_CHECKOUT_DATA_SUCCESS = "POST_CHECKOUT_DATA_SUCCESS";
const POST_CHECKOUT_DATA_FAILURE = "POST_CHECKOUT_DATA_FAILURE";

export const postCheckout = (form) => async (dispatch) => {
  try {
    dispatch({
      type: POST_CHECKOUT_DATA_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://rahmaww.org/api/create-checkout-session/",
      form,
      config
    );

    dispatch({
      type: POST_CHECKOUT_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_CHECKOUT_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const postCheckoutReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CHECKOUT_DATA_REQUEST:
      return {
        loading: true,
      };
    case POST_CHECKOUT_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case POST_CHECKOUT_DATA_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const POST_MAIL_DATA_REQUEST = "POST_MAIL_DATA_REQUEST";
const POST_MAIL_DATA_SUCCESS = "POST_MAIL_DATA_SUCCESS";
const POST_MAIL_DATA_FAILURE = "POST_MAIL_DATA_FAILURE";

export const postMail = (form) => async (dispatch) => {
  try {
    dispatch({
      type: POST_MAIL_DATA_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://rahmaww.org/api/send_gift/",
      form,
      config
    );

    dispatch({
      type: POST_MAIL_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_MAIL_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const postMailReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CHECKOUT_DATA_REQUEST:
      return {
        loading: true,
      };
    case POST_CHECKOUT_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case POST_CHECKOUT_DATA_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
