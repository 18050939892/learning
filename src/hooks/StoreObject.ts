import { Icons } from '../components/SetScreen/icons.tsx'
export function useStoreObject() {
    const items = Icons()
    const style = {
        'dark': {
            backgroundColor: '#1f2025',
            color: 'rgb(176, 179, 181)',
            svg: items[0]
        },
        'eye': {
            backgroundColor: '#333e43',
            color: 'rgb(176, 179, 181)',
            svg: items[0]
        },
        'geek': {
            backgroundColor: 'white',
            color: 'black',
            svg: items[1]
        }
    }
    return style
}
export function useScreenStyle() {
    let setScrStyleitem = {
        'show': {
            display: 'block',
            height: document.documentElement.scrollHeight + 'px',
        },
        'hide': {
            display: 'none',
            height: '0px'
        }
    }
    return setScrStyleitem
}
export const overHiddenClass = {
    'hide': {
        height: '20px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    'show': {
        height: '',
        overflow: '',
        textOverflow: '',
        whiteSpace: ''
    }
}
