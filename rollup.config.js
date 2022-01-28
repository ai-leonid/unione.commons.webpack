import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import less from 'rollup-plugin-less';
import svgr from '@svgr/rollup';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';
import externals from 'rollup-plugin-node-externals';
import { visualizer } from 'rollup-plugin-visualizer';


const packageJson = require('./package.json');


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
      commonjs(),
      /*babel({
        babelrc: false,
        babelHelpers: 'bundled',
        plugins: [['import', { libraryName: 'antd', style: true }]],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exclude: /\**node_modules\**!/,
      }),*/
      url(),
      svgr(),
      json(),
      typescript({ tsconfig: './tsconfig.json' }),
      less(),

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
