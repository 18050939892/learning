import { overHiddenClass } from '../../hooks/StoreObject.ts'
import { useAtom } from 'jotai/index'
import { CurrentTheme, FontSize, OverHidden } from '../../jotai/store.ts'
import './index.less'

export function NewsItem(props) {
    const [overHidden] = useAtom(OverHidden)
    const [fontSize] = useAtom(FontSize)
    const [currentTheme] = useAtom(CurrentTheme)
    let {NewValue} = props
    let {title, mobileUrl} = NewValue
    let hot = NewValue.hot || ''
    hot > 10000 ? hot = hot.toString().slice(0, -4) + '万' : hot = hot
    let color
    props.id < 4 ? (props.id < 3 ? (props.id < 2 ? color = 'red' : color = 'orange') : color = 'gold') : color = currentTheme.color
    const id = props.id + '.'
    return (
        <a href={mobileUrl} target="_blank" rel="noreferrer">
            <span
                className="span-one"
                style={{
                    color: color,
                    fontSize: fontSize + 'px'
                }}
            >{id}</span>

            <span
                className="span-two"
                style={{
                    color: currentTheme.color,
                    fontSize: fontSize + 'px',
                    height: overHiddenClass[overHidden].height,
                    overflow: overHiddenClass[overHidden].overflow,
                    textOverflow: overHiddenClass[overHidden].textOverflow,
                    whiteSpace: overHiddenClass[overHidden].whiteSpace
                }}

            >
                {title}</span>
            <span
                className="span-three"
                style={{
                    color: currentTheme.color,
                    fontSize: fontSize + 'px'
                }}
            >{hot}</span>
        </a>
    )
}
