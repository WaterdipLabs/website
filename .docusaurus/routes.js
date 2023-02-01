import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/website/__docusaurus/debug',
    component: ComponentCreator('/website/__docusaurus/debug', '4ec'),
    exact: true
  },
  {
    path: '/website/__docusaurus/debug/config',
    component: ComponentCreator('/website/__docusaurus/debug/config', '765'),
    exact: true
  },
  {
    path: '/website/__docusaurus/debug/content',
    component: ComponentCreator('/website/__docusaurus/debug/content', '369'),
    exact: true
  },
  {
    path: '/website/__docusaurus/debug/globalData',
    component: ComponentCreator('/website/__docusaurus/debug/globalData', 'b38'),
    exact: true
  },
  {
    path: '/website/__docusaurus/debug/metadata',
    component: ComponentCreator('/website/__docusaurus/debug/metadata', 'bd3'),
    exact: true
  },
  {
    path: '/website/__docusaurus/debug/registry',
    component: ComponentCreator('/website/__docusaurus/debug/registry', '964'),
    exact: true
  },
  {
    path: '/website/__docusaurus/debug/routes',
    component: ComponentCreator('/website/__docusaurus/debug/routes', '3f0'),
    exact: true
  },
  {
    path: '/website/BenefitPage/BenefitPage',
    component: ComponentCreator('/website/BenefitPage/BenefitPage', '1e7'),
    exact: true
  },
  {
    path: '/website/blog',
    component: ComponentCreator('/website/blog', '7f0'),
    exact: true
  },
  {
    path: '/website/blog/archive',
    component: ComponentCreator('/website/blog/archive', '08c'),
    exact: true
  },
  {
    path: '/website/blog/mlobs',
    component: ComponentCreator('/website/blog/mlobs', '237'),
    exact: true
  },
  {
    path: '/website/blog/tags',
    component: ComponentCreator('/website/blog/tags', 'a60'),
    exact: true
  },
  {
    path: '/website/blog/tags/ml-observability',
    component: ComponentCreator('/website/blog/tags/ml-observability', 'c60'),
    exact: true
  },
  {
    path: '/website/FeaturePage/FeaturePage',
    component: ComponentCreator('/website/FeaturePage/FeaturePage', '0da'),
    exact: true
  },
  {
    path: '/website/HeroPage/HeroPage',
    component: ComponentCreator('/website/HeroPage/HeroPage', 'ae9'),
    exact: true
  },
  {
    path: '/website/markdown-page',
    component: ComponentCreator('/website/markdown-page', 'edc'),
    exact: true
  },
  {
    path: '/website/PerformancePage/PerformancePage',
    component: ComponentCreator('/website/PerformancePage/PerformancePage', '3a1'),
    exact: true
  },
  {
    path: '/website/PlatformPage/PlatformPage',
    component: ComponentCreator('/website/PlatformPage/PlatformPage', '800'),
    exact: true
  },
  {
    path: '/website/docs',
    component: ComponentCreator('/website/docs', '932'),
    routes: [
      {
        path: '/website/docs/category/tutorial---basics',
        component: ComponentCreator('/website/docs/category/tutorial---basics', 'e8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/website/docs/category/tutorial---extras',
        component: ComponentCreator('/website/docs/category/tutorial---extras', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/website/docs/intro',
        component: ComponentCreator('/website/docs/intro', '345'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/website/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/website/docs/tutorial-basics/congratulations', '973'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/website/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/website/docs/tutorial-basics/create-a-blog-post', 'b34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/website/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/website/docs/tutorial-basics/create-a-document', '733'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/website/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/website/docs/tutorial-basics/create-a-page', '348'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/website/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/website/docs/tutorial-basics/deploy-your-site', 'eb5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/website/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/website/docs/tutorial-basics/markdown-features', 'f41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/website/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/website/docs/tutorial-extras/manage-docs-versions', '0ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/website/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/website/docs/tutorial-extras/translate-your-site', 'dd5'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/website/',
    component: ComponentCreator('/website/', '291'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
