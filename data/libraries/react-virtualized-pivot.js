export default {
  title: 'react-virtualized-pivot',
  slug: 'react-virtualized-pivot',
  repo: 'turnerniles/react-virtualized-pivot',
  homepage: 'https://turnerniles.github.io/react-virtualized-pivot',
  examples: 'https://github.com/turnerniles/react-virtualized-pivot',
  licenseType: 'MIT',
  author: 'Niles Turner & Patrick Trasborg',
  authorurl: 'https://turnerniles.github.io/react-virtualized-pivot',
  description: 'A virtualized pivot table component for React',
  content:
    '<p>React Virtualized Pivot is a virtualized pivot table component for React.</p><p>ReactPivot takes a required <code>data</code> argument in the form of an array of arrays (first array will be your column headers) or an array of objects (keys of the object are your column headers). As well as optional arguments:</p><ul><li><code>bodyCellValueTransformation</code> A function that transforms the display value of the body cell.</li><li><code>colorPack</code> An object with components to adjust colors of as keys and the corresponding color as a string.</li><li><code>onGridCellClick</code> A function that is fired when clicking on a grid cell.</li><li><code>onGridHeaderCellClick</code> A function that is fired when clicking on a column header.</li><li><code>onLeftGridCellClick</code> A function that is fired when clicking on a row header (the left hand column).</li><li><code>onLeftHeaderCellClick</code> A function that is fired when clicking on the top left most cell.</li></ul><h5 id="preview">Preview</h5><p><img src="https://user-images.githubusercontent.com/8146241/29742823-06c2adf8-8a54-11e7-96ed-18466e853482.gif" alt="react-virtualized-pivot preview" title="react-virtualized-pivot preview"></p><h5 id="demo">Demo</h5><p><img src="https://turnerniles.github.io/react-virtualized-pivot" alt="react-virtualized-pivot demo" title="react-virtualized-pivot demo"></p>',

  // additional resources

  npm: 'handsontable',
  cdn: 'handsontable',

  // Properties for filtering

  license: ['free'],
  framework: ['react'],
  type: ['data-grid'],
  useCase: ['pivot-table'],
};
