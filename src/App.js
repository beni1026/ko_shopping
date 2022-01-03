import './App.css';
import Home from './pages/Home.js';
import Detail from './pages/Detail.js';
import Basket from './pages/Basket.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React, {Component} from "react";
import Header from "./components/Header";



class App extends Component {
    render() {
        return (
            <BrowserRouter basename="/ko_shopping">
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/basket' element={<Basket />} />
                    <Route path='/detail' element={<Detail />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
