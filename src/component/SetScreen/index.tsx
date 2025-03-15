import { useState } from 'react'
import './SetScreen.less'

type Theme = '暗夜' | '护眼' | '极客';
import { useAtom } from 'jotai'
import { FirstShow, LogoShow, OverHidden, CheckWork, FontSize, Style, SetScrStyle } from '../../jotai/Store.ts'

function index() {
    const [FirstObj, setFirstObj] = useAtom(FirstShow)
    const [LogoObj, setLogoObj] = useAtom(LogoShow)
    const [OverObj, setOverObj] = useAtom(OverHidden)
    const [CheckObj, setCheckObj] = useAtom(CheckWork)
    const [FontObj, setFontObj] = useAtom(FontSize)
    const [StyleObj, setStyleObj] = useAtom(Style)
    const [SetObj, setSetObj] = useAtom(SetScrStyle)
    
    
    
    const handleOnclick = (event) => {
        setSetObj({display: 'none', height: '0px'})
        event.preventDefault()
    }
    
    const [inputValue, setInputValue] = useState<number>(0)
    const [theme, setTheme] = useState<Theme>('暗夜')
    
    
    const fzOnmouseDown = (event) => {
        if (event.target.value == '-') {
            setFontObj(FontObj - 1)
        } else {
            setFontObj(FontObj + 1)
        }
    }
    const zjOnmouseDown = (event) => {
        if (event.target.value == '<') {
            let newTheme: Theme
            switch (theme) {
                case '暗夜':
                    newTheme = '护眼'
                    setStyleObj({
                        backgroundColor: '#333e43',
                        color: 'rgb(176, 179, 181)',
                        svg: <svg
                            t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"
                            onClick={handleOnclick}
                        >
                            <path
                                d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z"
                                p-id="4250" fill="#ffffff"
                            ></path>
                        </svg>
                    })
                    break
                case '护眼':
                    newTheme = '极客'
                    setStyleObj({
                        backgroundColor: 'white',
                        color: 'black',
                        svg: <svg
                            t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"
                            onClick={handleOnclick}
                        >
                            <path
                                d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z"
                                p-id="4250"
                            ></path>
                        </svg>
                    })
                    break
                default:
                    newTheme = '暗夜'
                    setStyleObj({
                        backgroundColor: '#1f2025',
                        color: 'rgb(176, 179, 181)',
                        svg: <svg
                            t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"
                            onClick={handleOnclick}
                        >
                            <path
                                d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z"
                                p-id="4250" fill="#ffffff"
                            ></path>
                        </svg>
                    })
            }
            setTheme(newTheme)
        } else {
            let newTheme: Theme
            switch (theme) {
                case '暗夜':
                    newTheme = '极客'
                    setStyleObj({
                        backgroundColor: 'white',
                        color: 'black',
                        svg: <svg
                            t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"
                            onClick={handleOnclick}
                        >
                            <path
                                d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z"
                                p-id="4250"
                            ></path>
                        </svg>
                    })
                    break
                case '极客':
                    newTheme = '护眼'
                    setStyleObj({
                        backgroundColor: '#333e43',
                        color: 'rgb(176, 179, 181)',
                        svg: <svg
                            t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"
                            onClick={handleOnclick}
                        >
                            <path
                                d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z"
                                p-id="4250" fill="#ffffff"
                            ></path>
                        </svg>
                    })
                    break
                default:
                    newTheme = '暗夜'
                    setStyleObj({
                        backgroundColor: '#1f2025',
                        color: 'rgb(176, 179, 181)',
                        svg: <svg
                            t="1741273897782" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"
                            onClick={handleOnclick}
                        >
                            <path
                                d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z"
                                p-id="4250" fill="#ffffff"
                            ></path>
                        </svg>
                    })
            }
            setTheme(newTheme)
        }
        console.log(theme)
    }
    
    // todo 这些逻辑应该都可以只用 CSS 实现，这一大段都可以干掉
    const checkOnclock = (event) => {
        
        if (event.currentTarget.querySelector('a').className.split(' ')[1] == 'left') {
            event.currentTarget.querySelectorAll('a')[0].className = 'true start'
            event.currentTarget.querySelectorAll('a')[1].className = 'empty between'
            event.currentTarget.querySelectorAll('a')[2].className = 'close right'
        } else {
            event.currentTarget.querySelectorAll('a')[0].className = 'true left'
            event.currentTarget.querySelectorAll('a')[1].className = 'empty start'
            event.currentTarget.querySelectorAll('a')[2].className = 'close between'
        }
        switch (event.currentTarget.getAttribute('name')) {
            case 'toumo':
                if (CheckObj) {
                    setCheckObj(false)
                } else {
                    setCheckObj(true)
                }
                
                break
            case 'yincang':
                if (OverObj.height == '20px') {
                    setOverObj({
                        height: '',
                        overflow: '',
                        textOverflow: '',
                        whiteSpace: ''
                    })
                } else {
                    setOverObj({
                        height: '20px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    })
                }
                
                
                break
            case 'logo':
                if (LogoObj) {
                    setLogoObj(false)
                } else {
                    setLogoObj(true)
                }
                break
            case 'first':
                if (FirstObj) {
                    setFirstObj(false)
                } else {
                    setFirstObj(true)
                }
                break
            default:
                break
        }
        
        
    }
    
    
    return (
        <div
            className="setscreen " id="set"
            style={{display: SetObj.display, backgroundColor: StyleObj.backgroundColor, color: StyleObj.color}}
        >
            <div className="settop">
                <span><svg
                    t="1741252551468" className="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2996" width="200" height="200"
                >
                        <path
                            d="M925.6 443h-41.4c-19 0-39-14.8-44.7-32.9l-23.8-57.7c-8.9-16.7-5.3-41.3 8.1-54.7l29.3-29.3c13.4-13.4 13.4-35.4 0-48.8l-48.8-48.7c-13.4-13.4-35.3-13.4-48.7 0l-29.3 29.3c-13.4 13.4-38.1 17.1-54.8 8.1l-57.6-23.7c-18.1-5.6-33-25.7-33-44.7V98.5c0-18.9-15.5-34.5-34.5-34.5h-68.9c-19 0-34.5 15.5-34.5 34.5v41.4c0 18.9-14.8 39.1-32.9 44.7l-57.7 23.7c-16.7 9-41.3 5.4-54.7-8.1l-29.4-29.3c-13.4-13.4-35.3-13.4-48.7 0l-48.7 48.7c-13.5 13.4-13.5 35.3 0 48.7l29.3 29.3c13.4 13.4 17.1 38.1 8.1 54.7l-23.7 57.8c-5.7 18.1-25.7 32.9-44.7 32.9H98.5c-19 0-34.5 15.5-34.5 34.5v68.9c0 19 15.5 34.5 34.5 34.5h41.4c19 0.1 39 14.9 44.6 33l23.8 57.7c8.9 16.7 5.3 41.4-8.1 54.8l-29.4 29.3c-13.4 13.4-13.4 35.3 0 48.8l48.8 48.7c13.4 13.4 35.3 13.4 48.7 0l29.3-29.3c13.3-13.4 38-17 54.7-8l57.8 23.8c18.1 5.6 32.9 25.7 32.9 44.6v41.3c0 18.9 15.5 34.5 34.5 34.5h68.9c18.9 0 34.5-15.5 34.5-34.5v-41.3c0-19 14.9-39 33-44.6l57.7-23.8c16.7-9 41.3-5.4 54.8 8l29.2 29.3c13.4 13.4 35.4 13.4 48.7 0l48.8-48.7c13.4-13.5 13.4-35.4 0-48.8l-29.3-29.3c-13.4-13.4-17-38.1-8.1-54.8l23.8-57.7c5.6-18.1 25.8-32.9 44.7-32.9h41.4c18.9 0 34.4-15.5 34.4-34.5v-69c0-18.9-15.5-34.5-34.4-34.5z m-241.2 68.9c0 95.2-77.1 172.3-172.3 172.3-95.2 0-172.3-77.1-172.3-172.3 0-95.2 77.1-172.3 172.3-172.3 95.2 0 172.3 77.2 172.3 172.3z"
                            p-id="2997" fill="#bfbfbf"
                        ></path>
                    </svg>设置</span>
                {StyleObj.svg ? StyleObj.svg :
                    <svg
                        t="1741179270154" className="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2629" width="200" height="200" onClick={handleOnclick}
                    >
                        <path d="M0 0h1024v1024H0z" fill="#ffffff" fill-opacity="0" p-id="2630"></path>
                        <path
                            d="M240.448 168l2.346667 2.154667 289.92 289.941333 279.253333-279.253333a42.666667 42.666667 0 0 1 62.506667 58.026666l-2.133334 2.346667-279.296 279.210667 279.274667 279.253333a42.666667 42.666667 0 0 1-58.005333 62.528l-2.346667-2.176-279.253333-279.253333-289.92 289.962666a42.666667 42.666667 0 0 1-62.506667-58.005333l2.154667-2.346667 289.941333-289.962666-289.92-289.92a42.666667 42.666667 0 0 1 57.984-62.506667z"
                            fill="#ffffff" p-id="2631"
                        ></path>
                    </svg>
                }
            </div>
            <div className="contentOne">
                <ul>
                    <li>
                        <label htmlFor="zhuti">主题切换</label>
                        <div className="number-box">
                            <input
                                type="button" className="on-number" value="<" data-v="<" onMouseDown={zjOnmouseDown}
                            />
                            <input type="text" value={theme} />
                            <input
                                type="button" className="on-number" value=">" data-v=">" onMouseDown={zjOnmouseDown}
                            />
                        </div>
                    </li>
                    <li>
                        <label htmlFor="ziti">字体大小</label>
                        <div className="number-box">
                            <input
                                type="button" className="on-number" value="-" data-v="-1" onMouseDown={fzOnmouseDown}
                            />
                            <input type="text" value={FontObj} />
                            <input
                                type="button" className="on-number" value="+" data-v="1" onMouseDown={fzOnmouseDown}
                            />
                        </div>
                    </li>
                    <li>
                        <label htmlFor="toumo">偷摸模式</label>
                        <div className="check" name="toumo" onClick={checkOnclock}>
                            <a href="#" className="true left">开启</a>
                            <a href="#" className="empty start"></a>
                            <a href="#" className="close between">关闭</a>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="yincang">超出隐藏</label>
                        <div className="check" name="yincang" onClick={checkOnclock}>
                            <a href="#" className="true left">开启</a>
                            <a href="#" className="empty start"></a>
                            <a href="#" className="close between">关闭</a>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="logo">LOGO显示</label>
                        <div className="check" name="logo" id="logo" onClick={checkOnclock}>
                            <a href="#" className="true start">开启</a>
                            <a href="#" className="empty between"></a>
                            <a href="#" className="close right">关闭</a>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="first">首页分类</label>
                        <div className="check" name="first" onClick={checkOnclock}>
                            <a href="#" className="true left">开启</a>
                            <a href="#" className="empty start"></a>
                            <a href="#" className="close between">关闭</a>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="nowday">今日热门</label>
                        <input type="text" name="nowday" placeholder="略" id="nowday" />
                    </li>
                </ul>
            
            
            </div>
            <div className="contentTwo">略</div>
            <div className="setbuttom" onClick={handleOnclick}><a href="#">开摸!</a></div>
        </div>
    )
}

export default index
