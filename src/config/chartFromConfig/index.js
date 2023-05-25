// import areaFromConfig from './areaFromConfig.jsx'
import lineFromConfig from './lineFromConfig.jsx'

// 用于图表配置页面-使用表单配置图表样式页面, 此文件夹用于存放可以配置的表单项
// 此文件用于给每个treeItem加上key, 来满足Tree组件的需要
const addKey = (tree, currentIndex = '') => {
  tree.forEach((item, index) => {
    item.key = currentIndex + index
    if (item.children) {
      addKey(item.children, item.key + '-')
    }
  })

  console.log('tree-----', tree)
  return tree
}

export default {
  // Area: addKey(areaFromConfig),
  Line: addKey(lineFromConfig)
}
