import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from "./App.jsx"
import './index.css'
import { Provider } from "react-redux";
import  store  from "./Redux/Store/store.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <BrowserRouter>
       <App/>
     </BrowserRouter>
  </Provider>,
);