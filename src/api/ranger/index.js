/*
 * @Author       : hwl
 * @Date         : 2022-07-11 22:12:50
 * @LastEditors  : hwl
 * @LastEditTime : 2022-07-11 23:28:29
 * @Description  :
 */
import { serveRequest } from '../axios.js'

// eslint-disable-next-line import/prefer-default-export
export const getRangerInfoApi = (id) =>
  serveRequest.get(`/NFT-API/getRangerInfoApi/${id}?lang_id=14&id=${id}`)
