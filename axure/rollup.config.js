 
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: './src/charts.js',//'./src/bar1.js',
  output: {
    file: './libs/charts.js',//'./libs/bar1.js',
    format: 'cjs'
  },
  plugins: [
   // babel(),
    resolve() ,
    commonjs()
  ] 
};