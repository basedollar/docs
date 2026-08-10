// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Base Dollar Documentation",
  tagline: "Liquity V2 fork on Base with LP token collateral and AERO farming revenue.",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://docs.basedollar.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "basedollar", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/basedollar/docs/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/based-social-card.jpg",
      navbar: {
        // title: "BD",
        logo: {
          alt: "BD Logo",
          src: "/img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/basedollar/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "User Docs",
                to: "/docs/category/user-docs/",
              },
              {
                label: "Technical Documentation",
                to: "/docs/category/technical-documentation/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/basedollar/basedollar",
              },
              {
                label: "Discord",
                href: "https://discord.gg/5h3avBYxcn",
              },
              {
                label: "X",
                href: "https://x.com/BaseDollarOrg",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "App",
                href: "https://app.basedollar.org/",
              },
              {
                label: "Website",
                href: "https://basedollar.org/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Base Dollar. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
