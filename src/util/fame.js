/************************************************************/
/**
 *  全局常量
 */
const STATIC = {
  DEFAULT_CATEGORY: '默认分类',
  ARTICLE_STATUS_PUBLISH: 'publish',
  META_CATEGORY: 'category',
  META_TAG: 'tag'
}

/************************************************************/

/**
 * 通用工具类
 */

/**
 * 生成随机的颜色种类
 * @returns {string}
 */
function randomColorType () {
  let colorType = [
    '', 'gray', 'primary', 'success', 'warning', 'danger'
  ]
  return colorType[Math.floor(Math.random() * colorType.length)]
}

/**
 * 标签转字符串
 * @param tags
 * @returns {string}
 */
function tagsToString (tags) {
  let str = ''
  for (let i = 0; i < tags.length; i++) {
    str += tags[i] + ','
  }
  return str.substr(0, str.length - 1)
}

/**
 * 字符串转标签
 * @param str
 * @returns {Array}
 */
function stringToTags (str) {
  if (str !== null && str !== '') {
    let tags = []
    tags = str.split(',')
    return tags
  } else {
    return []
  }
}

export default {
  STATIC,
  randomColorType,
  tagsToString,
  stringToTags
}