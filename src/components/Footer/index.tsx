import './index.less'
import { useAtom } from 'jotai'
import { CurrentTheme, FontSize } from '../../jotai/store.ts'
import { SvgList } from './svg.tsx'

export function Footer() {
    // 零散原子实例
    const [fontSize] = useAtom(FontSize)
    const [currentTheme] = useAtom(CurrentTheme)

    const LiContent = [
        {
            href: 'https://momoyu.cc/',
            title: '首页'
        }, {
            href: 'https://nav.momoyu.cc/',
            title: '导航'
        }, {
            href: 'https://support.qq.com/products/313868?',
            title: '反馈'
        }, {
            href: 'https://momoyu.cc/login',
            title: '反馈RSS订阅'
        },
    ]
    return (
        <footer style={{backgroundColor: currentTheme.backgroundColor}}>
            <div className="svg">
                {SvgList[0]}
            </div>
            <div className="svg">
                <div>
                    <div id="wx">
                        <img src="https://momoyu.cc/assets/gzhss-E7ztoHaG.png" alt="" />
                        <div className="wx"></div>
                    </div>
                    <div className="wx-three"></div>
                </div>
                {SvgList[1]}
            </div>
            <div id="footer-text" style={{color: currentTheme.color}}>
                <ul>
                    {LiContent.map((item) =>
                        <li>
                            <a
                                href={item.href}
                                target="_blank"
                                style={{
                                    color: currentTheme.color,
                                    fontSize: fontSize + 'px'
                                }}
                                rel="noreferrer"
                            >
                                {item.title}
                            </a>
                        </li>
                    )}
                </ul>
                <a
                    href="https://beian.miit.gov.cn/#/Integrated/index"
                    target="_blank"
                    style={{
                        color: currentTheme.color,
                        fontSize: fontSize + 'px'
                    }}
                    rel="noreferrer"
                >© 2021 momoyu.cc
                    粤ICP备2020133024号</a>
                <a
                    href="https://beian.mps.gov.cn/#/query/webSearch"
                    target="_blank"
                    style={{
                        color: currentTheme.color,
                        fontSize: fontSize + 'px'
                    }}
                    rel="noreferrer"
                >粤公网安备
                    44011202001391号</a>
            </div>
        </footer>
    )
}

