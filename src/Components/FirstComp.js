import React, { Component } from 'react';
import '../Components/FirstComp.css';

class FirstComp extends Component {
    render() {
        return (
            <div className = "FirstComp">
                    <body>
                        <h1>
                             Getting Everything Closer!
                        </h1>
                        <div class="row">
                            <div class="column">
                            What is Lorem Ipsum Lorem Ipsum is simply dummy text of
                             the printing and typesetting industry Lorem Ipsum has been
                              the industry's standard dummy text ever since the 1500s when
                               an unknown printer took a galley of type and scrambled it
                                to make a type specimen book it has?
                            </div>
                            <div class = "column">
                            What is Lorem Ipsum Lorem Ipsum is simply dummy text of
                             the printing and typesetting industry Lorem Ipsum has been
                              the industry's standard dummy text ever since the 1500s when
                               an unknown printer took a galley of type and scrambled it
                                to make a type specimen book it has?
                            </div>
                            <div class="column">

                            What is Lorem Ipsum Lorem Ipsum is simply dummy text of
                             the printing and typesetting industry Lorem Ipsum has been
                              the industry's standard dummy text ever since the 1500s when
                               an unknown printer took a galley of type and scrambled it
                                to make a type specimen book it has?
                            
                             </div>
                        </div>
                           
                        <button className = "Products"> Search Our Products</button>
                        <button className = "Github-Button"> Github</button>
                    </body>
            </div>
        );
    }
}

export default FirstComp;