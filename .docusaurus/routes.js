import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/website/BenefitPage/BenefitPage',
    component: ComponentCreator('/website/BenefitPage/BenefitPage', '1e7'),
    exact: true
  },
  {
    path: '/website/blog',
    component: ComponentCreator('/website/blog', '0ca'),
    exact: true
  },
  {
    path: '/website/blog/archive',
    component: ComponentCreator('/website/blog/archive', '08c'),
    exact: true
  },
  {
    path: '/website/blog/first-blog-post',
    component: ComponentCreator('/website/blog/first-blog-post', 'e77'),
    exact: true
  },
  {
    path: '/website/blog/long-blog-post',
    component: ComponentCreator('/website/blog/long-blog-post', '1a7'),
    exact: true
  },
  {
    path: '/website/blog/mdx-blog-post',
    component: ComponentCreator('/website/blog/mdx-blog-post', '508'),
    exact: true
  },
  {
    path: '/website/blog/tags',
    component: ComponentCreator('/website/blog/tags', 'a60'),
    exact: true
  },
  {
    path: '/website/blog/tags/docusaurus',
    component: ComponentCreator('/website/blog/tags/docusaurus', 'c38'),
    exact: true
  },
  {
    path: '/website/blog/tags/facebook',
    component: ComponentCreator('/website/blog/tags/facebook', 'c1c'),
    exact: true
  },
  {
    path: '/website/blog/tags/hello',
    component: ComponentCreator('/website/blog/tags/hello', '2b9'),
    exact: true
  },
  {
    path: '/website/blog/tags/hola',
    component: ComponentCreator('/website/blog/tags/hola', '5aa'),
    exact: true
  },
  {
    path: '/website/blog/welcome',
    component: ComponentCreator('/website/blog/welcome', 'd8a'),
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
