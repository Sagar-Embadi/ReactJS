import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Task1 } from './Tasks/task1/task1';
import { Navbar1 } from './Tasks/Bootstrap/Navbar/Navbar';
import { Carousel1 } from './Tasks/Bootstrap/Carousel/Carousel';
import { ListRendering } from './Tasks/Bootstrap/Listrendering/listRendering';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar1/>
    <Carousel1/>
    <ListRendering/>
    {/* <App /> */}
    {/* <Task1></Task1> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
