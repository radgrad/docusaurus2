import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Learn</>,
    description: (
        <ul>
          <li><a href='/docs/overview/motivation'>Motivation</a></li>
          <li><a href='/docs/overview/goals'>Goals</a></li>
          <li><a href='/docs/overview/basic-constructs'>Basic constructs</a></li>

        </ul>
    ),
  },
  {
    title: <>For Students</>,
    description: (
        <ul>
          <li><a href='https://radgrad2.ics.hawaii.edu'>UHM/ICS RadGrad (pre-release)</a></li>
          <li><a href='https://radgrad-comp-eng.design'>UHM/CENG RadGrad (pre-release)</a></li>
          <li><a href='http://go.hawaii.edu/JuG'>1 Page Cheat Sheet (PDF)</a></li>
          <li><a href='/docs/users/overview'>User Guide</a></li>
        </ul>
    ),
  },
  {
    title: <>For Developers</>,
    description: (
      <ul>
        <li><a href='/docs/developers/overview'>Developer Guide</a></li>
        <li><a href='https://radgrad.github.io/radgrad2/'>JSDocs</a></li>
        <li><a href='https://github.com/radgrad/radgrad2/actions'><img src="https://github.com/radgrad/radgrad2/workflows/ci-radgrad/badge.svg"/></a></li>
        <li><a href="https://codeclimate.com/github/radgrad/radgrad2/maintainability"><img src="https://api.codeclimate.com/v1/badges/a7ae120360f347a2e391/maintainability" /></a></li>
      </ul>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  );
}

const homePageButton = props => (
    <div className={styles.buttons}>
      <Link
          className={classnames(
              'button button--outline button--secondary button--lg',
              styles.getStarted,
          )}
          style={{color: 'white'}}
          to={useBaseUrl('docs/overview/motivation')}>
        Learn More
      </Link>
    </div>
);

const ProjectTitle = props => (
    <div style={{paddingTop: "0px"}}>
      <img style={{ paddingRight: "10px" }} width='55px' src={useBaseUrl('img/radgrad_logo.png')}/>
      <span style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: '460%' }} className="projectTitle">RAD</span>
      <span style={{ fontFamily: 'Nunito', fontWeight: 400, fontSize: '460%' }} className="projectTitle">GRAD</span>
      <h1 style={{marginBottom: "1em", fontWeight: 800}}>Developing awesome STEM professionals, one graduate at a time</h1>
      <h4 style={{margin: "0.25em"}}>The goal of the RadGrad Project is to improve the undergraduate STEM degree experience.</h4>
      <p>Target outcomes include increased engagement and retention, particularly for women and underrepresented minorities, and improved post-graduation career opportunities for all participating students. We currently focus on computer science and computer engineering degree programs.</p>
    </div>
);

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Developing awesome STEM professionals, one graduate at a time">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <ProjectTitle/>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
