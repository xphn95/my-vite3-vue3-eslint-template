import { defineConfig, presetAttributify, presetUno, presetIcons /* toEscapedSelector as e */ } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({}),
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: 'inline-block',
        margin: 'auto'
      },
      warn: true
    })
  ],
  rules: [],
  theme: {
    animation: {
      // 自定义类名完成动画, animate-类名
      // 注意 xxx 同名自动汇总生成对应属性
      // 'xxx': 'xxx duration fns count'
      keyframes: {
        // 'xxx': '{0%,50%{} 50%,100%{}}'
      },
      durations: {
        // 'xxx': '2s'
      },
      timingFns: {
        // 'xxx': ''
      },
      counts: {
        // 'xxx': 'infinite'
      }
    }
  }
})
