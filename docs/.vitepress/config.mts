import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Technical Log",
  description: "一个技术入门手册",
  base: "/technical-log/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '食用指南',
        items: [
          { text: '为什么会有这个网站', link: '/usage/why' },
          { text: '包含了什么内容', link: '/usage/what' },
          { text: '如何更好的阅读', link: '/usage/how' }
        ]
      },
      {
        text: '技术演进层级',
        items: [
          { text: 'Runtime API Examples', link: '/technical-log/api-examples' }
        ]
      },
      {
        text: '写在最后',
        items: [
          { text: 'markdown-examples', link: '/the-end/markdown-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
