const path = require('path')

const rewireLess = require('react-app-rewire-less')
const {injectBabelPlugin } = require('react-app-rewired')

function resolve(dir){
  return path.join(__dirname,dir)
}

module.exports = function override(config,env){
  config = rewireLess(config,env)
  config = injectBabelPlugin(['import',
    {libraryName:'antd',libraryDirectory:'es',style:'css'}].config)
  config.resolve.alias['@'] = resolve('src')
  return config
}