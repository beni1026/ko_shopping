import React, {Component, useState} from 'react';
import axios from "axios";
import Header from '../components/Header';
import styled from 'styled-components';

const data = axios.get("https://144c2df3-3f18-4395-9ba5-b4962256fab7.mock.pstmn.io/themes/popular");

class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <HomeWrap>
                    <Content>
                        <MainText>{}</MainText>
                    </Content>
                    <Content>
                        <MainText>{}</MainText>
                    </Content>
                    <Content>
                        <MainText>{}</MainText>
                    </Content>
                </HomeWrap>
            </div>
        );
    }
}
const HomeWrap = styled.main`
  display: flex;
  gap: 8px;
  padding:64px 0px;
  justify-content:center;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    margin: 0 auto;
  }
`;
const Content=styled.div`
min-width: 100px;
width: 200px;
padding:24px;
background: rgba(0, 0, 0, 0.5);
border-radius: 10px;
`;

const MainText=styled.div`
line-height: 26px;
/* identical to box height, or 130% */
display: flex;
justify-content: center;
align-items: center;
letter-spacing: -0.01em;
`;

export default Home;