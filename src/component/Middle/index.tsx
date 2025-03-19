import useWindowSize from '../../hooks/useWindowSize.ts'
import { Icons } from './icons.tsx'
import {MySvg} from './mysvg.tsx'
import { useCallback, useEffect, useRef, useState } from 'react'
import './index.less'
import './first.css'
import {
    CheckWork,
    FirstShow,
    FontSize,
    OverHidden,
    SetScrShow,
    StyleValue,
    UnWorkList,
    WorkList
} from '../../jotai/store.ts'
import { overHiddenClass, useStoreObject } from '../../hooks/StoreObject.ts'
import { useAtom } from 'jotai'
import { SvgList } from './svg.tsx'

export function Middle() {
    // 页面自适应
    const mainRef = useRef<HTMLElement>(null)
    const middleRef = useRef<HTMLDivElement>(null)
    const asideRef = useRef<HTMLElement>(null)
    const size = useWindowSize()
    // 零散的原子实例
    const [firstShow] = useAtom(FirstShow)
    const [overHidden] = useAtom(OverHidden)
    const [checkWork] = useAtom(CheckWork)
    const [fontSize] = useAtom(FontSize)
    const [styleValue] = useAtom(StyleValue)
    const [workList] = useAtom(WorkList)
    const [unWorkList] = useAtom(UnWorkList)
    const [, setSetScrShow] = useAtom(SetScrShow)
    const style = useStoreObject()
    // todo useEffect 应该放在 useState useRef useAtom 的后面，保持整齐。 他一般是放在最后的，不要中间插一个 useEffect
    useEffect(() => {
        if (middleRef.current && asideRef.current && mainRef.current) {
            const middleWidth = parseFloat(getComputedStyle(middleRef.current).width)
            const asideWidth = parseFloat(getComputedStyle(asideRef.current).width)
            mainRef.current.style.width = `${middleWidth - asideWidth}px`
        }
    }, [size])
    // 刷新功能
    // todo 大部分情况下，不要声明一个空数组，然后再往里面加东西。
    // todo 学习一下 数据不可变 这个思想
    // todo 学习代码思想： 纯函数、不可变性、原子性
    // const NewsLists = []
    const handleUpdate = () => {
        // 模拟从接口里的数据
        const NewsContent = [[
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
        ]]
        return NewsContent.map((item, index) => {
            return NewsContent[index].map(NewValue =>
                // todo css className 的命名规范是 span-one，中划线连接
                <li>
                    <span
                        className="span-one"
                        style={{
                            color: style[styleValue].color,
                            fontSize: fontSize + 'px'
                        }}
                    >{NewValue.id}</span>
                    <span
                        className="span-two"
                        style={{
                            color: style[styleValue].color,
                            fontSize: fontSize + 'px',
                            height: overHiddenClass[overHidden].height,
                            overflow: overHiddenClass[overHidden].overflow,
                            textOverflow: overHiddenClass[overHidden].textOverflow,
                            whiteSpace: overHiddenClass[overHidden].whiteSpace
                        }}
                    >{NewValue.title}</span>
                    <span
                        className="span-three"
                        style={{
                            color: style[styleValue].color,
                            fontSize: fontSize + 'px'
                        }}
                    >{NewValue.number}</span>
                </li>
            )
        })
    }
    // 这个不能设置成useState，不然隐藏会失效，因为它的修改需要使用到set，而没法直接改
    let NewsLists = handleUpdate()

    // 重复代码循环遍历化
    // todo 尽量不要使用 for循环，使用 map 代替
    // todo 大部分情况下，不要声明一个空数组，然后再往里面加东西。
    // 而是： 声明的时候，就直接把东西全部铺好。  不要手动赋值
    const items = Icons
    const itemsRef = items.map((item, i) => {
        return useRef<HTMLDivElement>(null)
    })
    const ItemsHtml = items.map((item, index) =>
        <div
            className={`item itemmain content content-${index}`}
            style={{backgroundColor: style[styleValue].backgroundColor}}
            ref={itemsRef[index]}
        >
            <a href="#" className="title">
                <MySvg>
                    {item.svg}
                </MySvg>
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
    // todo scrolltop -> scrollTop
    const [ScrollTop, setScrollTop] = useState(85)
    const handleScroll = useCallback(
        () => {
            // todo 这里的表达式可以优化成 setScrolltop(document.documentElement.scrollTop >= 100 ? 30 : 85)
            // 后续所有这种类似逻辑，都要记得
            setScrollTop(document.documentElement.scrollTop >= 100 ? 30 : 85)
        }, [ScrollTop]
    )
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [document.documentElement.scrollTop])

    //首页分类功能
    // todo 这里的代码问题很大，思考一下能不能用 CSS 直接替换掉
    const FirstTitle = ['热门社区', 'IT科技', '程序员聚集地', '新闻资讯', '视频平台', '购物平台']
    const title = FirstTitle.map((item, index) =>
        <div
            className={`item additem title-${index}`}
            style={{
                paddingTop: '10px',
                height: '15px',
                width: '90.5%',
                borderRadius: '5px 5px',
                color: 'rgb(176, 179, 181)',
                display: firstShow ? 'block' : 'none' /* 默认隐藏所有元素 */
            }}
        >
            {item}
        </div>
    )
    return (
        <div ref={middleRef} id="middle">
            <main ref={mainRef} className={`container ${firstShow ? 'layout-first' : ''}`}>
                {title}
                {ItemsHtml}
            </main>
            <aside ref={asideRef} style={{top: ScrollTop + 'px'}}>
                <div id="top" style={{backgroundColor: style[styleValue].backgroundColor}}>
                    <div id="topImg">
                        <span>{checkWork ? unWorkList[0] : workList[0]}</span>
                    </div>
                    <div
                        id="toptextone"
                        style={{
                            color: style[styleValue].color,
                            fontSize: fontSize + 'px'
                        }}
                    >
                        登录后可使用自定义订阅功能
                    </div>
                    <div
                        id="toptexttwo"
                        style={{
                            color: style[styleValue].color,
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
                            onClick={(event) => {
                                setSetScrShow('show')
                                event.preventDefault()
                            }}
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
                    <p
                        style={{
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
