import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import axios from "axios"

axios.defaults.baseURL = process.env.NODE_ENV == "production" ? process.env.REACT_APP_API_URL : "http://localhost:4000"

axios.interceptors.request.use(function (config) {
  const localApplicantToken = localStorage.getItem("applicantToken")
  const localBusinessToken = localStorage.getItem('businessToken');

  if (localApplicantToken) {
    config.headers["Applicant-Authorization"] = `Bearer ${localApplicantToken}`;
  }

  if (localBusinessToken) {
    config.headers["Business-Authorization"] = `Bearer ${localBusinessToken}`;
  }

  return config;
}, error => {
  // handle the response error
  return Promise.reject(error);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
