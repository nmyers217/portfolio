import React, { Component } from 'react';

import Navbar   from './Navbar';
import Hero     from './Hero';
import Skills   from './Skills';
import Projects from './Projects';
import Timeline from './Timeline';

import { skillsData, projectsData, experienceData } from './data';

class App extends Component {
    componentWillMount() {
        this.setState({ skillsData, projectsData, experienceData });
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

                <Timeline experiences={this.state.experienceData} />
            </div>
        );
    }
}

export default App;