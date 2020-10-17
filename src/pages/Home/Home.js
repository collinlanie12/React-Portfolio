import { MDBAnimation } from "mdbreact";
import React, { Component } from "react";
import Typewriter from 'typewriter-effect';
import './Home.css';

class HomePage extends Component {
    render() {
        return (
            <div className="Home">
                <MDBAnimation type='fadeIn' duration='7000ms'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Welcome to my story...')
                                .pauseFor(1000)
                                .deleteChars(8)
                                .typeString('journey...')
                                .pauseFor(1000)
                                .deleteChars(10)
                                .typeString('Portfolio! I hope you enjoy it as much as I enjoyed creating it!')
                                .pauseFor(2500)
                                .start();
                        }}
                    />
                </MDBAnimation>


            </div>
        );
    }
}

export default HomePage;