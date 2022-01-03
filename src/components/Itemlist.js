import React, { Component } from 'react';
import axios from "axios";
import styled from "styled-components";

class Itemlist extends Component {
    state={
        productList : [],
    };

    getItem=async()=>{
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
            <ListWrap>
                <ImgBox><img src={img[0]} width='100%' /></ImgBox>
                <MainText>{name[0]}</MainText>
                <SubText>{desc[0]}</SubText>
            </ListWrap>
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
  text-align: left;
  font-weight: bold;
  font-size: 20px;
`;
const SubText = styled.main`
  text-align: left;
  font-size: 16px;
`;

const ImgBox = styled.main`
  width: 80%;
`;

const img = styled.main`
  height: 20%;
  object-fit: fill;
`;

export default Itemlist;