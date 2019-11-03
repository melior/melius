module.exports = {
  name: 'docs-home',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/docs/home',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
