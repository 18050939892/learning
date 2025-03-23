import { CurrentTheme } from '../../jotai/store.ts'
import {useAtom} from 'jotai'
import {MySvg} from '../Middle/mysvg.tsx'
import './index.less'

// todo 这个组件是多余的，抽得比较混乱。一般组件抽象，不要搞太多参数，如果参数很多，这个组件就不封装了
// 像 MySvg 那种比较适合，而且经常能用的，才封
// 另外的情况，就是根据界面分割，Header、Middle、Footer，这种要分出来。这个 Item 就不用封装了
export function Item(props) {
    const [currentTheme] = useAtom(CurrentTheme)
    console.log(props)
    return (
        <div
            className={`item content content-${props.index}`}
            style={{backgroundColor: currentTheme.backgroundColor}}
            ref={props.itemRef}
        >
            <a href="#" className="title">
                <MySvg>
                    {props.item.svg}
                </MySvg>
                <h4>{props.item.title}</h4>&nbsp;
                <h6>{props.item.nowtime}</h6>
            </a>
            {props.item.svg2}
            <ul>
                {props.NewsLists}
            </ul>
        </div>
    )
}
