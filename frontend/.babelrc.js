module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@mui/material',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'core',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@mui/icons-material',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'icons',
    ],
    // Add any other plugins you need here
  ],
  overrides: [
    {
      test: './node_modules',
      presets: ['@swc-node/babel']
    }
  ]
};
