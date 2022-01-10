import React, { Component } from 'react';
import axios from "axios";
import styled from "styled-components";
import {Link} from "react-router-dom";


class Itemlist extends Component {

    state={
        productList : [],
    };


    getItem=async()=>{
        // eslint-disable-next-line react/prop-types
        let productList=await axios.get("https://144c2df3-3f18-4395-9ba5-b4962256fab7.mock.pstmn.io/themes/1/products");
        productList=productList.data.products;
        console.log(JSON.stringify(productList));
        this.setState({productList});
    };


    componentDidMount(){
        console.log('in componentDidMount');
        this.getItem();
    }

    render() {
        // eslint-disable-next-line react/prop-types
        let num = this.props.num;
        let name= this.state.productList.map((products)=>{
            return products.name;
        });
        let desc= this.state.productList.map((products)=>{
            return products.description;
        });
        let img= this.state.productList.map((products)=>{
            return products.thumbnail;
        });
        return (
            <div>
                {/* eslint-disable-next-line react/prop-types */}
                <h3>{this.props.num}</h3>
                <ListWrap>
                    <Link to="/Detail">
                        <img src={img[num]} width="80%" />
                        <MainText>{name[num]}</MainText>
                        <SubText>{desc[num]}</SubText>
                    </Link>
                </ListWrap>
                <ListWrap>
                    <Link to="/Detail">
                        <img src={img[num+1]} width="80%" />
                        <MainText>{name[num+1]}</MainText>
                        <SubText>{desc[num+1]}</SubText>
                    </Link>
                </ListWrap>
                <ListWrap>
                    <Link to="/Detail">
                        <img src={img[num+2]} width="80%" />
                        <MainText>{name[num+2]}</MainText>
                        <SubText>{desc[num+2]}</SubText>
                    </Link>
                </ListWrap>
            </div>
        );
    }
}
const ListWrap = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0px;
`;
const MainText = styled.main`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;
const SubText = styled.main`
  text-align: left;
  font-size: 16px;
`;

export default Itemlist;