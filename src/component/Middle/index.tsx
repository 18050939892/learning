import useWindowSize from '../../hooks/UseWindowSize.ts'
import itemsMethod from './icons.tsx'
import { useCallback, useEffect, useRef, useState } from 'react'
import './index.less'
import {
    CheckWork,
    FirstShow,
    FontSize,
    OverHidden,
    SetScrStyle,
    Style,
    UnWorkList,
    WorkList
} from '../../jotai/Store.ts'
import { useAtom } from 'jotai'
import { SvgList } from './svg.tsx'

function index() {
    // 页面自适应
    const mainRef = useRef<HTMLElement>(null)
    const middleRef = useRef<HTMLDivElement>(null)
    const asideRef = useRef<HTMLElement>(null)
    const size = useWindowSize()
    useEffect(() => {
        if (middleRef.current && asideRef.current && mainRef.current) {
            const middleWidth = parseFloat(getComputedStyle(middleRef.current).width)
            const asideWidth = parseFloat(getComputedStyle(asideRef.current).width)
            mainRef.current.style.width = `${middleWidth - asideWidth}px`
        }
    }, [size])

    // todo 这里全优化一下， 如果 set 没用到，不用写了
    // 零散的原子实例
    const [firstShow] = useAtom(FirstShow)
    const [overHidden, setOverObj] = useAtom(OverHidden)
    const [checkWork, setCheckObj] = useAtom(CheckWork)
    const [fontSize, setFontObj] = useAtom(FontSize)
    const [style, setStyleObj] = useAtom(Style)
    const [workList, setWorkObj] = useAtom(WorkList)
    const [unWorkList, setUnObj] = useAtom(UnWorkList)
    const [SetObj, setSetScrStyle] = useAtom(SetScrStyle)

    // 显示设置界面
    const handleOnclick = (event) => {
        setSetScrStyle({
            display: 'block',
            height: document.documentElement.scrollHeight + 'px'
        })
        event.preventDefault()
    }

    // 刷新功能
    const NewsLists = []
    const handleUpdate = () => {
        // 模拟从接口里的数据
        const news = [
            {
                id: 1,
                title: '京东的环境二的发表今晚肯定非常不健康无纺布尽快v发v为日本海军发生口角',
                number: '385万'
            },
            {
                id: 2,
                title: '京东',
                number: '385万'
            },
        ]
        const NewsContent = []
        NewsContent[0] = news

        for (let i = 0; i < NewsContent.length; i++) {
            NewsLists[i] = NewsContent[i].map(NewValue =>
                <li>
                    <span
                        className="spanone"
                        style={{
                            color: style.color,
                            fontSize: fontSize + 'px'
                        }}
                    >{NewValue.id}</span>
                    <span
                        className="spantwo"
                        style={{
                            color: style.color,
                            fontSize: fontSize + 'px',
                            height: overHidden.height,
                            overflow: overHidden.overflow,
                            textOverflow: overHidden.textOverflow,
                            whiteSpace: overHidden.whiteSpace
                        }}
                    >{NewValue.title}</span>
                    <span
                        className="spanthree"
                        style={{
                            color: style.color,
                            fontSize: fontSize + 'px'
                        }}
                    >{NewValue.number}</span>
                </li>
            )
        }
    }
    handleUpdate()

    // 重复代码循环遍历化
    const items = itemsMethod()
    const itemsRef = []
    for (let i = 0; i < items.length; i++) {
        itemsRef[i] = useRef<HTMLDivElement>(null)
    }
    const ItemsHtml = items.map((item, index) =>
        <div className="item itemmain" style={{backgroundColor: style.backgroundColor}} ref={itemsRef[index]}>
            <a href="#" className="title">

                {item.svg}
                <h4>{item.title}</h4>&nbsp;
                <h6>{item.nowtime}</h6>
            </a>
            {item.svg2}
            <ul>
                {NewsLists[index]}
            </ul>
        </div>
    )

    // 侧边栏随滚动变化位置
    const [ScrollTop, setScrolltop] = useState(85)
    const handleScroll = useCallback(
        () => {
            if (document.documentElement.scrollTop >= 100) {
                setScrolltop(30)
            } else {
                setScrolltop(85)
            }
        }, [ScrollTop]
    )
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [document.documentElement.scrollTop])

    //首页分类功能
    const FirstTitle = ['购物平台', '视频平台', '新闻资讯', '程序员聚集地', 'IT科技', '热门社区']
    const firstarr = []
    useEffect(() => {
        if (firstShow) {
            FirstTitle.map((item, index) => {
                firstarr[index] = document.createElement('div')
                firstarr[index].className = 'item additem'
                firstarr[index].textContent = item
                firstarr[index].style.cssText = 'padding-top:10px;height:15px; width:90.5%; border-radius:5px 5px;color:rgb(176, 179, 181);'
                mainRef.current.prepend(firstarr[index])
            })
            // todo 这里的写法也是错的，重复的代码太多了，优化成 循环的形式，不会写就发给 AI，让他发给你正确答案
            firstarr[5].after(mainRef.current.querySelectorAll('.itemmain')[4])
            firstarr[5].after(mainRef.current.querySelectorAll('.itemmain')[3])
            firstarr[5].after(mainRef.current.querySelectorAll('.itemmain')[3])
            firstarr[5].after(mainRef.current.querySelectorAll('.itemmain')[3])
            firstarr[4].after(mainRef.current.querySelectorAll('.itemmain')[8])
            firstarr[4].after(mainRef.current.querySelectorAll('.itemmain')[8])
            firstarr[4].after(mainRef.current.querySelectorAll('.itemmain')[8])
            firstarr[3].after(mainRef.current.querySelectorAll('.itemmain')[13])
            firstarr[3].after(mainRef.current.querySelectorAll('.itemmain')[11])
            firstarr[3].after(mainRef.current.querySelectorAll('.itemmain')[11])
            firstarr[2].after(mainRef.current.querySelectorAll('.itemmain')[12])
            firstarr[2].after(mainRef.current.querySelectorAll('.itemmain')[11])
            firstarr[1].after(mainRef.current.querySelectorAll('.itemmain')[12])
            firstarr[0].after(mainRef.current.querySelectorAll('.itemmain')[13])
        } else {
            // todo 这里的写法也是错的，重复的代码太多了，优化成 循环的形式，不会写就发给 AI，让他发给你正确答案
            if (middleRef.current.querySelectorAll('.additem')[0]) {
                middleRef.current.querySelectorAll('.additem')[0].before(mainRef.current.querySelectorAll('.itemmain')[0])
                middleRef.current.querySelectorAll('.additem')[0].before(mainRef.current.querySelectorAll('.itemmain')[1])
                middleRef.current.querySelectorAll('.additem')[0].before(mainRef.current.querySelectorAll('.itemmain')[2])
                middleRef.current.querySelectorAll('.additem')[0].before(mainRef.current.querySelectorAll('.itemmain')[10])
                middleRef.current.querySelectorAll('.additem')[0].before(mainRef.current.querySelectorAll('.itemmain')[4])
                middleRef.current.querySelectorAll('.additem')[0].before(mainRef.current.querySelectorAll('.itemmain')[12])
                middleRef.current.querySelectorAll('.additem')[0].before(mainRef.current.querySelectorAll('.itemmain')[6])
                middleRef.current.querySelectorAll('.additem')[0].before(mainRef.current.querySelectorAll('.itemmain')[7])
                middleRef.current.querySelectorAll('.additem')[0].before(mainRef.current.querySelectorAll('.itemmain')[8])
                middleRef.current.querySelectorAll('.additem')[0].before(mainRef.current.querySelectorAll('.itemmain')[9])
                middleRef.current.querySelectorAll('.additem')[0].before(mainRef.current.querySelectorAll('.itemmain')[10])
                middleRef.current.querySelectorAll('.additem')[0].before(mainRef.current.querySelectorAll('.itemmain')[12])
                middleRef.current.querySelectorAll('.additem')[0].before(mainRef.current.querySelectorAll('.itemmain')[13])
                middleRef.current.querySelectorAll('.additem')[0].before(mainRef.current.querySelectorAll('.itemmain')[13])
                mainRef.current.querySelectorAll('.additem').forEach(el => el.remove())
            }
        }
    }, [firstShow])
    return (
        <div ref={middleRef} id="middle">
            <main ref={mainRef}>
                {ItemsHtml}
            </main>
            <aside ref={asideRef} style={{top: ScrollTop + 'px'}}>
                <div id="top" style={{backgroundColor: style.backgroundColor}}>
                    <div id="topImg">
                        <span>{checkWork ? unWorkList[0] : workList[0]}</span>
                    </div>
                    <div
                        id="toptextone"
                        style={{
                            color: style.color,
                            fontSize: fontSize + 'px'
                        }}
                    >
                        登录后可使用自定义订阅功能
                    </div>
                    <div
                        id="toptexttwo"
                        style={{
                            color: style.color,
                            fontSize: fontSize + 'px'
                        }}
                    >
                        实时<span>{checkWork ? unWorkList[1] : workList[1]}</span>人数: &nbsp;
                        <span>{checkWork ? unWorkList[2] : workList[2]}</span>
                    </div>
                    <div id="topsvg">
                        <a
                            title="设置"
                            className="topIcon set"
                            href=""
                            onClick={handleOnclick}
                        >
                            {SvgList[0]}
                        </a>
                        <a
                            title="音乐"
                            className="topIcon"
                            href="https://peal.cc/player"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {SvgList[1]}
                        </a>
                        <a className="topIcon" href="">
                            {SvgList[2]}
                        </a>
                        <div id="weixin">
                            <img src="https://momoyu.cc/assets/qq-EN_yH9uA.png" alt="" />
                            <div>群号：607942298
                                <span>{checkWork ? unWorkList[3] : workList[3]}</span>
                                <div className="three"></div>
                            </div>
                        </div>
                        <a
                            title="留言反馈"
                            className="topIcon"
                            href="https://support.qq.com/products/313868?"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {SvgList[3]}
                        </a>
                    </div>
                </div>
                <div id="buttom" className="buttomcls">
                    <a
                        href="#"
                        className="showrp"

                        style={{
                            overflow: 'hidden',
                            fontSize: fontSize + 'px'
                        }}
                    >🧧 领取一个外卖红包吧，每日可领取~</a>
                    <div
                        id="redpackage"
                    >
                        <img src="https://momoyu.cc/assets/mthb-CdT7CTbd.jpg" alt="" />
                        <div className="bb"></div>
                    </div>

                    <p
                        style={{
                            overflow: 'hidden',
                            fontSize: fontSize + 'px'
                        }}
                    >📣 <span>{checkWork ? unWorkList[4] : workList[4]}</span>提醒：今天是3月4日，周二的傍晚<br />
                        古人云：‘为天地立心，为生民立命。’我却说：‘为<span>{checkWork ? unWorkList[5] : workList[5]}</span>，为<span>{checkWork ? unWorkList[6] : workList[6]}</span>。’
                    </p><br />
                    <p style={{
                        overflow: 'hidden',
                        fontSize: fontSize + 'px'
                    }}
                    >
                        离周末还有4天<br />
                        离清明节还有32天<br />
                        离劳动节还有58天<br />
                        离端午节还有88天
                    </p><br />

                    <a
                        href="https://peal.cc/blog/01JKSGGB5Z2GABN0ATJ01PSEB7"
                        target="_blank"
                        style={{
                            overflow: 'hidden',
                            fontSize: fontSize + 'px'
                        }}
                        rel="noreferrer"
                    >《致各位<span>{checkWork ? unWorkList[7] : workList[7]}</span>的一封信》</a>
                    <a
                        href="https://peal.cc/blog/01JKSGGB5ZCZGQXVD0S7DGDK8F"
                        id="lasta"
                        target="_blank"
                        style={{
                            overflow: 'hidden',
                            fontSize: fontSize + 'px'
                        }}
                        rel="noreferrer"
                    >《赞助名单公示》</a>
                </div>
            </aside>
        </div>
    )
}

export default index
