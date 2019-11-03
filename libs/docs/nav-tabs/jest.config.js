module.exports = {
  name: 'docs-nav-tabs',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/docs/nav-tabs',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
