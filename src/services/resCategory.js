import { request } from '../utils'

export async function query (params) {
  return request({
    url: 'http://192.168.1.109:8000/zlims/data/resource_category/',
    fetchType: 'CORS',
    method: 'get',
    data: params,
  })
}
