import { getFieldCN, getFieldEN, getFieldMap, mustMap } from "./utils.mjs";
import generateRelation from "./relation.mjs";

/**
 * @typedef {{ [k: string]: number; }} FieldMap
 */
/**
 * @typedef  {{table: string[][]; events?: string[][]; fieldCN: string[]; fieldEN: any; fieldMap: FieldMap} TableConfig
 */
/**
 * 根据table，生成格式化的接口数据
 * @param {string} str 
 * @returns 
 */
const generateInterfaceTable = (str) => {
    const titleContent = /\*\*属性说明\*\*\n+([^\n]+\n)*/mg

    const data = titleContent.exec(str)
    if (!data?.[0]) return
    const table = data[0].replace('**属性说明**', '').trim().split("\n").filter(Boolean)
    return generateInterfaceTableFields(table)
}

/**
 * 
 * @param {string[]} table 
 * @returns 
 */
export const generateInterfaceTableFields = (table) => {
    // console.log(table)
    const fieldCN = getFieldCN(table.shift())
    table.shift()

    // |属性|说明|类型|平台差异说明|
    // const fieldCN = '|属性名|类型|默认值|说明|生效时机|平台差异说明|'.split('|')
    const fieldEN = getFieldEN(fieldCN)

    const fieldMap = getFieldMap(fieldEN)

    const { property } = fieldMap
    const t = table.map(s => s.split('|').map(s => s.trim())).filter(Boolean)

    const events = t.filter((item) => item[property].startsWith('@') === true)
    return {
        table: t.filter((item) => item[property].startsWith('@') === false),
        events,
        fieldCN,
        fieldEN,
        fieldMap
    }
}


/**
 * 生成一条数据类型的内容
 * @param {string[]} arr 
 * @param {TableConfig} files 
 * @param {import("./relation.mjs").Property} propertyIns 读取的原始字符串
 * @returns 
 */
