/**
 * 获取中文字段
 * @param {string} str 
 * @returns 
 */
export const getFieldCN = (str) => str.trim().split("|").map(s => s.trim()).map((field) => {
    switch (field) {
        case '属性名':
        case '属性':
            return '属性';

        case '平台兼容':
        case '平台差异':
        case '平台差异说明':
            return '平台差异说明';

        default:
            if (field.includes('平台差异')) {
                return '平台差异说明'
            } else if (field.startsWith('属性')) {
                return '属性'
            } else if (field.toLowerCase().startsWith('google地图')) {
                return 'google地图'
            } else if (field.startsWith('高德')) {
                return '高德'
            } else if (['类型', '默认值', '说明', '生效时机', '必填', '高德是否支持', '备注', ''].includes(field)) {
                return field
            } else {
                throw new Error(`警告：有未判断字段: "${field}", ${str}`)
                return field
            }
    }
})

export const mustMap = {
    '是': true,
    '否': false,
    'true': '是',
    'false': '否'
}

const mapRelation = {
    '高德': 'AMapSupported',
    'AMapSupported': '高德',

    'google地图': 'GoogleMapSupported',
    'GoogleMapSupported': 'google地图',

    '备注': 'notes',
    'notes': '备注',

    '属性': 'property',
    'property': '属性',

    '类型': 'type',
    'type': '类型',

    '默认值': 'default',
    'default': '默认值',

    '说明': 'comment',
    'comment': '说明',

    '必填': 'must',
    'must': '必填',

    '生效时机': 'effectiveTiming',
    'effectiveTiming': '生效时机',

    '平台差异说明': 'platformDifferences',
    'platformDifferences': '平台差异说明',

    '': ''
}

/**
 * 通过`fieldsCN`获取fieldEN
 * @param {keyof typeof map[]} fieldsCN 
 * @returns string[]
 */
export const getFieldEN = (fieldsCN) => {
    return fieldsCN.map(field => mapRelation[field])
}

/**
 * @typedef {property: number;type: number;default: number;comment: number;effectiveTiming: number;platformDifferences: number;} FieldMap
 */

/**
 * 通过`fieldsEN`获取字段和index的map
 * @param {keyof typeof map[]} fieldsEN 
 * @returns FieldMap
 */
export const getFieldMap = (fieldsEN) => {
    return Object.fromEntries(fieldsEN.map((field, index) => {
        if (field !== '') return [field, index]
    }).filter(Boolean))
}

/**
 * 生成泛型字符串
 * @param {string} genericType 
 * @param {string} paramsType 
 * @returns 
 */
export const genericType = (genericType, paramsType) => `${genericType}<${paramsType}>`