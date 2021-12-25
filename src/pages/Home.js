import React, {Component, useState} from 'react';
import axios from "axios";

class Home extends Component {



    render() {
        axios({
            //request
            method: "get",
            url: "https://144c2df3-3f18-4395-9ba5-b4962256fab7.mock.pstmn.io/themes/popular",
            responseType: "type"
        }).then(function (response) {
            console.log(response.data);
        }).catch(function(error) {
            console.log("실패");
        });

        return (

            <div>
                <h3> Home 페이지 입니다. </h3>
            </div>
        );
    }
}

export default Home;