export default {
  title: 'React-Pivot',
  slug: 'react-pivot',
  repo: 'davidguttman/react-pivot',
  homepage: 'https://github.com/davidguttman/react-pivot',
  examples: 'https://github.com/davidguttman/react-pivot',
  licenseType: 'MIT',
  author: 'David Guttman',
  authorurl: 'http://davidguttman.com/',
  description:
    'Data-grid component with pivot-table-like functionality for data display, filtering, and exploration. Can be used without React.',
  content:
    '<p>ReactPivot is a data-grid component with pivot-table-like functionality for data display, filtering, and exploration. Can be used without React.</p><p>ReactPivot takes four arguments: <code>rows</code>, <code>dimensions</code>, <code>reduce</code> and <code>calculations</code>. Where:</p><ul><li><code>rows</code> is your data, just an array of objects,</li><li><code>dimensions</code> is how you want to group your data,</li><li><code>reduce</code> is how you calculate numbers for each group,</li><li><code>calculations</code> is how you want to display the calculations done in <code>reduce</code></li></ul><h4 id="preview-">Preview:</h4><h5 id="filter-data">Filter data</h5><p><img src="/images/libraries/react-pivot/react-pivot-filtering-solo-cell-filter-example.png" alt="React-Pivot filter data" title="React-Pivot filter data"></p><h5 id="nested-rows-tree-grid-">Nested rows (Tree grid)</h5><p><img src="/images/libraries/react-pivot/react-pivot-tree-table-example.png" alt="React-Pivot tree grid" title="React-Pivot tree grid"></p>',

  // additional resources

  npm: 'handsontable',
  cdn: 'handsontable',

  // Properties for filtering

  license: ['free'],
  framework: ['javascript-typescript', 'react'],
  type: ['data-grid'],
  useCase: ['pivot-table'],
};
