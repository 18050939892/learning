import { overHiddenClass } from '../../hooks/StoreObject.ts'
import { useAtom } from 'jotai/index'
import { CurrentTheme, FontSize, OverHidden } from '../../jotai/store.ts'
import './index.less'

export function NewsItem(props) {
    const [overHidden] = useAtom(OverHidden)
    const [fontSize] = useAtom(FontSize)
    const [currentTheme] = useAtom(CurrentTheme)
    const {NewValue} = props
    const {id, title, number} = NewValue
    return (
        <li>
            <span
                className="span-one"
                style={{
                    color: currentTheme.color,
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
            >{title}</span>
            <span
                className="span-three"
                style={{
                    color: currentTheme.color,
                    fontSize: fontSize + 'px'
                }}
            >{number}</span>
        </li>
    )
}
