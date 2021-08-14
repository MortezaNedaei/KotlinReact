{
  mode: 'production',
  resolve: {
    modules: [
      '/Users/airtour4/IdeaProjects/KotlinReact/build/js/packages/KotlinReact/kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/airtour4/IdeaProjects/KotlinReact/build/js/packages/KotlinReact/kotlin-dce/KotlinReact.js'
    ]
  },
  output: {
    path: '/Users/airtour4/IdeaProjects/KotlinReact/build/distributions',
    filename: [Function: filename],
    library: 'KotlinReact',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      '/Users/airtour4/IdeaProjects/KotlinReact/build/processedResources/js/main'
    ]
  },
  stats: {
    warnings: false,
    errors: false
  }
}