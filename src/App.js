import React, { Component } from 'react';

import Navbar   from './Navbar';
import Hero     from './Hero';
import Skills   from './Skills';
import Projects from './Projects';
import Timeline from './Timeline';
import Contact  from './Contact';
import Footer   from './Footer';

import { skillsData, projectsData, experienceData } from './data';

class App extends Component {
    componentWillMount() {
        this.setState({ skillsData, projectsData, experienceData });
    }

    render() {
        return (
            <section>
                <header>
                    <Navbar brand="NM"/>
                </header>

                <Hero />

                <Skills skills={this.state.skillsData} />

                <Projects
                    categories={this.state.projectsData.categories}
                    projects={this.state.projectsData.projects} />

                <Timeline experiences={this.state.experienceData} />

                <Contact />

                <Footer />
            </section>
        );
    }
}

export default App;