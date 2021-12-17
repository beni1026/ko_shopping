import './App.css';
import Home from './pages/Home.js';
import Detail from './pages/Detail.js';
import Basket from './pages/Basket.js';
import {Link, Route, Routes} from 'react-router-dom';
import {Component} from "react";



class App extends Component {
  render() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/basket" element={<Basket />} />
            </Routes>

            <Link to="/">  홈 </Link> <br/>
            <Link to="/detail"> 디테일페이지 </Link> <br/>
            <Link to="/basket"> 장바구니페이지</Link>

        </div>
    );
  }
}

export default App;
