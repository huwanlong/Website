export * from './array'
export * from './image'
export * from './datetime'
export * from './string'
export * from './chains'

/*
 * @Author       : hwl
 * @Date         : 2022-05-14 18:06:33
 * @LastEditors  : hwl
 * @LastEditTime : 2022-06-05 21:44:52
 * @Description  :
 */

import $ from 'jquery'

export const isMobile = () => {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    return true // 手机端
  }
  return false // alert('PC端')
}

export const isPad = () => false

export const onCheckMaterial = (pcUrl: string, mobUrl: string) => {
  const data = {
    material: { type: '', url: '' },
    material_pc: { type: '', url: '' },
    material_mob: { type: '', url: '' }
  }
  data.material_pc.type = pcUrl && pcUrl.split('|')[0] ? pcUrl.split('|')[0] : ''
  data.material_pc.url = pcUrl && pcUrl.split('|')[1] ? pcUrl.split('|')[1] : pcUrl
  data.material_mob.type = mobUrl && mobUrl.split('|')[0] ? mobUrl.split('|')[0] : ''
  data.material_mob.url = mobUrl && mobUrl.split('|')[1] ? mobUrl.split('|')[1] : mobUrl
  // @ts-expect-error undefined
  data.material = $(window).width() <= 960 && mobUrl ? data.material_mob : data.material_pc
  return data
}
