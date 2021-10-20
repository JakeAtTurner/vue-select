import vue from 'rollup-plugin-vue'
import buble from '@rollup/plugin-buble'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-scss'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/vue-select.js',
      format: 'umd',
      name: "VueSelect",
      globals: {
        vue: "Vue"
      } 
    },
    external: ['vue'],
    plugins: [
      vue({
        cssModulesOptions: {
          generateScopedName: '[local]___[hash:base64:5]',
        }
      }),
      resolve(),
      commonjs(),
      scss(),
      buble({objectAssign: 'Object.assign'}),
      terser()
    ]
  }
]
