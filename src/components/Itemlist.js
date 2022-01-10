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
            <div>
                <ListWrap>
                    <img src={img[0]} width="80%" />
                    <MainText>{name[0]}</MainText>
                    <SubText>{desc[0]}</SubText>
                </ListWrap>
                <ListWrap>
                    <img src={img[1]} width="80%" />
                    <MainText>{name[1]}</MainText>
                    <SubText>{desc[1]}</SubText>
                </ListWrap>
                <ListWrap>
                    <img src={img[2]} width="80%" />
                    <MainText>{name[2]}</MainText>
                    <SubText>{desc[2]}</SubText>
                </ListWrap>
            </div>
        );
    }
}
const ListWrap = styled.main`
  display: flex;
  text-align: left;
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