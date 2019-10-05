import React, { Component } from 'react';
import SearchBar from './searchbar.js';
import styled from 'styled-components';



const DashContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;


class Dashboard extends Component {
    constructor(){
        super();
    }
    // this.state = {
    //   };




render (){
    return(
        <DashContainer>

        <SearchBar buttonName = {''}/> 
        {/* This is a button */}

        </DashContainer>

    )




};
}
export default Dashboard;