const generateInterfaceProperty = (arr, files, propertyIns) => {
    const { fieldMap, fieldCN } = files
    const { property, type, default: defaultIndex, comment, effectiveTiming, platformDifferences, must } = fieldMap

    if (!arr[property]) return


    const baseName = arr[property].trim()
    // if(baseName === 'content') {
    //     debugger
    // }
    let relativeType = propertyIns ? propertyIns.getType(baseName) : undefined

    if (!relativeType) { /**
     * 处理`string/Array`
     */
        const types = arr[type].replace(/(&#124;)|(\\|\/)/g, '|').split('|').map(s => s.trim())
        relativeType = types.map(t => {
            switch (t) {
                case 'Array&lt;Number&gt;':
                case 'Array&lt;number&gt;':
                case 'Array＜Number＞':
                    return 'number[]';
                case 'Array&lt;Object&gt;':
                case 'Array&lt;object&gt;':
                case 'Array＜Object＞':
                    return 'Record<propertyKey,any>[]';
                case 'Array&lt;String&gt;':
                case 'Array&lt;string&gt;':
                case 'Array＜String＞':
                    return 'string[]';
                case 'Array&lt;Boolean&gt;':
                case 'Array&lt;boolean&gt;':
                case 'Array＜Boolean＞':
                    return 'boolean[]';
                case 'Color':
                case 'color':
                    return 'string';

                default:
                    return t && ['String', 'Number', 'Boolean', 'Null'].includes(t) ? t.toLowerCase() : t
            }
        }).join(' | ')
    }

    const name = toCamel(baseName)

    //处理defaultVal为字符串的情况
    let defaultVal = (arr[defaultIndex] || '').trim()
    // console.log({ defaultVal })
    let defaultLine = ''
    switch (defaultVal) {
        case 'true':
        case 'false':
        case '无':
        case '[]':
        case '{}':
        case 'null':
            defaultLine = `     * @default ${defaultVal}`
            break;

        default:
            //默认值是字符串
            if (defaultVal && /^-?\d+\.?\d*$/.test(defaultVal) === false) {
                const val = defaultVal.replace(/"|'/g, '').trim()
                defaultLine = !val ? '' : `     * @default "${val}"`
            } else {
                defaultLine = `     * @default ${defaultVal}`
            }
            break;
    }

    const effectiveTimingLine = arr[effectiveTiming] ? `\n     * @effectiveTiming ${fieldCN[effectiveTiming]} ${arr[effectiveTiming]}` : ''
    const platformDifferencesLine = arr[platformDifferences] ? `\n     * @platformDifferences ${fieldCN[platformDifferences]}:${arr[platformDifferences]}` : ''

    const isMust = arr[must] === mustMap['true']
    const mustSymbol = isMust ? '' : '?'
    return `
    /**
     * ${[arr[comment], defaultLine].filter(Boolean).join('\n')}
     * @name ${name} ${effectiveTimingLine}${platformDifferencesLine}
     */
    ${name}${mustSymbol}: ${relativeType}`
}


/**
 * 生成事件接口
 * @param {string} interfaceName 
 * @param {TableConfig} data 
 * @returns
 */
const generateEvent = (interfaceName, data) => {
    const lines = data.table.map((item) => generateEventProperty(item, data))

    if (!lines.length) return

    return `
export interface ${getEventName(toUpperCamel(interfaceName))} {
    ${lines.join('\n')}
}

`
}
/**
 * 生成事件接口名称
 * @param {string} interfaceName 接口名称
 * @returns 
 */
const getEventName = (interfaceName) => `${toUpperCamel(interfaceName)}Events`

/**
 * 根据备注内容生成事件属性
 * @param {string} comment 单元格的备注内容
 * @returns 
 */
const getEventTypeByComment = (comment) => (/detail\s*=\s*\{[^\]]+\}/mg.exec(comment)?.[0] || '').replace('=', ':')

/**
 * 生成一条事件类型的内容
 * @param {string[]} arr 
 * @param {TableConfig}
 * @returns
 */
const generateEventProperty = (arr, { fieldMap, fieldCN }) => {
    // "update:modelValue": (value: string) => boolean;

    const { property, comment, platformDifferences, effectiveTiming } = fieldMap
    if (!arr[property]) return ''
    let name = arr[property].trim()

    name = toCamel(name.startsWith('@') ? name.replace('@', 'on-') : `on-${name}`)

    const type = getEventTypeByComment(arr[comment])
    const eventType = type ? `{${type}}` : 'any'

    const effectiveTimingLine = arr[effectiveTiming] ? `\n     * @effectiveTiming ${fieldCN[effectiveTiming]} ${arr[effectiveTiming]}` : ''
    const platformDifferencesLine = arr[platformDifferences] ? `\n     * @platformDifferences ${fieldCN[platformDifferences]}:${arr[platformDifferences]}` : ''
    return `
    /**
     * ${arr[comment]}
     * @name ${name} ${effectiveTimingLine}${platformDifferencesLine}
     */
    ${name}?: (event: ${eventType}) => void;
    `
}
/**
 * 转大驼峰命名风格
 * @param {string} s 字符串
 * @returns 
 */
const toUpperCamel = s => toCamel(s.toString()).replace(/^\w/, (s) => s.toUpperCase())
/**
 * 转小驼峰命名风格
 * @param {string} s 字符串
 * @returns 
 */
const toCamel = (s) => s.toString().replace(/-(\w)/g, (m0, m1) => m1.toUpperCase())

/**
 * 驼峰转下中横线风格
 * @param {string} s 
 * @returns 
 */
const toSnackCase = (s) => s.toString().replace(/[A-Z]/g, (m, i) => {
    return i === 0 ? m.toLowerCase() : `-${m.toLowerCase()}`
}).replace('_', '-')
/**
 * 获取接口名称的注释说明
 * @param {string} name 
 * @param {string} str 
 * @returns 
 */
const getInterfaceComment = (name, str) => {
    const reg = new RegExp(`#\\s+${name}\\n+([^\\n]+)`)
    const res = str.match(reg)
    if (res && res[1]) {
        return res[1].replace(/。$/, '')
    }
}

/**
 * @typedef {{str: string;property: import("./relation.mjs").Property; file?: string; isComponent?: boolean}} GenerateInterfaceOptions
 */
/**
 * 生成接口
 * @param {string} interfaceName 接口名称
 * @param {TableConfig} data 格式化的表格数据和字段
 * @param {GenerateInterfaceOptions}
 * @returns
 */
export const generateInterface = (interfaceName, data, { str, property, isComponent, file }) => {
    const comp = file || interfaceName.toString()

    const { fieldMap, fieldEN, fieldCN, table: interfacePropertyTable, events } = data

    // 获取接口说明
    const interfaceComment = getInterfaceComment(interfaceName, str)
    const interfaceCommentContent = interfaceComment ? `/**
* ${interfaceComment}
*/` : ''



    const interfaceCamel = toUpperCamel(interfaceName)

    const interfaceProps = isComponent === false ? interfaceCamel : `${interfaceCamel}Props`


    const eventDoc = generateEvent(interfaceName, { table: events, fieldMap, fieldEN, fieldCN })


    /**
     * @type {string[]}
     */
    const propsLines = interfacePropertyTable.map((item) => generateInterfaceProperty(item, data, property)).filter(Boolean)

    const propsDoc = !propsLines.length ? undefined : `${interfaceCommentContent}
export interface ${interfaceProps}{
    ${propsLines.join('\n')}
}`


    const interfaceOfEvent = eventDoc && getEventName(interfaceCamel)

    const joinPropsArr = [propsDoc && interfaceProps, interfaceOfEvent].filter(Boolean)

    const exportNamedComponent = `
export declare type ${interfaceCamel}Component = import("vue").DefineComponent<${joinPropsArr.join(' & ') || 'any'}>;
`

    if (isComponent !== false) {
        addType(`  ${interfaceCamel}: import('./${comp}').${interfaceCamel}Component`)
        addType(`  "${toSnackCase(interfaceCamel)}": import('./${comp}').${interfaceCamel}Component`)
        const joinProps = joinPropsArr.map((name) => `import('./${comp}').${name}`).join(' & ')
        jsxList.push(`      "${toSnackCase(interfaceCamel)}": ${joinProps} & JSXElementAttr;`)
    }

    return [propsDoc, eventDoc, isComponent === false ? '' : exportNamedComponent].filter(Boolean).join('\n')
}


/**
 * 生成接口
 * @param {string} name 组件名称，生成的接口将以这个名称命名，例如button
 * @param {string} str 要解析的文本内容 
 * @returns 
 * @example 
const str = `

**属性说明**

|属性名|类型|默认值|说明|生效时机|平台差异说明|
|:-|:-|:-|:-|:-|:-|
|size|String|default|按钮的大小|||
|type|String|default|按钮的样式类型|||
`
toInterface('button',str)
 *
 */
const toInterface = (name, str) => {
    const clearStr = str.replace(/\r?\n/gm, '\n')
    /**
     * 通过配置关系解析当个md中多个组件声明
     */
    const relationInterfaces = generateRelation(name.toString(), clearStr)
    if (relationInterfaces) {
        return relationInterfaces
    }
    /**
     * 通过当个md生成声明
     */
    const table = generateInterfaceTable(clearStr)
    if (table) {
        return generateInterface(name.toString(), table, { str: clearStr })
    }
}

const indexList = []

/**
 * 为索引文件添加导出项
 * @param {string} str 导出项，例如: `export * from './view'`
 */
export const addIndex = (str) => {
    indexList.push(str)
}

export const getIndexDoc = () => {
    return `/**
 * @author weiquanju
 */

export {}

${Array.from(new Set(indexList)).join('\n')}
`
}
const typeList = []

/**
 * 为索引文件添加导出项
 * @param {string} str 导出项，例如: `export * from './view'`
 */
const addType = (str) => {
    typeList.push(str)
}
const jsxList = []
export const getTypeDoc = () => {
    return `/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by weiquanju
// Read more: https://github.com/vuejs/core/pull/3399
export {}

import { StyleValue } from "vue";
interface JSXElementAttr {
  class?: any
  style?: StyleValue
}

export interface MPComponents {
${typeList.join('\n')}
}

declare global {
  namespace JSX {
    //避免jsx命名冲突
    interface IntrinsicElements {
${jsxList.join('\n')}
    }
  }
}

declare module "@vue/runtime-core" {

  export interface IntrinsicElementAttributes {
${jsxList.join('\n')}
  }

  export type NativeElements = {
    [K in keyof IntrinsicElementAttributes]: IntrinsicElementAttributes[K];
  };
}
declare module "vue" {
  export interface GlobalComponents extends MPComponents {}
}
`
}

export default toInterface