import { overHiddenClass } from '../../hooks/StoreObject.ts'
import { useAtom } from 'jotai/index'
import { CurrentTheme, FontSize, OverHidden } from '../../jotai/store.ts'
import './index.less'

export function NewsItem(props) {
    const [overHidden] = useAtom(OverHidden)
    const [fontSize] = useAtom(FontSize)
    const [currentTheme] = useAtom(CurrentTheme)
    const {NewValue} = props
    const {title, mobileUrl} = NewValue
    const hot = NewValue.hot > 10000 ? NewValue.hot.toString().slice(0, -4) + '万' : NewValue.hot
    const color = props.id < 4 ? (props.id < 3 ? (props.id < 2 ? 'red' : 'orange') : 'gold') : currentTheme.color
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
                className="span-three a"
                style={{
                    color: currentTheme.color,
                    fontSize: fontSize + 'px'
                }}
            >{hot}</span>
        </a>
    )
}
