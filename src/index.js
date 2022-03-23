import React from "react";
import ReactDOM  from "react-dom";
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import userReducer from "./Slices/userSlice"
import App from "./App";
const userData=configureStore(
    {
        reducer:{
            user:userReducer
        }
    }
)
ReactDOM.render(
    <Provider store={userData}>
        <App></App>
    </Provider>,document.getElementById("root")
)

