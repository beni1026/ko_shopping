import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div>
                <h3> Home 페이지 입니다. </h3>
                <a href="Detail"> 디테일페이지 </a>
                <a href="Basket"> 장바구니페이지</a>
            </div>
        );
    }
}

export default Home;