import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '00b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'a21'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '8b5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '088'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c27'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '93e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '0d3'),
    exact: true
  },
  {
    path: '/BenefitPage/BenefitPage',
    component: ComponentCreator('/BenefitPage/BenefitPage', 'd96'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'd1e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'e87'),
    exact: true
  },
  {
    path: '/blog/mlobs',
    component: ComponentCreator('/blog/mlobs', 'd74'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'c61'),
    exact: true
  },
  {
    path: '/blog/tags/ml-observability',
    component: ComponentCreator('/blog/tags/ml-observability', 'dcf'),
    exact: true
  },
  {
    path: '/FeaturePage/FeaturePage',
    component: ComponentCreator('/FeaturePage/FeaturePage', '902'),
    exact: true
  },
  {
    path: '/HeroPage/HeroPage',
    component: ComponentCreator('/HeroPage/HeroPage', '93e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'd13'),
    exact: true
  },
  {
    path: '/PerformancePage/PerformancePage',
    component: ComponentCreator('/PerformancePage/PerformancePage', '562'),
    exact: true
  },
  {
    path: '/PlatformPage/PlatformPage',
    component: ComponentCreator('/PlatformPage/PlatformPage', '593'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '301'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
