import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import { GoRepo, GoRepoForked, GoStar } from 'react-icons/go';

const Project = ({
  id,
  name,
  url,
  description,
  stargazers,
  forkCount,
  languages
}) => {
  const language = languages.edges.slice().shift().node;

  return (
    <div key={id} className="col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30">
      <div className="services-box">
        <h3 className="service-name">
          <GoRepo size="2rem" />{' '}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h3>
        <span>
          <span
            style={{
              position: 'relative',
              top: '1px',
              display: 'inline-block',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: language.color
            }}
          ></span>{' '}
          <span className="mr15" itemProp="programmingLanguage">
            {language.name}
          </span>
          <span className="mr15">
            <GoRepoForked /> {forkCount}
          </span>
          <span>
            <GoStar /> {stargazers.totalCount}
          </span>
        </span>
        <hr style={{ border: '0.4px solid #ddd' }} />
        <p className="text-small">{description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const {
    github: {
      viewer: {
        url,
        pinnedItems: { edges }
      }
    }
  } = useStaticQuery(
    graphql`
      query GithubQuery {
        github {
          viewer {
            url
            pinnedItems(first: 10) {
              edges {
                node {
                  ... on GitHub_Repository {
                    id
                    nameWithOwner
                    name
                    url
                    description
                    stargazers {
                      totalCount
                    }
                    forkCount
                    languages(
                      last: 1
                      orderBy: { field: SIZE, direction: ASC }
                    ) {
                      edges {
                        node {
                          color
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const repos = edges.map(e => e.node);

  return (
    <section id="work" className="background2 section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 section-title text-center">
            <h2>Projects</h2>
            <span className="section-divider"></span>
            <Fade top>
              <p>
                Here are some of the cool{' '}
                <a href={url} target="_blank" rel="noopener noreferrer">
                  github
                </a>{' '}
                projects I've built in my spare time!
              </p>
            </Fade>
          </div>
        </div>
        <div className="row">{repos.map(Project)}</div>
      </div>
    </section>
  );
};

export default Projects;
