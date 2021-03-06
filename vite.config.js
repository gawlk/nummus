import cdnAuto from 'vite-plugin-cdn-auto'
import components from 'vite-plugin-components'
import compress from 'vite-plugin-compress'
import fullPWA from 'vite-plugin-full-pwa'
import path from 'path'
import svgLoader from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import windiCSS from 'vite-plugin-windicss'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  resolve: {
    alias: {
      '/src/': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    // ...windiCSS({
    //   preflight: {
    //     safelist: 'button a',
    //   },
    // }),
    components(),
    cdnAuto(),
    svgLoader(),
    fullPWA(),
    compress({ brotli: false }),
  ],
}
