import axios from "axios";


const loadingOverlay = document.createElement('div');
loadingOverlay.className = 'loading-overlay-container';
document.body.appendChild(loadingOverlay);

const token = localStorage.getItem("token");

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
  headers: {
    "Content-type": "application/json",
    ...(token && {Authorization : `Bearer ${localStorage.getItem("access_token")}`})
    
  },
});

axiosClient.interceptors.request.use((request: any) => requestHandler(request));

axiosClient.interceptors.response.use(
  (response: any) => successHandler(response),
  (error: any) => errorHandler(error)
);

const errorHandler = (error: any) => {
  if (error.response.status === 401) {
    alert('hanle error 401')
  }
  if (error.response.status === 415) {
    alert('hanle error 415')
  }

  if (error.response.status === 500) {
    alert('hanle error 500')
  }

  return Promise.reject(error.response.data);
};

const successHandler = (response: any) => {
  loadingOverlay.classList.remove('show');
  return response.data;
};

const requestHandler = (request: any) => {
  loadingOverlay.classList.add('show');
  return request;
};

export default axiosClient;
