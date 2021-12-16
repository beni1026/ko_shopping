import './App.css';
import Home from './pages/Home.js';
import Detail from './pages/Detail.js';
import Basket from './pages/Basket.js';
import {Route, Routes} from 'react-router-dom';
import {Component} from "react";



class App extends Component {
  render() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/basket" element={<Basket />} />
            </Routes>


        </div>
    );
  }
}





export default App;
