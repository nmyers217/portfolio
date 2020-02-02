import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Skills from '../components/skills';
import Timeline from '../components/timeline';

import hero from '../../content/hero.yaml';
import particlesConfig from '../../content/particles';
import skills from '../../content/skills';
import experiences from '../../content/timeline';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero content={hero} particlesConfig={particlesConfig} />
    <Skills skills={skills} />
    <Timeline experiences={experiences} />
  </Layout>
);

export default IndexPage;
