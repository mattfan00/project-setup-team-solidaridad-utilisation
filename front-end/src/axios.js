import axios from "axios"

const customAxios = axios.create({
  baseURL: 'http://localhost:4000'
})

customAxios.interceptors.request.use(function (config) {
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

export default customAxios