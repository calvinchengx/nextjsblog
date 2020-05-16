const fs = require('fs-extra')
const rimraf = require('rimraf')

const parentDir = fs.readdirSync('..')
const exclusions = ['.git', '.nojekyll', '_project', 'README.md']

const toDelete = parentDir.filter((target) => {
  return !exclusions.includes(target)
})

toDelete.map((item) => {
  rimraf.sync('../' + item)
})
