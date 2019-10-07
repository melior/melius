module.exports = {
  name: 'demo-nav-tabs',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/demo/nav-tabs',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
