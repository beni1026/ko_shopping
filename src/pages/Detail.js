import React, { Component } from 'react';
import axios from "axios";

class Detail extends Component {

    state={
        productList : [],
    };


    getItem=async()=>{
        // eslint-disable-next-line react/prop-types
        let productList= await axios.get("https://144c2df3-3f18-4395-9ba5-b4962256fab7.mock.pstmn.io/products/10");
        //console.log(productList.data.themes);
        productList=productList.data.themes;
        this.setState({productList});
    };


    componentDidMount(){
        console.log('in componentDidMount');
        this.getItem();
    }

    render() {
        let detail= this.state.productList.map((products)=>{
            return products.detail;
        });
        return (
            <div>
                <img src={detail[0]} />
                <button>상품 설명</button>
                <button>상품 후기</button>
            </div>
        );
    }
}

export default Detail;