import { overHiddenClass } from '../../hooks/StoreObject.ts'
import { useAtom } from 'jotai/index'
import { CurrentTheme, FontSize, OverHidden } from '../../jotai/store.ts'
import './index.less'

// todo 这个组件的思路对了，命名又错了。 这不是一个列表， 是 NewsItem
export function NewsList(props) {
    const [overHidden] = useAtom(OverHidden)
    const [fontSize] = useAtom(FontSize)
    const [currentTheme] = useAtom(CurrentTheme)
    return (
        <li>
            <span
                className="span-one"
                style={{
                    color: currentTheme.color,
                    fontSize: fontSize + 'px'
                }}
            >{props.NewValue.id}</span>
            {/* todo 取值的时候，不要用很长的链条去取， props.xxx.yyy.zzz 这种代码，简化掉，最多只有一层
               const { NewValue } = props
               const { id, title, number } = NewValue

               这样，后续所有代码都记住
            */}
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
            >{props.NewValue.title}</span>
            <span
                className="span-three"
                style={{
                    color: currentTheme.color,
                    fontSize: fontSize + 'px'
                }}
            >{props.NewValue.number}</span>
        </li>
    )
}
