import request from '@/utils/request'

export function login(params) {
  return request.get('/mock/login.json', params)
}
export function fetchPermission(params) {
  return request.get('/mock/permission.json', params)
}
