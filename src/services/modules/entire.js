import { pageSize } from '@/config'
import request from '..'

// 请求示例代码
export function getEntireRoomList(offset = 0, size = pageSize) {
  return request.get({
    url: 'entire/list',
    params: {
      offset,
      size
    }
  })
}
