module.exports = {
  name: 'nav-tabs',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/nav-tabs',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
