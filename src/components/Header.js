import React from 'react';
import styled from 'styled-components';


function Header(){
    return(
        <HeaderWrap className='header'>
            <HeaderBox>
                <h2>코멘토 쇼핑</h2>
            </HeaderBox>
        </HeaderWrap>
    );
}

const HeaderWrap = styled.main`
    width: 100%;
    margin: 0 auto;
`;

const HeaderBox=styled.div`
  padding:20px;
  text-align: center;
  box-shadow: 0px 2px #EEEEEE;
`;

export default Header;