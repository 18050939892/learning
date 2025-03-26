export function useScreenStyle() {
    // todo 这里没改 const
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
