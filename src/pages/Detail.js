import React, { Component } from 'react';
import axios from "axios";

class Detail extends Component {

    state={
        productList : [],
    };


    getItem=async()=>{
        // eslint-disable-next-line react/prop-types
        let productList= await axios.get("https://144c2df3-3f18-4395-9ba5-b4962256fab7.mock.pstmn.io/products/10");
        console.log(productList.data);
        productList=productList.data;
        console.log(JSON.stringify(productList));
        this.setState({productList});
    };


    componentDidMount(){
        console.log('in componentDidMount');
        this.getItem();
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Detail;