import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './home/home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from './Login/Login';
import Task from './Task/Task';
import Api from './API/Api';

const Routercomponent = () => {
  return (
        <BrowserRouter>
             <Routes>
             <Route  path='/' element={<Login />}></Route>
             <Route  path='Home' element={<Home />}></Route>
             <Route  path='Task' element={<Task />}></Route>
             <Route  path='Api' element={<Api/>}></Route>
            </Routes>,
        </BrowserRouter>
  ) 
}
export default Routercomponent
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Routercomponent/> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
