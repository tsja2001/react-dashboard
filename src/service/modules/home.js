import request from '..'

// 请求示例代码
export function getHomeGoodPriceData() {
  return request.get({
    url: '/home/highscore'
  })
}

export function getHomeHighSocreData() {
  return request.get({
    url: '/home/goodprice'
  })
}
