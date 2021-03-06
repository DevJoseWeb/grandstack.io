/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: "User1",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: "/img/docusaurus.svg",
    infoLink: "https://www.facebook.com",
    pinned: true
  }
];

const siteConfig = {
  title: "GRANDstack" /* title for your website */,
  tagline: "Build full stack graph applications with ease.",
  url: "https://grandstack.io" /* your website url */,
  baseUrl: "/" /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  gaTrackingId: "UA-43032717-4",
  gaGtag: true,

  algolia: {
    apiKey: "cc5871df6979b737c77b6c2670ac2392",
    indexName: "grandstack"
  },

  // Used for publishing and more
  projectName: "grandstack.io",
  organizationName: "grand-stack",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {
      href:
        "https://blog.grandstack.io/announcing-the-grandstack-online-hackathon-for-graphql-europe-2018-7d256ebf68e1",
      label: "GRANDstack Online Hackathon"
    },
    { doc: "getting-started", label: "Docs" },
    //{doc: 'doc4', label: 'API'},
    { href: "https://blog.grandstack.io", label: "Blog" },
    //{blog: true, label: 'Blog'},
    { search: true }
  ],

  // If you have users set above, you add it here:
  //users,

  /* path to images for header/footer */
  headerIcon: "img/GrandStack-Logo-SiteIcon-512x512.png",
  footerIcon: "img/GrandStack-Logo-SiteIcon-512x512.png",
  favicon: "img/GrandStack-Logo-SiteIcon-512x512.png",

  /* colors for website */
  colors: {
    primaryColor: "#127217",
    //primaryColor: '#2E8555',
    secondaryColor: "#2E8555"
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: "Copyright © " + new Date().getFullYear() + " GRANDstack",

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "darcula",
    hljs: function(hljs) {
      // from https://github.com/isagalaev/highlight.js/pull/1543
      hljs.registerLanguage("graphql", function(hljs) {
        return {
          aliases: ["gql"],
          keywords: {
            keyword:
              "query mutation subscription|10 type interface union scalar fragment|10 enum on ...",
            literal: "true false null"
          },
          contains: [
            hljs.HASH_COMMENT_MODE,
            hljs.QUOTE_STRING_MODE,
            hljs.NUMBER_MODE,
            {
              className: "type",
              begin: "[^\\w][A-Z][a-z]",
              end: "\\W",
              excludeEnd: true
            },
            {
              className: "literal",
              begin: "[^\\w][A-Z][A-Z]",
              end: "\\W",
              excludeEnd: true
            },
            {
              className: "variable",
              begin: "\\$",
              end: "\\W",
              excludeEnd: true
            },
            {
              className: "keyword",
              begin: "[.]{2}",
              end: "\\."
            },
            {
              className: "meta",
              begin: "@",
              end: "\\W",
              excludeEnd: true
            }
          ],
          illegal: /([;<']|BEGIN)/
        };
      });

      // from https://github.com/isagalaev/highlight.js/pull/1684/files
      hljs.registerLanguage("cypher", function(hljs) {
        // ...

        return {
          case_insensitive: true,
          keywords: {
            keyword:
              "start match where return union foreach with as limit skip unwind has distinct optional else end then case when create order by set",
            literal: "true false null"
          },
          contains: [
            hljs.QUOTE_STRING_MODE,
            hljs.APOS_STRING_MODE,
            hljs.C_NUMBER_MODE,

            {
              className: "type",
              begin: /((-|>)?\s?\(|-\[)\w*:/,
              excludeBegin: true,
              end: "\\W",
              excludeEnd: true
            },
            {
              className: "functionCall",
              begin: /(\s+|,)\w+\(/,
              end: /\)/,
              keywords: {
                built_in:
                  "all any exists none single coalesce endNode head id last length properties size startNode timestamp toBoolean toFloat toInteger type avg collect count max min percentileCont percentileDisc stDev stDevP sum extract filter keys labels nodes range reduce relationships reverse tail abs ceil floor rand round sign e exp log log10 sqrt acos asin atan atan2 cos cot degrees haversin pi radians sin tan left ltrim replace reverse right rtrim split substring toLower toString toUpper trim distance"
              }
            }
          ]
        };
      });
    }
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-blocks-buttons.js"
  ],
  stylesheets: ["/css/code-blocks-buttons.css"],

  /* On page navigation for the current documentation page */
  onPageNav: "separate",

  /* Open Graph and Twitter card images */
  ogImage: "img/docusaurus.png",
  twitterImage: "img/docusaurus.png"

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
