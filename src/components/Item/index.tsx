import { CurrentTheme } from '../../jotai/store.ts'
import {useAtom} from 'jotai'
import {MySvg} from '../Middle/mysvg.tsx'
import './index.less'
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
