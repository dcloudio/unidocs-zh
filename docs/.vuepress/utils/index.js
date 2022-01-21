function isExternal(path) {
  return /^[a-z]+:/i.test(path)
}

module.exports = {
  isExternal
}