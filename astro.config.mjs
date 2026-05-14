// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { rehypeStorybookEmbed } from './src/plugins/rehype-storybook-embed.mjs';

export default defineConfig({
  integrations: [
    starlight({
      title: 'UNI Design System',
      description: 'A comprehensive framework for designing consistent, scalable digital products.',
      social: [],
      customCss: ['./src/styles/global.css'],
      components: {
        PageTitle: './src/components/ComponentTabs.astro',
      },
      sidebar: [
        { label: 'Welcome', slug: 'welcome-to-uni' },
        { label: 'How to Contribute', slug: 'how-to-contribute' },
        {
          label: 'Foundations',
          items: [{ autogenerate: { directory: 'foundations' } }],
        },
        {
          label: 'Components',
          items: [{ autogenerate: { directory: 'components' } }],
        },
        {
          label: 'Inputs & Selection',
          items: [{ autogenerate: { directory: 'inputs-and-selection' } }],
        },
        {
          label: 'Indicators & Status',
          items: [{ autogenerate: { directory: 'indicators-and-status' } }],
        },
        {
          label: 'Navigation',
          items: [{ autogenerate: { directory: 'navigation' } }],
        },
        {
          label: 'Messaging',
          items: [{ autogenerate: { directory: 'messaging' } }],
        },
        {
          label: 'Layout',
          items: [{ autogenerate: { directory: 'layout' } }],
        },
      ],
    }),
  ],

  markdown: {
    rehypePlugins: [rehypeStorybookEmbed],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
