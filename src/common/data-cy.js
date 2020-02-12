const home = {
  logo: 'image-logo',
  obj: {
    test: 'test'
  }
}

const data = {
  home
}

const generateDataCy = (enumObj) => {
  for (const key in enumObj) {
    const obj = { ...enumObj }
    if (typeof obj[key] === 'string') {
      obj[key] = `[data-cy="${obj[key]}"]`
    }
    if (typeof obj[key] === 'object') {
      obj[key] = generateDataCy(obj[key])
    }
    return obj
  }
}

module.exports = { home, tags: generateDataCy(data) }
