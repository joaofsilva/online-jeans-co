import moment from 'moment'
import _orderBy from 'lodash/orderBy'
import { month as months } from  '../../data/selectors'

const isEmpty = exports.isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false
    }
    return true
}

const deepmerge = exports.deepmerge = (target, src) => {
  const dst = {}

  if (target && typeof target === 'object') {
    Object.keys(target).forEach((key) => {
      dst[key] = target[key]
    })
  }

  Object.keys(src).forEach((key) => {
    if (Array.isArray(src[key]) || typeof src[key] !== 'object' || !src[key]) {
      dst[key] = src[key]
    } else {
      if (!target[key]) {
        dst[key] = src[key]
      } else {
        dst[key] = deepmerge(target[key], src[key])
      }
    }
  })

  return dst
}

exports.query = (data, selector, filters) => {
  const results = {}
  const matchesCriteria = (item, filters) => {
    if (!isEmpty(filters)) {
      for (let id in filters) {
        let filter = filters[id]
        if (id === 'month' && filter.length) {
          let monthId = moment(item.date).month()
          let month = months.data[monthId]
          if (filter.indexOf(month) === -1) {
            return false
          }
        }
        else if (filter.length && filter.indexOf(item[id]) === -1) {
          return false
        }
      }
    }
    return true
  }

  for (let i = 0; i < data.length; i++) {
    let item = data[i]
    let key = item[selector]
    let type = selector

    if (!matchesCriteria(item, filters)) {
      continue
    }

    if (type === 'month') {
      type = 'date'
      let monthId = moment(item.date).month()
      key = months.data[monthId]
    }

    if (!results[key]) {
      results[key] = {
        key,
        type: selector,
        count: 0
      }
    }
    results[key].count += item.count
  }

  let resultsArray = []
  for (let key in results) {
    if(results.hasOwnProperty(key)) {
      resultsArray.push(results[key])
    }
  }
  resultsArray = _orderBy(resultsArray, ['count'], ['desc'])

  for (let i = 0; i < resultsArray.length; i++) {
    resultsArray[i].rank = i+1
  }

  return resultsArray
}
