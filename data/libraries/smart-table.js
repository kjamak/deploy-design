export default {
  title: 'Smart Table',
  slug: 'smart-table',
  repo: 'lorenzofox3/Smart-Table',
  homepage: 'http://lorenzofox3.github.io/smart-table-website',
  examples:
    'http://lorenzofox3.github.io/smart-table-website/#examples-section',
  licenseType: 'MIT',
  author: 'Rendard Laurent',
  authorurl: 'https://lorenzofox3.github.io/resume/',
  description:
    'Code source of Smart Table module - a table/grid for AngularJS.',
  content:
    '<p>Smart Table is a table module for angularJS. It allows you to quickly compose your table in a declarative way including sorting, filtering, row selection pagination. It is lightweight (around 3kb minified) and has no other dependencies than AngularJS itself. Check the documentation website for more details.</p><h4 id="custom-builds">Custom builds</h4><p>Smart Table is based around a main directive which generate a top level controller whose API can be accessed by sub directives (plugins), if you don&#39;t need some of these, simply edit the gulpfile (the pluginList variable) and run gulp build.</p><h4 id="preview-">Preview:</h4><h5 id="custom-pagination">Custom pagination</h5><p><img src="/images/libraries/smart-table/smart-table-custom-paging-feature.png" alt="Smart Table custom pagination" title="Smart Table custom pagination"></p><h5 id="filter-data">Filter data</h5><p><img src="/images/libraries/smart-table/smart-table-filtering-example.png" alt="Smart Table filter data" title="Smart Table filter data"></p><h5 id="dropdown-strict-select">Dropdown strict select</h5><p><img src="/images/libraries/smart-table/smart-table-strict-select.png" alt="Smart Table dropdown select" title="Smart Table dropdown select"></p>',

  // additional resources

  npm: 'handsontable',
  cdn: 'handsontable',

  // Properties for filtering

  license: ['free'],
  framework: ['angular'],
  type: [],
  useCase: [],
};
