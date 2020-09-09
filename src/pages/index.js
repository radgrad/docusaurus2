import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Research</>,
    imageUrl: 'img/research.png',
    description: (
      <>
        The RadGrad Project pursues research to understand how new forms of information technology can be used to  improve engagement, diversity, and retention in undergraduate computer science programs.
      </>
    ),
  },
  {
    title: <>Development</>,
    imageUrl: 'img/development.png',
    description: (
      <>
        The RadGrad Project designs, implements, and evaluates new technologies for engagement, diversity, and retention in undergraduate computer science.
      </>
    ),
  },

  {
    title: <>Education</>,
    imageUrl: 'img/education.png',
    description: (
      <>
        The RadGrad Project hopes to provide new pathways to learning about computer science not just for undergraduates, but for pre-secondary school students and lifelong learners.
      </>
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
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="University of Hawaii/JCI Fellows Program">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
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
