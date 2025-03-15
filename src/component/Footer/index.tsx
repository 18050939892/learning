import './index.less'
import { useAtom } from 'jotai'
import { FontSize, Style } from '../../jotai/Store.ts'
import {SvgList} from './svg.tsx'

function index() {
    const [FontObj, setFontsObj] = useAtom(FontSize)
    const [StyleObj, setStyleObj] = useAtom(Style)
    
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
            style={{color: StyleObj.color, fontSize: FontObj + 'px'}}>
                {item.title}
            </a>
        </li>
    )
    
    
    return (
        <footer style={{backgroundColor: StyleObj.backgroundColor}}>
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
            <div id="footerText" style={{color: StyleObj.color}}>
                <ul>
                    {LlList}
                </ul>
                <a
                    href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"
                    style={{color: StyleObj.color, fontSize: FontObj + 'px'}}
                >© 2021 momoyu.cc
                    粤ICP备2020133024号</a>
                <a
                    href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank"
                    style={{color: StyleObj.color, fontSize: FontObj + 'px'}}
                >粤公网安备
                    44011202001391号</a>
            </div>
        </footer>
    )
}

export default index
