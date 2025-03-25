import { Icons } from './icons.tsx'
import { Title } from '../Title'
import { AsideTop } from '../AsideTop'
import { NewsItem } from '../NewsList'
import './index.less'
import './first.less'
import { CurrentTheme, FirstShow, MessAge } from '../../jotai/store.ts'
import { useAtom } from 'jotai'
import { AsideButtom } from '../AsideButtom'
import { MySvg } from './mysvg.tsx'
import { useEffect } from 'react'
import axios from 'axios'

export function Middle() {
    // 页面自适应
    const [firstShow] = useAtom(FirstShow)
    const [currentTheme] = useAtom(CurrentTheme)

    const [messAge, setMessAge] = useAtom(MessAge)
    async function sendAjax() {
        const logoList = ['/zhihu', '/douban-movie', '/weibo', '/toutiao', '/hupu', '/bilibili', '', '/ifanr', '/ithome', '', '/csdn', '/huxiu', '', '/juejin']
        logoList.map(async (item, index) => {
            const res = await axios.get('https://my-repository-orcin-beta.vercel.app' + item)
            const {data} = await res.data
            setMessAge(prev => {
                const s = [...prev]
                s[index] = data || []
                s[index].nowTime = new Date()
                return s
            })
        })
    }
    useEffect(() => {
        sendAjax()
    }, [])
    // 这个不能设置成useState，不然隐藏会失效，因为它的修改需要使用到set，而没法直接改
    const NewsLists = function handleUpdate() {
        return messAge.map((item, index) => {
            return messAge[index].map((NewValue, index) =>
                <NewsItem NewValue={NewValue} id={index + 1}></NewsItem>
            )
        })
    }()
    // 重复代码循环遍历化
    const firstTitleList = ['热门社区', 'IT科技', '程序员聚集地', '新闻资讯', '视频平台', '购物平台']
    return (
        <div id="middle">
            <main className={`container ${firstShow ? 'layout-first' : ''}`}>
                {firstTitleList.map((item, index) =>
                    <Title item={item} index={index}></Title>
                )}
                {Icons.map((item, index) =>
                    <div
                        className={`item content content-${index}`}
                        style={{backgroundColor: currentTheme.backgroundColor}}
                    >
                        <a href="#" className="title">
                            <MySvg>
                                {item.svg}
                            </MySvg>
                            <h4>{item.title}</h4>&nbsp;
                            <h6>{(Math.floor((new Date() - messAge[index].nowTime) / (1000 * 60)) + '分钟前') || ''}</h6>
                        </a>
                        {item.svg2}
                        <ul>
                            {NewsLists[index]}
                        </ul>
                    </div>
                )
                }
            </main>
            <aside>
                <AsideTop></AsideTop>
                <AsideButtom></AsideButtom>
            </aside>
        </div>

    )
}
