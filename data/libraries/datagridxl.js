export default {
  title: 'DataGridXL',
  slug: 'datagridxl',
  repo: 'DataGridXL/DataGridXL',
  homepage: 'https://datagridxl.com',
  examples: 'https://datagridxl.com/demos',
  licenseType: 'Free/Commercial',
  author: 'Vanilla Components',
  authorurl: 'https://vanillacomponents.com',
  description:
    'DataGridXL is a performant and reliable vanilla Javascript data grid with Excel-like controls.',
  content:
    '<p>DataGridXL is a performant and reliable vanilla Javascript data grid with Excel-like controls.</p><p><img src="/images/libraries/datagridxl/javascript-spreadsheet.png" alt="DataGridXL Screenshot" title="DataGridXL Screenshot"></p><h2 id="main-features">Main Features</h2><h3 id="performance-first">Performance First</h3><p>DataGridXL is able to display thousands of rows and 60+ columns without a hiccup. Instead of useless features, your users get a performant grid. How&#39;s that for a change?</p><h3 id="lightweight-and-fashion-free">Lightweight and Fashion-free</h3><p>DataGridXL does not require any dependencies. No jQuery, no React, no Vue; simply no fashion. It&#39;s available in timeless Vanilla flavour only. It works today and it will work tomorrow.</p><h3 id="familiar-interface">Familiar Interface</h3><p>Your users will immediately know how to use DataGridXL, since common keyboard, mouse AND (readonly) touch controls are carefully copied from Microsoft Excel and Google Spreadsheets.</p><h3 id="works-with-csv-json-and-2d-arrays">Works with CSV, JSON and 2D arrays</h3><p>Support for all compatible formats. Import CSV data, display a large Javascript 2D array or a JSON array coming from database tables. Export options built-in.</p><h3 id="reliable">Reliable</h3><p>DataGridXL carefully keeps a store &amp; state. It means that reordering or moving columns/rows will never accidentally mess up your DOM.</p><h2 id="usage">Usage</h2><p>Include <code>datagridxl.js</code> in your web page HTML file:</p><pre><code><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://code.datagridxl.com/datagridxl.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre><p>Then create a new grid:</p><pre><code><span class="hljs-attribute">var options</span> = {    data: [...]};<span class="hljs-attribute">var grid</span> = new DataGridXL(<span class="hljs-string">"grid"</span>, options);</code></pre><p>Learn more by reading the <a href="https://datagridxl.com/docs/getting-started">Getting Started</a> article.</p><h2 id="license">License</h2><p>This DataGridXL software is free under a linkware license.</p><p>This means you may not remove or hide in any other way link to DataGridXLweb site - <a href="https://datagridxl.com">https://datagridxl.com</a>.</p><p>If you wish to remove the link, you should purchase commercial license.</p><p>You may not redistribute, sublicense or sell this program without writtenpermission of Vanilla Components, the creator of DataGridXL software.</p><p>This software is provided without warranty.</p><h2 id="commercial-license">Commercial license</h2><p>To purchase a commercial license for the current version of this library, visit<a href="https://datagridxl.com/buy">DataGridXL Online Store</a></p><h2 id="more-info">More info</h2><p>Visit the <a href="https://datagridxl.com">DataGridXL website</a> for more information and documentation.</p><h2 id="contact-us">Contact us</h2><ul><li>Email: contact@datagridxl.com</li><li>Web: <a href="https://datagridxl.com">https://datagridxl.com</a></li></ul>',

  // additional resources

  npm: 'handsontable',
  cdn: 'handsontable',

  // Properties for filtering

  license: ['free', 'commercial'],
  framework: ['javascript-typescript'],
  type: ['data-grid'],
  useCase: ['data-editor'],
};
