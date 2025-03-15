import './index.less'
import { useAtom } from 'jotai'
import { FontSize, Style } from '../../jotai/Store.ts'
import {SvgList} from './svg.tsx'

function index() {
    // 零散原子实例
    const [fontSize, setFontSize] = useAtom(FontSize)
    const [style, setStyle] = useAtom(Style)
    
    // 重复Html代码循环遍历化
    const LiContent = [
        {
        href: 'https://momoyu.cc/', title: '首页'
        },{
        href: 'https://nav.momoyu.cc/', title: '导航'
        },{
        href: 'https://support.qq.com/products/313868?', title: '反馈'
        },{
        href: 'https://momoyu.cc/login', title: '反馈RSS订阅'
        },
    ]
    const LlList=LiContent.map((item, index) =>
        <li>
            <a
            href={item.href} target="_blank"
            style={{color: style.color, fontSize: fontSize + 'px'}}>
                {item.title}
            </a>
        </li>
    )
    
    return (
        <footer style={{backgroundColor: style.backgroundColor}}>
            <div className="svg">
                {SvgList[0]}
            </div>
            <div className="svg">
                <div>
                    <div id="wx">
                        <img src="https://momoyu.cc/assets/gzhss-E7ztoHaG.png" alt="" />
                        <div className="wx"></div>
                    </div>
                    <div className="wxthree"></div>
                </div>
                {SvgList[1]}
            </div>
            <div id="footerText" style={{color: style.color}}>
                <ul>
                    {LlList}
                </ul>
                <a
                    href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"
                    style={{color: style.color, fontSize: fontSize + 'px'}}
                >© 2021 momoyu.cc
                    粤ICP备2020133024号</a>
                <a
                    href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank"
                    style={{color: style.color, fontSize: fontSize + 'px'}}
                >粤公网安备
                    44011202001391号</a>
            </div>
        </footer>
    )
}

export default index
