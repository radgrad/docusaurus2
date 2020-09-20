import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Users</>,
    imageUrl: 'img/homepage-degreeplan.png',
    description: (
      <>
        The RadGrad Project pursues research to understand how new forms of information technology can be used to  improve engagement, diversity, and retention in undergraduate computer science programs.
      </>
    ),
  },
  {
    title: <>Developers</>,
    imageUrl: 'img/homepage-developer.png',
    description: (
      <>
        The RadGrad Project designs, implements, and evaluates new technologies for engagement, diversity, and retention in undergraduate computer science.
      </>
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
      <p>{description}</p>
    </div>
  );
}

const ProjectTitle = props => (
    <div style={{paddingTop: "0px"}}>
      <img style={{ paddingRight: "10px" }} width='55px' src={useBaseUrl('img/radgrad_logo.png')}/>
      <span style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: '460%' }} className="projectTitle">RAD</span>
      <span style={{ fontFamily: 'Nunito', fontWeight: 400, fontSize: '460%' }} className="projectTitle">GRAD</span>
      <h2 style={{marginTop: "0em", fontWeight: 800}}>Developing awesome computer scientists, one graduate at a time</h2>
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
