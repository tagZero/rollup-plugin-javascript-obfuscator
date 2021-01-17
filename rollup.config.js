import buble from 'rollup-plugin-buble';
import pkg from './package.json';

const external = Object.keys( pkg.dependencies );

export default {
	input: 'src/index.js',
	output: [
		{
		  file: pkg.main,
      format: 'cjs',
      exports: 'default'
    },
		{
		  file: pkg.module,
      format: 'es'
		}
	],
	plugins: [ buble() ],
	external: external
};
