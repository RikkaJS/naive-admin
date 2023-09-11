import { del, get, post } from '@/plugins/axios'

export function getPerson() {
  return get('/comm/person')
}

export function updatePerson(data: any) {
  return post('/comm/personUpdate', { data })
}

export function listPermmenu() {
  return get('/comm/permmenu')
}

export function getUploadMode() {
  return get('/comm/file/uploadMode')
}

export function listFile(data: any) {
  return get('/comm/file/list', { data })
}

export function uploadFile(data: any) {
  return post('/comm/file/upload', data)
}

export function deleteFile(data: any) {
  return del('/comm/file/delete', { data })
}
