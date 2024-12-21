import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Build DAO',
  description: 'Turn your ideas into production-ready MVPs in weeks, not months',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#EAB308' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Build DAO' }],
    ['meta', { name: 'og:description', content: 'Turn your ideas into production-ready MVPs in weeks, not months' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Projects', link: '/projects' },
      { text: 'Builders', link: '/builders' },
      { text: 'Process', link: '/process' },
      { text: 'Submit', link: '/submit' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/builddao' },
      { icon: 'discord', link: 'https://discord.gg/builddao' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} Build DAO`
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('lucide-')
      }
    }
  }
})