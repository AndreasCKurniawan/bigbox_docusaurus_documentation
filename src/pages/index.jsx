/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '../theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {Container} from '@mui/material';
import SearchBarWrapper from '../theme/SearchBar';
import Background from '../../static/img/bg.png';

import IconDataVisualization from '../components/icons/dataVisualization';
import IconDataAcquisition from '../components/icons/dataAcquisition';

import Header from '../components/header';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
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

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const [dataPages, setDataPages] = useState([
    {
      title: 'Data Acquistion',
      desc: 'Data Visualization as a Service',
      href: '/docs/category/data-acquisition',
      icon: <IconDataAcquisition />,
    },
    {
      title: 'Data Visualization',
      desc: 'Data Visualization as a Service',
      href: '/docs/category/data-visualization',
      icon: <IconDataVisualization />,
    },
    {
      title: 'Data Extraction',
      desc: 'Data Visualization as a Service',
      href: '/docs/category/data-extraction',
      icon: '',
    },
    {
      title: 'Data Integration',
      desc: 'Data Extraction as a Service',
      href: '/docs/bigaction',
      icon: '',
    },
    {
      title: 'About BigEnvelope',
      desc: 'Data Exposure as a Service',
      href: '/docs/bigenvelope',
      icon: '',
    },
    {
      title: 'About BigMarket',
      desc: 'About BigMarket',
      href: '/docs/bigmarket',
      icon: '',
    },
    {
      title: 'Search Engine',
      desc: 'About BigSearch',
      href: '/docs/bigsearch',
      icon: '',
    },
    {
      title: 'About BigSocial',
      desc: 'About BigSocial',
      href: '/docs/bigsocial',
      icon: '',
    },
  ]);

  return (
    <Layout
      noHeader
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Header />
      <main>
        <section
          className="banner"
          style={{backgroundImage: `url(${Background})`}}>
          <Container>
            <h2 className="bannerTitle">Documentation</h2>
            <p className="bannerDesc">
              Find guides, code sample, best practices, tutorials and more to
              learn about BigBox
            </p>
            <SearchBarWrapper />
          </Container>
        </section>

        <Container>
          <div className="groupContainer">
            <div className="mainGroupContainer">
              <h2>Bigbox Data Platform</h2>
            </div>
            <div className="documentGroupContainer">
              {dataPages.map((v, i) => {
                return (
                  <div className="documentItems" key={i}>
                    <>
                      <a href={v.href}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '10px',
                          }}>
                          {v.icon ? v.icon : null}
                          <h3
                            className="documentTitle"
                            style={v.icon ? {marginLeft: '10px'} : null}>
                            {v.title}
                          </h3>
                        </div>
                      </a>
                      <p className="documentDesc">{v.desc}</p>
                    </>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </main>
    </Layout>
  );
}
