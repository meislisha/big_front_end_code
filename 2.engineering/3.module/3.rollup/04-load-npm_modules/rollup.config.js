import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';

export default { 
  input: './src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    json(),
    nodeResolve()
  ]
}