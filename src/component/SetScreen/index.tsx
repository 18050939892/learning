import { useState } from 'react'
import './index.less'
import { SvgList } from './svg.tsx'

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
    
    
    // todo 这些逻辑都一样，直接挂在具体位置上，不要声明后再引用，函数可以直接内嵌上去
    const fzOnmouseDown = (event) => {
        if (event.target.value == '-') {
            setFontObj(FontObj - 1)
        } else {
            setFontObj(FontObj + 1)
        }
    }
    
    // todo 这些逻辑都一样，直接挂在具体位置上，不要声明后再引用，函数可以直接内嵌上去
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
            // todo react 不需要这种写法，大部分逻辑可以直接写在 主函数里，然后直接计算出来。80% 情况都不用 setState
            // 这里整段干掉，然后写在主函数里，直接计算
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
    
    const LiOne=[{
        htmlFor:"zhuti",
        title:"主题切换",
        onMethod:zjOnmouseDown,
        value:theme,
        data:"<",
        dataTwo:">"
    },
    {
        htmlFor:'ziti',
        title:"字体大小",
        onMethod:fzOnmouseDown,
            value:FontObj,
        data:"-",
        dataTwo:"+"
    }]
    const LiOneList=LiOne.map((item,index)=>
        <li>
            <label htmlFor={item.htmlFor}>{item.title}</label>
            <div className="number-box">
                <input
                    type="button" className="on-number" value={item.data} data-v={item.data} onMouseDown={item.onMethod}
                />
                <input type="text" value={item.value} />
                <input
                    type="button" className="on-number" value={item.dataTwo} data-v={item.dataTwo} onMouseDown={item.onMethod}
                />
            </div>
        </li>
    )
    const LiTwo=[{
        htmlFor:"toumo",
        title:"偷摸模式",
    },
    {
        htmlFor:'yincang',
        title:"超出隐藏",
    },
        {
        htmlFor:'logo',
        title:"LOGO显示",
    },{
        htmlFor:'first',
        title:"首页分类",
    },
    ]
    
    const LiTwoList=LiTwo.map((item,index)=>
        <li>
            <label htmlFor={item.htmlFor}>{item.title}</label>
            {
                index!=2? <div className="check" name={item.htmlFor} onClick={checkOnclock}>
                    <a href="#" className="true left">开启</a>
                    <a href="#" className="empty start"></a>
                    <a href="#" className="close between">关闭</a>
            </div>:<div className="check" name={item.htmlFor}  id={item.htmlFor} onClick={checkOnclock}>
                    <a href="#" className="true start">开启</a>
                    <a href="#" className="empty between"></a>
                    <a href="#" className="close right">关闭</a>
                </div>}
        </li>
    )
    
    
    return (
        <div
            className="setscreen " id="set"
            style={{display: SetObj.display, backgroundColor: StyleObj.backgroundColor, color: StyleObj.color}}>
            <div className="settop">
                <span>{SvgList[0]}设置</span>
                {StyleObj.svg ? StyleObj.svg : <svg
                    t="1741179270154" className="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2629" width="200" height="200" onClick={handleOnclick}
                >
                    <path d="M0 0h1024v1024H0z" fill="#ffffff" fill-opacity="0" p-id="2630"></path>
                    {SvgList[1]}</svg>
                }
            </div>
            <div className="contentOne">
                <ul>
                    {/* todo 这种一次性的逻辑，全部直接铺在 HTML 里面，不要再弄成变量了 */}
                    {LiOneList}
                    {LiTwoList}
                    {/* --------------------------------------------------------- */}
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
