import { defineConfig } from 'vitepress';

const sidebar = {
  '/guide': [
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' },
      ],
    },
  ],
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Nuxt Compose Icons',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    search: {
      provider: 'local',
    },

    sidebar: sidebar,

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/arthur-plazanet/nuxt-compose-icons',
      },
    ],
  },
  cleanUrls: true,
  vite: {
    server: {
      allowedHosts: ['http://arthur.icon-docs'],
    },
  },
});
