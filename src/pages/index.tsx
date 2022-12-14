import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import HeroPage from './HeroPage/HeroPage';
import PerformancePage from './PerformancePage/PerformancePage';
import BenefitPage from './BenefitPage/BenefitPage';
import PlatformPage from './PlatformPage/PlatformPage';
import FeaturePage from './FeaturePage/FeaturePage';
import SignUp from '../components/SignUp/SignUp';


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    
    <Layout
      title={`Waterdip`}>
      <main>
        <HeroPage />
        <PerformancePage/>
        <BenefitPage />
        <PlatformPage />
        <FeaturePage />
        <SignUp />
      </main>
    </Layout>
  );
}
