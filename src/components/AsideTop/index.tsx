import { SvgList } from '../Middle/svg.tsx'
import { useAtom } from 'jotai/index'
import './index.less'
import {
    CheckWork,
    CurrentTheme,
    FontSize,
    SetScrShow,
    UnWorkList,
    WorkList
} from '../../jotai/store.ts'

export function AsideTop() {
    const [checkWork] = useAtom(CheckWork)
    const [fontSize] = useAtom(FontSize)
    const [workList] = useAtom(WorkList)
    const [unWorkList] = useAtom(UnWorkList)
    const [currentTheme] = useAtom(CurrentTheme)
    const [, setSetScrShow] = useAtom(SetScrShow)
    return (
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
    )
}
