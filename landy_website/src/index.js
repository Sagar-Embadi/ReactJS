import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Navbar } from './Components/navbar/navbar';
import { Banner } from './Components/Banner/Banner';
import { Intro } from './Components/Intro/Intro';
import { Response } from './Components/Response/Response';
import { Section, Section2 } from './Components/Section/Section';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Banner/>
    <Intro/>
    <Response/>
    <Section/>
    <Section2/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
