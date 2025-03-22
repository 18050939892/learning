import useWindowSize from '../../hooks/useWindowSize.ts'
import { Icons } from './icons.tsx'
import { MySvg } from './mysvg.tsx'
import { useEffect, useRef } from 'react'
import './index.less'
import './first.less'
import {
    CheckWork,
    CurrentTheme,
    FirstShow,
    FontSize,
    OverHidden,
    SetScrShow,
    UnWorkList,
    WorkList
} from '../../jotai/store.ts'
import { overHiddenClass } from '../../hooks/StoreObject.ts'
import { useAtom } from 'jotai'
import { SvgList } from './svg.tsx'

export function Middle() {
    // 页面自适应
    const mainRef = useRef<HTMLElement>(null)
    const middleRef = useRef<HTMLDivElement>(null)
    const asideRef = useRef<HTMLElement>(null)
    const size = useWindowSize()
    const [firstShow] = useAtom(FirstShow)
    const [overHidden] = useAtom(OverHidden)
    const [checkWork] = useAtom(CheckWork)
    const [fontSize] = useAtom(FontSize)
    const [workList] = useAtom(WorkList)
    const [unWorkList] = useAtom(UnWorkList)
    const [currentTheme] = useAtom(CurrentTheme)
    const [, setSetScrShow] = useAtom(SetScrShow)
    useEffect(() => {
        if (middleRef.current && asideRef.current && mainRef.current) {
            const middleWidth = parseFloat(getComputedStyle(middleRef.current).width)
            const asideWidth = parseFloat(getComputedStyle(asideRef.current).width)
            mainRef.current.style.width = `${middleWidth - asideWidth}px`
        }
    }, [size])
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
                <li>
                    <span
                        className="span-one"
                        style={{
                            color: currentTheme.color,
                            fontSize: fontSize + 'px'
                        }}
                    >{NewValue.id}</span>
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
                    >{NewValue.title}</span>
                    <span
                        className="span-three"
                        style={{
                            color: currentTheme.color,
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
    const items = Icons
    const itemsRef = items.map((item, i) => {
        return useRef<HTMLDivElement>(null)
    })

    const FirstTitle = ['热门社区', 'IT科技', '程序员聚集地', '新闻资讯', '视频平台', '购物平台']
    return (

        <div ref={middleRef} id="middle">
            <main ref={mainRef} className={`container ${firstShow ? 'layout-first' : ''}`}>
                {FirstTitle.map((item, index) =>
                    <div
                        className={`item title-${index}`}
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
                )}
                {items.map((item, index) =>
                    <div
                        className={`item content content-${index}`}
                        style={{backgroundColor: currentTheme.backgroundColor}}
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
                )}
            </main>
            <aside
                ref={asideRef}
                // style={{top: ScrollTop + 'px'}}
            >
                <div id="top" style={{backgroundColor: currentTheme.backgroundColor}}>
                    <div id="top-img">
                        <span>{checkWork ? unWorkList[0] : workList[0]}</span>
                    </div>
                    <div
                        id="top-text-one"
                        style={{
                            color: currentTheme.color,
                            fontSize: fontSize + 'px'
                        }}
                    >
                        登录后可使用自定义订阅功能
                    </div>
                    <div
                        id="top-text-two"
                        style={{
                            color: currentTheme.color,
                            fontSize: fontSize + 'px'
                        }}
                    >
                        实时<span>{checkWork ? unWorkList[1] : workList[1]}</span>人数: &nbsp;
                        <span>{checkWork ? unWorkList[2] : workList[2]}</span>
                    </div>
                    <div id="top-svg">
                        <a
                            title="设置"
                            className="top-icon set"
                            href=""
                            onClick={(event) => {
                                setSetScrShow('show')
                                event.preventDefault()
                            }}
                        >
                            {SvgList['设置']}
                        </a>
                        <a
                            title="音乐"
                            className="top-icon"
                            href="https://peal.cc/player"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {SvgList['音乐']}
                        </a>
                        <a className="top-icon" href="">
                            {SvgList['加微']}
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
                            className="top-icon"
                            href="https://support.qq.com/products/313868?"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {SvgList['反馈']}
                        </a>
                    </div>
                </div>
                <div id="buttom" className="buttom-cls">
                    <a
                        href="#"
                        className="show-rp"

                        style={{
                            overflow: 'hidden',
                            fontSize: fontSize + 'px'
                        }}
                    >🧧 领取一个外卖红包吧，每日可领取~</a>
                    <div
                        id="red-package"
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
                        id="last-a"
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
