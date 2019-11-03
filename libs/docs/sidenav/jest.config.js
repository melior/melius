module.exports = {
  name: 'docs-sidenav',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/docs/sidenav',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
