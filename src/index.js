import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./Assets/styles/sass/layout/modal-video.css";
import "./Assets/styles/sass/layout/swiper.css";
import "./Assets/styles/main.css";
import "./Assets/styles/imgSection.css";

import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
