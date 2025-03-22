import { useAtom } from 'jotai'
import {
    CheckWork,
    CurrentTheme,
    FirstShow,
    FontSize,
    LogoShow,
    OverHidden,
    SetScrShow,
    ThemeIndex,
    themeList
} from '../../jotai/store.ts'
import { useScreenStyle } from '../../hooks/StoreObject.ts'
import './index.less'

export function SetScreen() {
    // 零散原子实例
    const [, setFirstShow] = useAtom(FirstShow)
    const [, setLogoShow] = useAtom(LogoShow)
    const [, setOverHidden] = useAtom(OverHidden)
    const [, setCheckWork] = useAtom(CheckWork)
    const [fontSize, setFontSize] = useAtom(FontSize)
    const [themeIndex, setThemeIndex] = useAtom(ThemeIndex)
    const [currentTheme] = useAtom(CurrentTheme)
    const [setScrShow, setSetScrShow] = useAtom(SetScrShow)
    const setScrStyleItem = useScreenStyle()

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
        <>
            <div
                id="cover"
                style={{
                    display: setScrStyleItem[setScrShow].display,
                }}
            ></div>
            <div
                className="set-screen "
                id="set"
                style={{
                    display: setScrStyleItem[setScrShow].display,
                    backgroundColor: currentTheme.backgroundColor,
                    color: currentTheme.color
                }}
            >
                <div className="set-top">
                    <span>
                        <svg
                            className="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="2996"
                            width="200"
                            height="200"
                        >
                            <path
                                d="M925.6 443h-41.4c-19 0-39-14.8-44.7-32.9l-23.8-57.7c-8.9-16.7-5.3-41.3 8.1-54.7l29.3-29.3c13.4-13.4 13.4-35.4 0-48.8l-48.8-48.7c-13.4-13.4-35.3-13.4-48.7 0l-29.3 29.3c-13.4 13.4-38.1 17.1-54.8 8.1l-57.6-23.7c-18.1-5.6-33-25.7-33-44.7V98.5c0-18.9-15.5-34.5-34.5-34.5h-68.9c-19 0-34.5 15.5-34.5 34.5v41.4c0 18.9-14.8 39.1-32.9 44.7l-57.7 23.7c-16.7 9-41.3 5.4-54.7-8.1l-29.4-29.3c-13.4-13.4-35.3-13.4-48.7 0l-48.7 48.7c-13.5 13.4-13.5 35.3 0 48.7l29.3 29.3c13.4 13.4 17.1 38.1 8.1 54.7l-23.7 57.8c-5.7 18.1-25.7 32.9-44.7 32.9H98.5c-19 0-34.5 15.5-34.5 34.5v68.9c0 19 15.5 34.5 34.5 34.5h41.4c19 0.1 39 14.9 44.6 33l23.8 57.7c8.9 16.7 5.3 41.4-8.1 54.8l-29.4 29.3c-13.4 13.4-13.4 35.3 0 48.8l48.8 48.7c13.4 13.4 35.3 13.4 48.7 0l29.3-29.3c13.3-13.4 38-17 54.7-8l57.8 23.8c18.1 5.6 32.9 25.7 32.9 44.6v41.3c0 18.9 15.5 34.5 34.5 34.5h68.9c18.9 0 34.5-15.5 34.5-34.5v-41.3c0-19 14.9-39 33-44.6l57.7-23.8c16.7-9 41.3-5.4 54.8 8l29.2 29.3c13.4 13.4 35.4 13.4 48.7 0l48.8-48.7c13.4-13.5 13.4-35.4 0-48.8l-29.3-29.3c-13.4-13.4-17-38.1-8.1-54.8l23.8-57.7c5.6-18.1 25.8-32.9 44.7-32.9h41.4c18.9 0 34.4-15.5 34.4-34.5v-69c0-18.9-15.5-34.5-34.4-34.5z m-241.2 68.9c0 95.2-77.1 172.3-172.3 172.3-95.2 0-172.3-77.1-172.3-172.3 0-95.2 77.1-172.3 172.3-172.3 95.2 0 172.3 77.2 172.3 172.3z"
                                p-id="2997"
                                fill="#bfbfbf"
                            ></path>
                        </svg>
                        设置</span>
                    <svg
                        className="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2629"
                        width="200"
                        height="200"
                        style={{color: currentTheme.color}}
                        onClick={(event) => {
                            setSetScrShow('hide')
                            event.preventDefault()
                        }}
                    >
                        <path
                            d="M0 0h1024v1024H0z"
                            fill="currentColor"
                            fill-opacity="0"
                            p-id="2630"
                        ></path>
                        <path
                            d="M240.448 168l2.346667 2.154667 289.92 289.941333 279.253333-279.253333a42.666667 42.666667 0 0 1 62.506667 58.026666l-2.133334 2.346667-279.296 279.210667 279.274667 279.253333a42.666667 42.666667 0 0 1-58.005333 62.528l-2.346667-2.176-279.253333-279.253333-289.92 289.962666a42.666667 42.666667 0 0 1-62.506667-58.005333l2.154667-2.346667 289.941333-289.962666-289.92-289.92a42.666667 42.666667 0 0 1 57.984-62.506667z"
                            fill="currentColor"
                            p-id="2631"
                        ></path>
                    </svg>
                </div>
                <div className="content-one">
                    <ul>
                        <li>
                            <label htmlFor="zhuti">主题切换</label>
                            <div className="number-box">
                                <input
                                    type="button"
                                    className="on-number"
                                    value="<"
                                    data-v="<"
                                    onMouseDown={() => {
                                        setThemeIndex((themeIndex - 1 + themeList.length) % themeList.length)
                                    }}
                                />
                                <input type="text" value={currentTheme.name} />
                                <input
                                    type="button"
                                    className="on-number"
                                    value=">"
                                    data-v=">"
                                    onMouseDown={() => {
                                        setThemeIndex((themeIndex + 1) % themeList.length)
                                    }}
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
                                    onMouseDown={() => {
                                        setFontSize(fontSize - 1)
                                    }}
                                />
                                <input type="text" value={fontSize} />
                                <input
                                    type="button"
                                    className="on-number"
                                    value="+"
                                    data-v="+"
                                    onMouseDown={() => {
                                        setFontSize(fontSize + 1)
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
                                            const dom = document.getElementById(`toggle-${item.htmlFor}`) as any
                                            // 手动切换复选框状态，触发CSS效果
                                            dom.checked = !dom.checked
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
                                            const dom = document.getElementById(`toggle-${item.htmlFor}`) as any
                                            // 手动切换复选框状态，触发CSS效果
                                            dom.checked = !dom.checked
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
                <div className="content-two">略</div>
                <div
                    className="set-buttom"
                    onClick={(event) => {
                        setSetScrShow('hide')
                        event.preventDefault()
                    }}
                ><a href="#">开摸!</a></div>
            </div>
        </>
    )
}
