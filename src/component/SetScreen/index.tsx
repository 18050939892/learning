import { useState } from 'react'
import './index.less'
import { SvgList } from './svg.tsx'
import itemsMethod from './icons.tsx'
type Theme = '暗夜' | '护眼' | '极客';
import { useAtom } from 'jotai'
import { FirstShow, LogoShow, OverHidden, CheckWork, FontSize, Style, SetScrStyle } from '../../jotai/Store.ts'

// todo React 组件名都是大驼峰，要记得
function index() {
    // 零散原子实例
    const [firstShow, setFirstShow] = useAtom(FirstShow)
    const [logoShow, setLogoShow] = useAtom(LogoShow)
    const [overHidden, setOverHidden] = useAtom(OverHidden)
    const [checkWork, setCheckWork] = useAtom(CheckWork)
    const [fontSize, setFontSize] = useAtom(FontSize)
    const [style, setStyle] = useAtom(Style)
    const [setScrStyle, setSetScrStyle] = useAtom(SetScrStyle)

    // 设置界面关闭
    const handleOnclick = (event) => {
        setSetScrStyle({display: 'none', height: '0px'})
        event.preventDefault()
    }

    // 字体大小功能
    const fzOnmouseDown = (event) => {
        if (event.target.value == '-') {
            setFontSize(fontSize - 1)
        } else {
            setFontSize(fontSize + 1)
        }
    }

    // 主题切换功能
    const [theme, setTheme] = useState<Theme>('暗夜')
    const items=itemsMethod()
    const zjOnmouseDown = (event) => {
        if (event.target.value == '<') {
            let newTheme: Theme
            switch (theme) {
                case '暗夜':
                    newTheme = '护眼'
                    setStyle({
                        backgroundColor: '#333e43',
                        color: 'rgb(176, 179, 181)',
                        svg:items[0]
                    })
                    break
                case '护眼':
                    newTheme = '极客'
                    setStyle({
                        backgroundColor: 'white',
                        color: 'black',
                        svg:items[1]
                    })
                    break
                default:
                    newTheme = '暗夜'
                    setStyle({
                        backgroundColor: '#1f2025',
                        color: 'rgb(176, 179, 181)',
                        svg:items[0]
                    })
            }
            setTheme(newTheme)
        } else {
            let newTheme: Theme
            switch (theme) {
                case '暗夜':
                    newTheme = '极客'
                   setStyle({
                        backgroundColor: 'white',
                        color: 'black',
                        svg:items[1]
                    })
                    break
                case '极客':
                    newTheme = '护眼'
                    setStyle({
                        backgroundColor: '#333e43',
                        color: 'rgb(176, 179, 181)',
                        svg: items[0]
                    })
                    break
                default:
                    newTheme = '暗夜'
                    setStyle({
                        backgroundColor: '#1f2025',
                        color: 'rgb(176, 179, 181)',
                        svg: items[0]
                    })
            }
            setTheme(newTheme)
        }
        console.log(theme)
    }

    // todo 这些逻辑应该都可以只用 CSS 实现，这一大段都可以干掉
    // 其余各类各类功能+按键滑动效果
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
                if (checkWork) {
                    setCheckWork(false)
                } else {
                   setCheckWork(true)
                }

                break
            case 'yincang':
                if (overHidden.height == '20px') {
                    setOverHidden({
                        height: '',
                        overflow: '',
                        textOverflow: '',
                        whiteSpace: ''
                    })
                } else {
                    setOverHidden({
                        height: '20px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    })
                }


                break
            case 'logo':
                if (logoShow) {
                    setLogoShow(false)
                } else {
                    setLogoShow(true)
                }
                break
            case 'first':
                if (firstShow) {
                    setFirstShow(false)
                } else {
                    setFirstShow(true)
                }
                break
            default:
                break
        }


    }

    // 重复Html循环遍历化
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
            value:fontSize,
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
            style={{display: setScrStyle.display, backgroundColor: style.backgroundColor, color: style.color}}>
            <div className="settop">
                <span>{SvgList[0]}设置</span>
                {style.svg ? style.svg : <svg
                    t="1741179270154" className="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2629" width="200" height="200" onClick={handleOnclick}
                >
                    <path d="M0 0h1024v1024H0z" fill="#ffffff" fill-opacity="0" p-id="2630"></path>
                    {SvgList[1]}</svg>
                }
            </div>
            <div className="contentOne">
                <ul>
                    {LiOneList}
                    {LiTwoList}
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
