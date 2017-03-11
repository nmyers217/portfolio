import React, { Component } from 'react';

import Navbar   from './Navbar';
import Hero     from './Hero';
import Skills   from './Skills';
import Projects from './Projects';

import { skillsData, projectsData } from './data';

class App extends Component {
    componentWillMount() {
        this.setState({ skillsData, projectsData });
    }

    render() {
        return (
            <div>
                <header>
                    <Navbar brand="NM"/>
                </header>

                <Hero />

                <Skills skills={this.state.skillsData} />

                <Projects
                    categories={this.state.projectsData.categories}
                    projects={this.state.projectsData.projects} />
            </div>
        );
    }
}

export default App;