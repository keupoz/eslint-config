import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [{
    builder: 'mkdist',
    input: './src',
    format: 'cjs',
    ext: 'cjs',
  }, {
    builder: 'mkdist',
    input: './src',
    format: 'esm',
  }],

  declaration: true,
});
