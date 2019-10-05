import React, { Component } from 'react';
import styled from 'styled-components';



const Form = styled.form`
  display: inline;
`;

const Input = styled.input`
  margin-right: 1vw;
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 1vw; /*100%*/
  height: 0.7vw;

  background: transparent
    url("https://abeautifulsign.co.uk/images/magnifying-glass-3-xxl.png")
    no-repeat 9px center;
  background-size: 1vw;
  border: solid 1px #ccc;
  padding: 9px 10px 9px 32px;
  width: 6vw;
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
    width: 10vw;
    padding-left: 32px;
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
class SearchBar extends Component {
    constructor(){
        super();
    }
    // this.state = {
    //   };




render (){
    return(
        <div>
            lalalaldknadvjnaov
            <Form>
                  <Input />
            </Form>

        </div>

    )




};
}
export default SearchBar;
