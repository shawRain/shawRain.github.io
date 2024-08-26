import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人生长见闻录",
  description: "生存 & 成长 & 所见所闻",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '&#x2649', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shawRain/shawRain.github.io.git' }
    ]
  }
})
