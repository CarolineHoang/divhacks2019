import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
    border-style: solid red;
    width: 10vw;
//   display: flex;
//   justify-content: center;

`;

const DDSelector = styled.input`
    display: inline;
    height: 3vw;
    width: 10vw;
    font-size: 1em;
    // border-radius: 10%;
    border: solid lightgrey;
    border-weight: 0 px 2px 0px 2px;

`;
const DDSelection = styled.input`
    display: inline;
    height: 3.7vw;
    width: 10vw;
    font-size: 1em;
    color: grey;
    border: solid 1px grey;
    border-radius: 15%  15%  0%  0%;
`;






class DropDown extends Component {
    constructor(props){
        super(props);

        this.state = {value:false, selection:'Select Category', dropDown:['subject','highschool','state', 'city/town']};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        }
        
        // handleChange(event) {
        //     this.setState({value: event.target.value});
        // }
        
        // handleToggle(event) {
        //     this.setState({ value: !this.state.value});
        // console.log('something happened')
        // // alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
        // }


        handleChange(event) {
            this.setState({value: !(this.state.value)});
            console.log(!this.state.value)
            }

        handleSelectionChange(event) {
            var newValue = event.target.value;
            if (newValue === " "){
                newValue = 'Select Category';
            }
            this.setState({   selection: newValue, value: !(this.state.value)  });
            // console.log(this.state.selection)
            }
            
        handleSubmit(event) {
        // console.log(this.state.value)
        // alert('A name was submitted: ' + this.state.value);
        console.log(this.state.selection)
        event.preventDefault();
        }

        showDropList(){
            if (this.state.value === true){
            return(

                <div>
                <DDSelector type="submit" value=' ' onClick={this.handleSelectionChange} />
                <DDSelector type="submit" value={this.state.dropDown[0]} onClick={this.handleSelectionChange} />
                <DDSelector type="submit" value={this.state.dropDown[1]} onClick={this.handleSelectionChange} />
                <DDSelector type="submit" value={this.state.dropDown[2]} onClick={this.handleSelectionChange} />
                <DDSelector type="submit" value={this.state.dropDown[3]} onClick={this.handleSelectionChange} />
                </div>

            )}
            else{
                return
            }
        } 

        






render (){
    return(
        <div>
            <Form onSubmit={this.handleSubmit}>
            <DDSelection type="submit" value={this.state.selection} onClick={this.handleChange}/>
            {this.showDropList()}
            </Form>
        </div>

    );




}
}
export default DropDown;
