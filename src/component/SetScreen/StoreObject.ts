import { Icons } from './icons.tsx'
import {useEffect} from 'react'

export function StoreObject() {
    const items = Icons()
    const style = {
        '暗夜': {
            backgroundColor: '#1f2025',
            color: 'rgb(176, 179, 181)',
            svg: items[0]
        },
        '护眼': {
            backgroundColor: '#333e43',
            color: 'rgb(176, 179, 181)',
            svg: items[0]
        },
        '极客': {
            backgroundColor: 'white',
            color: 'black',
            svg: items[1]
        }
    }
    return style
}


export function setScrStyle  (){
    let setScrStyleitem={
        'show':{
            display: 'block',
            height:document.documentElement.scrollHeight + 'px'
        },
        'hide' : {
            display: 'none',
            height:'0px'
        }
    }
    useEffect(() => {
        setScrStyleitem['show'].height = document.documentElement.scrollHeight + 'px'
    }, [document.documentElement.scrollHeight])
    return setScrStyleitem
}


