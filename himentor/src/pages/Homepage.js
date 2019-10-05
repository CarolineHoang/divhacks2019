import React, { Component } from 'react';
import './hp.css';


class Homepage extends Component {
    constructor(){
        super();
    }


render (){
    return(
        <div>


        <div className="topnav">
            <a href="#">Login</a>
            <a href="#">Sign Up</a>
        </div>

        <div className="name">
            Hi Mentors!
        </div>


        <div className="content">
            This website is designed for High School students who are currently looking for mentors that can guide them through
            their high school career. Mentors can be any high school alum.

            <div className="animation">
                <div id="div1">SUPPORT</div>
                <div id="div2">DIRECTION</div>
                <div id="div3">SUCCESS</div>
                <div id="div4">GOAL</div>
                <div id="div5">MOTIVATION</div>
            </div>  

        </div>

        
        


  
        <div className="row">
            <div className="col-3 col-s-3 menu">
                <ul>
                    <li>About US</li>
                    <li>The Community</li>
                    <li>Resources</li>
                    <li>Tech Team</li>
                </ul>
            </div>

        <div className="col-6 col-s-9">
            <h1>Education for all</h1>
        </div>

        <div className="col-3 col-s-12">
            <div className="aside">
                <h2>What?</h2>
                <p>Build your community with inspiring people who can possibly CHANGE your life.</p>
                <h2>Where?</h2>
                <p>We try our best to coordinate any places near your neighborhood.</p>
                <h2>How?</h2>
                <p>Sign up and get started!.</p>
            </div>
          </div>
        </div>          


        <div className="footer">
            Created by Rennah, Caroline, Arya, and Yuyan at Columbia DivHacks!
        </div>

        </div>

    )



};
}
export default Homepage;



