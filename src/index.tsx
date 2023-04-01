import React from "react";
import ReactDOM from "react-dom/client";
import { setupStore } from "./redux/store";
import { Provider } from 'react-redux'
import "./index.css";
import reportWebVitals from "./reportWebVitals"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/Home/Home";
import TopRate from './views/TopRate/TopRate'
import Layout from "./views/Layout/Layout";
import Movie from "./views/Detail/Detail";
import 'antd/dist/antd.min.css'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const allRouters = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/toprate",
    element: <TopRate />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  }
];

root.render(
  <React.StrictMode>
      <Provider store={setupStore()}>
        <BrowserRouter>
        
        <Routes>
            {
              allRouters.map((item: any, index) => {
                const CommonLayout = item.layout || Layout;

                return (
                  <Route key={index} path={item.path} element={<CommonLayout>{item.element}</CommonLayout>} />
                )
              })
            }
            <Route key="*" path='*' element={<div>handle 404 not found</div>} />
          </Routes>

        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
// root.render(<div>okk</div>)


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
