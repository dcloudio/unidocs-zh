import relationConfig from './type-relations.json' assert { type: "json" }
import { generateInterface, generateInterfaceTableFields } from "./interface.mjs";

/**
 * json声明接口的属性
 * @typedef {{name: string;type: string;}} PropertyDefine
 */

/**
 * json声明接口
 * @typedef {{name: string; titleName: string; titleLevel: string; property?:PropertyDefine[];isComponent?:boolean}} InterfaceDefine
 */

/**
 * 接口
 * @typedef {{name: string; titleName: string; titleLevel: string; property?:Property;isComponent?:boolean}} Interface
 */

/**
 * json声明组件
 * @typedef {component: string; interfaces: Interfaces[]} ComponentDefine
 */

export class Property {
    /**
     * @type {Map<string, string>}
     */
    #propertyMap
    /**
     * 
     * @param {PropertyDefine[]} param 
     */
    constructor(param) {
        this.#propertyMap = new Map(param.map(({ name, type }) => [name, type]))
    }
    /**
     * 根据属性名称获取属性类型
     * @param {string} name 
     * @returns 
     */
    getType(name) {
        return this.#propertyMap.get(name)
    }
}

class Relation {

    /**
     * 关系map
     * @type {Map<string,Interface[]>}
     */
    #relation

    /**
     * 初始化
     * @param {ComponentDefine[]} config 接口关系配置，json
     */
    constructor(config) {
        this.#relation = new Map(config.map(({ component, interfaces }) => {
            /**
             * @type {Interface[]}
             */
            const interfaceMap = interfaces.map(({ name, titleLevel, titleName, property, isComponent }) => ({
                name,
                titleLevel,
                titleName,
                isComponent,
                property: property && Array.isArray(property) ? new Property(property) : undefined
            }))
            return [component, interfaceMap]
        }))
    }

    /**
     * 设置当前组件名称
     * @param {string} name 组件名称
     * @returns
     */
    getComponent(name) {
        return this.#relation.get(name)
    }
}
/**
 * markdown表格正则表达式
 */
export const mdTableRegex = /^((?:\|.*?\|)+)\r?\n((?:\|.*?\|)*)(?:\r?\n)?$/gm;

/**
 * 根据Interface标题获取正则
 * @param {Interface['titleName']} titleName 标题名称
 * @param {Interface['titleLevel']} titleLevel 标题级别
 * @returns 
 */
export const getTitleRegExp = (titleName, titleLevel) => {

    switch (titleLevel) {
        case 'h1':
            return new RegExp(`#\\s*${titleName}`, 'gm')
        case 'h2':
            return new RegExp(`##\\s*${titleName}`, 'gm')
        case 'h3':
            return new RegExp(`###\\s*${titleName}`, 'gm')
        case 'null':
            return new RegExp(titleName, 'gm')

        default:
            return new RegExp(`\\*{2}\\s*${titleName}\s*\\*{2}`, 'gm')
    }
}



/**
 * 分割表格，获取要解析的表格
 * @param {string} str 
 * @param {string} titleName 
 * @param {string} titleLevel 
 * @returns string[]
 */
const getTableContent = (str, titleName, titleLevel) => {


    const sp = str.split(getTitleRegExp(titleName, titleLevel)).filter(Boolean)
    if (sp && sp[1]) {

        let dataStr = sp[1].trim()
        const indexStart = dataStr.indexOf("|")

        if (indexStart > -1) {
            dataStr = dataStr.substring(indexStart - 1)
        }
        const indexEnd = dataStr.indexOf('\n\n')

        if (indexEnd > -1) {
            dataStr = dataStr.substring(0, indexEnd)
        }

        if (!dataStr) return
        const table = dataStr.trim().split('\n').filter(Boolean)
        if (!table) return
        return table.filter(Boolean)
    }
}
export const relation = new Relation(relationConfig)

/**
 * 通过relation配置，生成接口声明文件
 * @param {string} str
 * @param {string} componentName 
 * @returns 
 */
const generateRelation = (componentName, str) => {

    const component = relation.getComponent(componentName)
    if (!component) return
    return component.map(({ titleName, titleLevel, name, property, isComponent }) => {
        const table = getTableContent(str, titleName, titleLevel)
        if (!table?.length) return

        const config = generateInterfaceTableFields(table)
        if (config) {
            return generateInterface(name, config, { str, property, file: componentName, isComponent })
        }
    }).filter(Boolean).join('\n\n')
}

export default generateRelation