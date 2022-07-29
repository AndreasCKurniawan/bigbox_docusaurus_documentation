/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'http://192.168.1.2:3000',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.png',
  // themes: ['@docusaurus/theme-search-algolia'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  plugins: [],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    // /** @type {import('@docusaurus/theme-search-algolia').ThemeConfig} */

    {
      navbar: {
        logo: {
          alt: 'My Facebook Project Logo',
          src: 'img/bigbox_logo.svg',
          href: 'https://bigbox.co.id/docs',
        },
        items: [
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
        ],
      },

      algolia: {
        ID: 'docusaurus-search',
        appId: '3N6369RVPE',
        apiKey: '7632a93d5ec7dbb5e80b73a6d4a2106b',
        indexName: 'documentation_bigbox',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        searchParameters: {},
        searchPagePath: false,
        placeholder: 'Search Documentation',
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
    localeConfigs: {
      en: {},
      id: {
        label: 'Bahasa Indonesia',
      },
    },
  },
};

module.exports = config;
