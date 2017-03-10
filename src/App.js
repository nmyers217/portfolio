import React, { Component } from 'react';

import Navbar from './Navbar';
import Hero   from './Hero';
import Skills from './Skills';

import { skillsData } from './data';

class App extends Component {
    componentWillMount() {
        this.setState({ skillsData });
    }

    render() {
        return (
            <div>
                <header>
                    <Navbar brand="NM"/>
                </header>

                <Hero />

                <Skills skills={ this.state.skillsData } />
            </div>
        );
    }
}

export default App;