var validBitList = [
  [7],
  [5, 6],
  [4, 6, 6],
  [3, 6, 6, 6],
  [2, 6, 6, 6, 6],
  [1, 6, 6, 6, 6, 6]
]
var otherByteBase = 1 << 7
var b64Info = new Array(6)
for (var i = 0; i < validBitList.length; i++) {
  var validBit = validBitList[i]
  var firstByteBase
  if (i === 0) {
    firstByteBase = 0
  }
  var fillLength = validBit[0] + 1
  firstByteBase = 255 >> fillLength << fillLength

  b64Info[i] = {
    validBit,
    firstByteBase,
    otherByteBase,
    maxValue: Math.pow(2, sum(validBit)) - 1 // 移位会溢出，使用Math.pow计算
  }
}

function sum(arr) {
  return arr.reduce(function (total, value) {
    return total + value
  }, 0)
}

function Encoder() {
  this.remainder = 0
  this.remainderBit = 0
  this.utf8ArrLength = 0
  this.result = ''
}

Encoder.prototype.push = function (utf8Code) {
  this.utf8ArrLength++
  var remainderMoveBit = (6 - this.remainderBit)
  this.remainderBit = 8 - remainderMoveBit
  var b64Value1 = this.remainder << remainderMoveBit
  var b64Value2 = utf8Code >> this.remainderBit
  var b64Value = b64Value1 + b64Value2
  this.remainder = utf8Code - (b64Value2 << this.remainderBit)
  this.result += b64CodeToString(b64Value)
  if (this.remainderBit === 6) {
    this.result += b64CodeToString(this.remainder)
    this.remainder = 0
    this.remainderBit = 0
  }
}

Encoder.prototype.flush = function () {
  if (this.remainderBit) {
    var b64Value = this.remainder << (6 - this.remainderBit)
    this.result += b64CodeToString(b64Value)
  }
  var eqLength = (3 - (this.utf8ArrLength % 3)) % 3
  this.result += '='.repeat(eqLength)
}

function charCodeToUtf8(code) {
  var lengthIndex
  for (var i = 0; i < b64Info.length; i++) {
    var maxValue = b64Info[i].maxValue;
    if (code <= maxValue) {
      lengthIndex = i
      break;
    }
  }
  if (lengthIndex === undefined) {
    throw new Error('invalid char code')
  }
  var {
    validBit,
    firstByteBase,
    otherByteBase,
  } = b64Info[lengthIndex]
  var result = []
  for (var i = validBit.length - 1; i >= 0; i--) {
    var base = i === 0 ? firstByteBase : otherByteBase
    var tempCode = code >>> validBit[i]
    result.unshift(base + code - (tempCode << validBit[i]))
    code = tempCode
  }
  return result
}

export function Base64Encode(str) {
  // 一次循环计算出结果，减少内存占用
  var encoder = new Encoder()
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    var utf8Arr = charCodeToUtf8(charCode)
    utf8Arr.forEach(function (item) {
      encoder.push(item)
    });
  }
  encoder.flush()
  return encoder.result
}

function b64CodeToString(code) {
  return String.fromCharCode(uint6ToB64(code))
}

/**
   * 将base64 code转换为字符对应的char code
   */
function uint6ToB64(nUint6) {
  return nUint6 < 26 ?
    nUint6 + 65 :
    nUint6 < 52 ?
      nUint6 + 71 :
      nUint6 < 62 ?
        nUint6 - 4 :
        nUint6 === 62 ?
          43 :
          nUint6 === 63 ?
            47 :
            65;
}