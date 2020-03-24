const defaultOptions = {
  basePath: '/',
  postPath: 'content/posts',
  pagePath: 'content/pages',
  assetPath: 'content/assets',
}

module.exports = function getOptions(themeOptions) {
  return { ...defaultOptions, ...themeOptions }
}
