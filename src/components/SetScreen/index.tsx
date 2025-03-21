import { useState } from 'react'
import { SvgList } from './svg.tsx'
import { useAtom } from 'jotai'
import {
    CheckWork, FirstShow, FontSize, LogoShow, OverHidden, SetScrShow, StyleValue
} from '../../jotai/store.ts'
import { useScreenStyle, useStoreObject } from '../../hooks/StoreObject.ts'
import './index.less'
type Theme = '暗夜' | '护眼' | '极客';

export function SetScreen() {
    // 零散原子实例
    const [, setFirstShow] = useAtom(FirstShow)
    const [, setLogoShow] = useAtom(LogoShow)
    const [, setOverHidden] = useAtom(OverHidden)
    const [, setCheckWork] = useAtom(CheckWork)
    const [fontSize, setFontSize] = useAtom(FontSize)
    const [styleValue, setStyleValue] = useAtom(StyleValue)
    const [setScrShow, setSetScrShow] = useAtom(SetScrShow)
    const style = useStoreObject()
    const setScrStyleItem = useScreenStyle()
    // 主题切换功能
    const [theme, setTheme] = useState<Theme>('暗夜')
    const zjOnmouseDown = (event) => {
        const themeList = ['暗夜', '护眼', '极客']
        const themeListTwo = ['dark', 'eye', 'geek']
        const fsIndex = event.target.value == '<' ? -1 : 1
        const currentIndex = themeList.indexOf(theme)
        const nextIndex = (currentIndex + fsIndex + themeList.length) % themeList.length
        setStyleValue(themeListTwo[nextIndex])
        setTheme(themeList[nextIndex])
    }

    // 其余各类各类功能+按键滑动效果
    const checkOnclock = (event) => {
        const actionName = event.currentTarget.getAttribute('name')
        const toggleActions = {
            'toumo': () => setCheckWork(prevState => !prevState),
            'yincang': () => setOverHidden(prevState =>
                prevState === 'hide' ? 'show' : 'hide'
            ),
            'logo': () => setLogoShow(prevState => !prevState),
            'first': () => setFirstShow(prevState => !prevState)
        }
        // 如果存在对应的动作，则执行
        toggleActions[actionName]()
    }
    const LiTwo = [{
        htmlFor: 'toumo',
        title: '偷摸模式',
    },
    {
        htmlFor: 'yincang',
        title: '超出隐藏',
    },
    {
        htmlFor: 'logo',
        title: 'LOGO显示',
    }, {
        htmlFor: 'first',
        title: '首页分类',
    },
    ]
    return (
        <div
            className="setscreen "
            id="set"
            style={{
                display: setScrStyleItem[setScrShow].display,
                backgroundColor: style[styleValue].backgroundColor,
                color: style[styleValue].color
            }}
        >
            <div className="settop">
                <span>{SvgList[0]}设置</span>
                {style[styleValue].svg ? style[styleValue].svg : <svg
                    t="1741179270154"
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2629"
                    width="200"
                    height="200"
                    onClick={(event) => {
                        setSetScrShow('hide')
                        event.preventDefault()
                    }}
                >
                    <path
                        d="M0 0h1024v1024H0z"
                        fill="#ffffff"
                        fill-opacity="0"
                        p-id="2630"
                    ></path>
                    {SvgList[1]}</svg>
                }
            </div>
            <div className="contentOne">
                <ul>
                    <li>
                        <label htmlFor="zhuti">主题切换</label>
                        <div className="number-box">
                            <input
                                type="button"
                                className="on-number"
                                value="<"
                                data-v="<"
                                onMouseDown={zjOnmouseDown}
                            />
                            <input type="text" value={theme} />
                            <input
                                type="button"
                                className="on-number"
                                value=">"
                                data-v=">"
                                onMouseDown={zjOnmouseDown}
                            />
                        </div>
                    </li>
                    <li>
                        <label htmlFor="ziti">字体大小</label>
                        <div className="number-box">
                            <input
                                type="button"
                                className="on-number"
                                value="-"
                                data-v="-"
                                onMouseDown={(event) => {
                                    if (event.target.value == '-') {
                                        setFontSize(fontSize - 1)
                                    } else {
                                        setFontSize(fontSize + 1)
                                    }
                                }}
                            />
                            <input type="text" value={fontSize} />
                            <input
                                type="button"
                                className="on-number"
                                value="+"
                                data-v="+"
                                onMouseDown={(event) => {
                                    if (event.target.value == '-') {
                                        setFontSize(fontSize - 1)
                                    } else {
                                        setFontSize(fontSize + 1)
                                    }
                                }}
                            />
                        </div>
                    </li>
                    {LiTwo.map((item, index) =>
                        <li>
                            <label htmlFor={item.htmlFor}>{item.title}</label>
                            {/* 添加隐藏的复选框控制CSS状态 */}
                            <input
                                type="checkbox"
                                id={`toggle-${item.htmlFor}`}
                                className="toggle-checkbox"
                                defaultChecked={index === 2}
                                style={{
                                    position: 'absolute',
                                    opacity: 0
                                }}
                            />
                            {index != 2 ? (
                                <div
                                    className="check"
                                    name={item.htmlFor}
                                    onClick={(e) => {
                                        // 手动切换复选框状态，触发CSS效果
                                        document.getElementById(`toggle-${item.htmlFor}`).checked =
                                            !document.getElementById(`toggle-${item.htmlFor}`).checked
                                        // 执行原有的点击事件处理
                                        checkOnclock(e)
                                    }}
                                >
                                    <a href="#" className="true left">开启</a>
                                    <a href="#" className="empty start"></a>
                                    <a href="#" className="close between">关闭</a>
                                </div>
                            ) : (
                                <div
                                    className="check"
                                    name={item.htmlFor}
                                    id={item.htmlFor}
                                    onClick={(e) => {
                                        // 手动切换复选框状态，触发CSS效果
                                        document.getElementById(`toggle-${item.htmlFor}`).checked =
                                            !document.getElementById(`toggle-${item.htmlFor}`).checked
                                        // 执行原有的点击事件处理
                                        checkOnclock(e)
                                    }}
                                >
                                    <a href="#" className="true start">开启</a>
                                    <a href="#" className="empty between"></a>
                                    <a href="#" className="close right">关闭</a>
                                </div>
                            )}
                        </li>
                    )}
                    <li>
                        <label htmlFor="nowday">今日热门</label>
                        <input
                            type="text"
                            name="nowday"
                            placeholder="略"
                            id="nowday"
                        />
                    </li>
                </ul>

            </div>
            <div className="contentTwo">略</div>
            <div
                className="setbuttom"
                onClick={(event) => {
                    setSetScrShow('hide')
                    event.preventDefault()
                }}
            ><a href="#">开摸!</a></div>
        </div>
    )
}
