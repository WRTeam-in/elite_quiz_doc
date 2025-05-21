import { themes as prismThemes } from 'prism-react-renderer';

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').Config} */
export default {
  title: 'Elite Quiz Documentation',
  tagline: 'Documentation for Elite Quiz Web & App',
  url: 'https://wrteam-in.github.io',
  baseUrl: '/elite_quiz_doc',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'WRTeam-in', // Usually your GitHub org/user name.
  projectName: 'elite_quiz_doc', // Usually your repo name.

  // Add local search plugin with a unique ID to avoid conflicts
  plugins: [
    require.resolve('@easyops-cn/docusaurus-search-local'),

    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-CS432E2TJ6', // Replace with your GA4 ID
        anonymizeIP: true, // Optional for privacy compliance (GDPR)
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Remove any Algolia reference if it exists
      navbar: {
        title: 'Elite Quiz Docs',
        logo: {
          alt: 'Elite Quiz Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://wrteam.in/',
            label: 'WRTeam',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} WRTeam.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};
