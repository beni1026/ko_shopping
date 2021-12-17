import './App.css';
import Home from './pages/Home.js';
import Detail from './pages/Detail.js';
import Basket from './pages/Basket.js';
import {Route, Router} from 'react-router-dom';
import {Component} from "react";



class App extends Component {
  render() {
    return (
        <div>
            <Router>
                <Route exact path="/" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/basket" element={<Basket />} />
            </Router>

        </div>
    );
  }
}

export default App;
