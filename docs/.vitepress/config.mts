import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Technical Log",
  description: "一个为非研发人员打造的技术入门手册",
  base: "/technical-log/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/AgentRich/technical-log/issues',
      text: '给本篇文档捉虫或建议'
    },
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/usage/why' }
    ],

    sidebar: [
      { text: '引言', link: '/introduction.md' },
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
          { 
            text: '计算机的物理原理与信息互通', 
            link: '/technical-log/1/ComputerAndInternet.md',
            items:[
              { text: '从半导体到计算机', link: '/technical-log/1/Semiconductor2Computer.md' },
              { text: '信息互通', link: '/technical-log/1/TheInternet.md' },
              { text: '专用设备和移动终端', link: '/technical-log/1/branch/EquipmentAndMobile.md' },
              { text: '为何非得半导体', link: '/technical-log/1/branch/WhyMustSem.md' },
            ]
          },
          { text: '编程语言和系统能力',
            link: '/technical-log/2/ProgramAndSystem' , 
            items:[
              {text: '编程语言', link: '/technical-log/2/Program.md'},
              {text: '操作系统', link: '/technical-log/2/System.md'},
              {text: '编程语言的本质：与CPU对话和内存管理', link: '/technical-log/2/CodeRealEffect.md'},
            ]
          },
          { text: '从应用程序到软件产品', link: '/technical-log/3/App2Product' },
          { text: '软件行业和互联网的通用服务', link: '/technical-log/4/SoftwareAndSaas' },
          { text: '人工智能的新时代', link: '/technical-log/5/AI' }
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
      { icon: 'github', link: 'https://github.com/AgentRich/technical-log' }
    ]
  }
})
