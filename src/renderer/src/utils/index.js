import { key, salt } from '../config/index.js'
import cryptoJs from 'crypto-js'

function aesHex(str) {
  let srcs = cryptoJs.enc.Utf8.parse(str)
  let encrypted = cryptoJs.AES.encrypt(srcs, cryptoJs.enc.Utf8.parse(key), {
    mode: cryptoJs.mode.ECB
  })
  return encrypted.ciphertext.toString()
}

/**
 * 用户信息解密
 * @param {String} data
 * @returns josn
 */
function decryptUserInfo(data) {
  let srcs = cryptoJs.enc.Utf8.parse(data)
  let encrypted = cryptoJs.AES.decrypt(srcs, cryptoJs.enc.Utf8.parse(key), {
    mode: cryptoJs.mode.ECB
  })
  return encrypted.ciphertext.toString()
}

function planSign(id, type) {
  // const md5 = cryptos.createHash('md5')
  // md5.update(id + type + salt)
  // return md5.digest('hex')
  return cryptoJs.MD5(id + type + salt).toString()
}

/**
 *
 * @param {String} device
 * @param {String} type
 * @param {String} planId
 * @param {String} userId
 * @param {String} address
 * @returns
 */
function saveSign(device, type, planId, userId, address) {
  // const md5 = cryptos.createHash('md5')
  // md5.update(device + type + planId + userId + address + salt)
  // return md5.digest('hex')
  return cryptoJs.MD5(device + type + planId + userId + address + salt).toString()
}

/**
 * 报告sign加密
 * @param {*} userId 用户ID
 * @param {*} reportType 报告类型
 * @param {*} planId 计划ID
 * @param {*} title 日报标题
 * @returns
 */
function reportSign(userId, reportType, planId, title) {
  return cryptoJs.MD5(userId + reportType + planId + title + salt).toString()
}

export { aesHex, planSign, saveSign }
