import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slick Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza place in California!`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // This is the name of the plugins you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'dii3hp7a',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
