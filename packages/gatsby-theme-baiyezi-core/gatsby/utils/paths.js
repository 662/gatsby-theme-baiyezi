'use strict'

const paths = {
  categoriesPath: 'categories',
  categoryPath: 'category',
  tagPath: 'tag',
  tagsPath: 'tags',
  archivesPath: 'archives',
}

const createPath = (base, middle = '', path = '') =>
  `/${base}/${middle}/${path}`
    .toLowerCase()
    .replace(/\/+/g, '/') //  '/////abc//d' -> '/abc/d'
    .replace(/\/$/, '') //          '/abc/' -> '/abc'
    .replace(/\s+/g, '-') //       '/a b c' -> '/a-b-c'
    .replace(/-+/g, '-') //  '/a----b----c' -> '/a-b-c'
    .replace(/^$/, '/') //               '' -> '/'

const createCategoryOrTagPath = (base, middle, path) =>
  createPath(base, middle, path.replace(/\/+/g, '-'))

exports.paths = paths

exports.createPath = createPath

exports.createCategoryOrTagPath = createCategoryOrTagPath
