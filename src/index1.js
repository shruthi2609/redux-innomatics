import React from "react"
import ReactDOM  from "react-dom"
import { Provider } from "react-redux"
import {createStore} from "redux"
import App from "./App1"
import reducer from "./reducers"
const count=createStore(
reducer
)
ReactDOM.render(
  <Provider store={count}>
  <App></App>
  </Provider>,document.getElementById("root")
)