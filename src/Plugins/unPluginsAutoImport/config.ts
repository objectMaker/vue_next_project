module.exports = {
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/,
    /\.vue\?vue/, // .vue
    /\.md$/, // .md
  ],
  // 全局引入插件
  imports: [
    // presets
    "vue",
    "vue-router",
    // custom
    {
      "@vueuse/core": [
        // named imports
        "useMouse", // import { useMouse } from '@vueuse/core',
        // alias
        ["useFetch", "useMyFetch"], // import { useFetch as useMyFetch } from '@vueuse/core',
      ],
      axios: [
        // default imports
        ["default", "axios"], // import { default as axios } from 'axios',
      ],
      "[package-name]": [
        "[import-names]",
        // alias
        ["[from]", "[alias]"],
      ],
    },
  ],

  // eslint报错解决
  eslintrc: {
    enabled: false, // Default `false`
    filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
    globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
  },

  // 解析器，例如element-plus的ElementPlusResolver
  // see https://github.com/antfu/unplugin-auto-import/pull/23/
  resolvers: [
    /* ... */
  ],
  // 声明文件生成位置和文件名称
  dts: "./auto-import.d.ts",
};
