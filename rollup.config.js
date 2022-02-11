import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import { babel } from '@rollup/plugin-babel';
// import externals from 'rollup-plugin-node-externals';
import { visualizer } from 'rollup-plugin-visualizer';


const lessToJs = require('less-vars-to-js');
const path = require('path');
const fs = require('fs');

const packageJson = require('./package.json');


const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, 'src/theme/core.less'), 'utf8'),
  { resolveVariables: true, stripPrefix: true },
);

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      /*
      externals({
              peerDeps: true
            }),
      */
      postcss({
        extract: false,
        use: [
          'sass',
          [
            'less',
            {
              javascriptEnabled: true,
              modifyVars: themeVariables,
            },
          ],
        ],
      }),
      commonjs(),
      url(),
      svgr(),
      json(),
      typescript({ tsconfig: './tsconfig.json' }),

      terser(),
      visualizer()
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{
      file: 'dist/index.d.ts',
      format: 'esm',
    }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
