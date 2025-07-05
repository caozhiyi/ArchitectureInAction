import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { containerPlugin } from '@vuepress/plugin-container'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '架构实战',
  description: '与技术债务的战争',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/caozhiyi/architecture-in-action'
      }
    ],
    sidebar: [
      '/README.md',
      {
        text: '第一章：架构设计的目的',
        link: '/the_essence_of_architecture/the_purpose_of_architecture_design.md',
      }
    ]
  }),

  bundler: viteBundler(),
  plugins: [
    containerPlugin({
      type: 'center'
    }),
    containerPlugin({
      type: 'right'
    }),
  ],
})
