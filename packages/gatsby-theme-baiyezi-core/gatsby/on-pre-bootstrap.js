'use strict'
const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const Debug = require(`debug`)
const debug = Debug(`gatsby-theme-baiyezi-core`)
const getOptions = require('./utils/options')

module.exports = ({ store }, themeOptions) => {
  const { program } = store.getState()
  const { postPath, pagePath, assetPath } = getOptions(themeOptions)

  const dirs = [
    path.join(program.directory, postPath),
    path.join(program.directory, pagePath),
    path.join(program.directory, assetPath),
  ]

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}
