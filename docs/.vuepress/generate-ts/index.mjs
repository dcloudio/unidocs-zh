import { readFile, writeFile } from "fs/promises"
import { existsSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from "path"
import generateInterface, { addIndex, getIndexDoc, getTypeDoc } from "./interface.mjs";


/**
 * 生成组件路径
 * @param {string} name 组件名称
 * @returns 
 */
const getPath = (name) => resolve(process.cwd(), `docs/component/${name}.md`)

/**
 * 生成组件文档
 * @param {string[]} componentNames 
 */
const main = async (componentNames) => {
    for (const i in componentNames) {
        const comp = componentNames[i]
        const path = getPath(comp)
        const data = await readFile(path, { encoding: 'utf-8' })
        const tsDoc = generateInterface(comp, data)

        const savePath = resolve(process.cwd(), `docs/.vuepress/types/inner-components/${comp}.d.ts`)
        const dir = dirname(savePath)
        if (!existsSync(dir)) {
            mkdirSync(dir, { recursive: true });
        }
        if (tsDoc) {
            addIndex(`export * from './${comp}'`)
            writeFile(savePath, tsDoc, { encoding: 'utf-8' }).catch((err) => console.error(err))
        } else {
            console.warn('loss doc: ' + comp)
        }
    }
    //并入types
    addIndex(`export * from './types'`)
    /**
     * 生成index索引文件
     */
    const saveIndexPath = resolve(process.cwd(), `docs/.vuepress/types/inner-components/index.d.ts`)
    const indexDoc = getIndexDoc()
    indexDoc && writeFile(saveIndexPath, indexDoc, { encoding: 'utf-8' }).catch((err) => console.error(err))

    /**
     * 生成vue Volor ide文件，自动对uniapp内置组件进行提示
     */
    const saveTypePath = resolve(process.cwd(), `docs/.vuepress/types/inner-components/types.d.ts`)
    const typeDoc = getTypeDoc()
    typeDoc && writeFile(saveTypePath, typeDoc, { encoding: 'utf-8' }).catch((err) => console.error(err))
}

const innerComponents = 'view,scroll-view,swiper,match-media,movable-area,movable-view,cover-view,cover-image,icon,text,rich-text,progress,button,checkbox,editor,form,input,label,picker,picker-view,radio,slider,switch,textarea,animation-view,audio,camera,image,video,live-player,live-pusher,map,canvas,web-view'.split(',')

main(innerComponents)
console.log('finish!')