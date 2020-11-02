import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>For ICS Students</>,
    description: (
        <ul>
          <li><a href='https://radgrad.ics.hawaii.edu'>Go To ICS RadGrad</a></li>
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
      </ul>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
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
      <h1 style={{marginBottom: "1em", fontWeight: 800}}>Developing awesome computer scientists, one graduate at a time</h1>
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
      description="Developing awesome computer scientists, one graduate at a time">
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
