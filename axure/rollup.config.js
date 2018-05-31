 
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: './src/pie1.js',
  output: {
    file: './libs/pie1.js',
    format: 'cjs'
  },
  plugins: [
   // babel(),
    resolve() ,
    commonjs()
  ] 
};