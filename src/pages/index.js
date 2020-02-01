import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Skills from '../components/skills';

import particles from '../../content/particles';
import skills from '../../content/skills';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero config={particles} />
    <Skills skills={skills} />
  </Layout>
);

export default IndexPage;
