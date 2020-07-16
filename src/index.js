import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Tabbar from './components/Tabbar.js'
import { Provider } from 'react-redux'
import store from './store'
import 'amfe-flexible'
import './common/style/index.scss'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
