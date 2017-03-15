import React, { Component } from 'react';

import Navbar   from './Navbar';
import Hero     from './Hero';
import Skills   from './Skills';
import Projects from './Projects';
import Timeline from './Timeline';
import Contact  from './Contact';
import Footer   from './Footer';

import { particlesConfig
       , skillsData
       , projectsData
       , experienceData
       , footerData
       } from './data';

class App extends Component {
    componentWillMount() {
        this.setState({ 
            particlesConfig,
            skillsData,
            projectsData,
            experienceData,
            footerData
        });
    }

    render() {
        return (
            <section>
                <header>
                    <Navbar brand="NM" />
                </header>

                <Hero config={this.state.particlesConfig} />

                <Skills skills={this.state.skillsData} />

                <Projects categories={this.state.projectsData.categories} projects={this.state.projectsData.projects} />

                <Timeline experiences={this.state.experienceData} />

                <Contact />

                <Footer resumePath={this.state.footerData.resumePath} socialIcons={this.state.footerData.socialIcons} />
            </section>
        );
    }
}

export default App;