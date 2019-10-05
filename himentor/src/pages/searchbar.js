import React, { Component } from 'react';
import styled from 'styled-components';
import DropDown from './dropdown.js'



const Search = styled.div`
    display: flex;
`;


const Form = styled.form`
    display: inline;
    margin-left: 2vw;
//   display: flex;
//   justify-content: center;

`;

const Input = styled.input`
  margin-left: 1vw;
  margin-right: 1vw;
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 1vw; /*100%*/
  height: 2vw;

  background: transparent
    url("https://abeautifulsign.co.uk/images/magnifying-glass-3-xxl.png")
    no-repeat 9px center;
  background-size: 1vw;
  border: solid 1px #ccc;
  padding: 9px 10px 9px 32px;
  width: 50vw;
  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 0.5em;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  &:hover {
    background-color: #ededed;
    background: #ededed
      url("https://image.flaticon.com/icons/png/512/49/49116.png") no-repeat 9px
      center;
    background-size: 1.1vw;
  }
  &:focus {
    color: #000;
    background-color: #fff;
    background: #fff
      url("https://image.flaticon.com/icons/png/512/49/49116.png") no-repeat 9px
      center;
    background-size: 1.1vw;
    cursor: auto;
  }
  :before {
    background-image: url("https://www.columbiaspectator.com/pb/resources/img/CDSwhitemasthead.png");
  }
`;

const SubmitButton = styled.input`
  position:inline;
  height: 3vw;
  width:  10vw;
  font-size: 1em;
//   border-style: red;
  border: none;
  border-radius: 10px 10px 10px 10px;
`;




class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
        
        handleChange(event) {
        this.setState({value: event.target.value});
        }
        
        handleSubmit(event) {
        console.log('something happened')
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        }






render (){
    return(
        <Search>
            
            <DropDown/>
            <Form onSubmit={this.handleSubmit}>
            <lable>{this.props.buttonName}: </lable>
                <Input type="text" value={this.state.value} onChange={this.handleChange} />
            
            <SubmitButton type="submit" value="Submit"/>
            </Form >
        </Search>

    );




}
}
export default SearchBar;
