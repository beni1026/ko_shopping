import React, {Component, useEffect, useState} from 'react';
import axios from "axios";
import Header from '../components/Header';
import styled from 'styled-components';
import Itemlist from "../components/Itemlist";

class Home extends Component {
    state={
        themeList : [],
        value : 0
    };

    getItem=async()=>{
        let themeList=await axios.get("https://144c2df3-3f18-4395-9ba5-b4962256fab7.mock.pstmn.io/themes/popular");
        themeList=themeList.data.themes;
        //console.log(JSON.stringify(themeList));
        this.setState({themeList});
    };

    componentDidMount(){
        //console.log('in componentDidMount');
        this.getItem();
    }

    render() {
        let name= this.state.themeList.map((themes)=>{
            return themes.name;
        });
        return (
            <div>
                <HomeWrap>
                    <Content onClick={function(e){
                        e.preventDefault();
                        this.setState({value:0});
                    }.bind(this)}>
                        <MainText>{name[0]}</MainText>
                    </Content>
                    <Content onClick={function(e){
                        e.preventDefault();
                        this.setState({value:3});
                    }.bind(this)}>
                        <MainText>{name[1]}</MainText>
                    </Content>
                    <Content onClick={function(e){
                        e.preventDefault();
                        this.setState({value:6});
                    }.bind(this)}>
                        <MainText>{name[2]}</MainText>
                    </Content>
                </HomeWrap>
                <Itemlist num = {this.state.value} ></Itemlist>
            </div>
        );
    }
}
const HomeWrap = styled.main`
  display: flex;
  gap: 9px;
  padding:60px 20px;
  justify-content:center;
  box-shadow: 0px 8px #EEEEEE;
`;

const Content=styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  min-width: 100px;
  width: 250px;
  padding:50px 25px;
  border: 1px solid #ffffff;
  &:hover {
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const MainText=styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 20px;
  color: white;
  line-height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.01em;
`;

export default Home;