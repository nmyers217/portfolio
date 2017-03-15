import React from 'react';

const Category = (category, i) => (
  <button key={i} className="filter btn btn-default btn-category btn-lg" data-filter={'.' + category.toLowerCase()}>
    {category}
  </button>
)

const Project = ({ title, image, github, url, tags }, i) => (
  <div key={i} className={'col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-box no-padding mix ' + tags.join(' ')}>
    <div>
      <img src={image} alt={title} className="img-responsive project-img" />
    </div>
    <span className="portfolio-hover">
      <span>
        {url &&
          <a href={url} target="_blank">
            <span className="portfolio-links">
              <span className="ion-ios-arrow-right portfolio-links-icons"></span>
            </span>
          </a>
        }
        <a href={github} target="_blank">
          <span className="portfolio-links">
            <span className="ion-social-github portfolio-links-icons"></span>
          </span>
        </a>
        <span className="project-title no-margin-bottom mt10">{title}</span>
      </span>
    </span>
  </div>
)

const Projects = ({ categories, projects }) => (
  <section id="work" className="background1 section-padding">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 section-title text-center">
          <h2>Work</h2>
          <span className="section-divider mb15"></span>
          <p className="mb30 scaleReveal">Here are some of the cool things I've built!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 text-center mb50">
          <button className="filter btn btn-default btn-category btn-lg" data-filter="all">All</button>
          {categories.map(Category)}
        </div>
      </div>
      <div id="thework">
        {projects.map(Project)}
      </div>
    </div>
  </section>
)

export default Projects;