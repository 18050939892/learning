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
import axios from 'axios'
import { useEffect } from 'react'

export function Middle() {
    // 页面自适应
    const [firstShow] = useAtom(FirstShow)
    const [currentTheme] = useAtom(CurrentTheme)

    const [messAge, setMessAge] = useAtom(MessAge)

    async function sendajax() {
        const logoList = ['/zhihu', '/douban-movie', '/weibo', '/toutiao', '/hupu', '/bilibili', '', '/ifanr', '/ithome', '', '/csdn', '/huxiu', '', '/juejin']
        logoList.map(async (item, index) => {
            return await axios.get('https://my-repository-orcin-beta.vercel.app' + item).then(res => {
                return res.data
            }).then(data => {
                setMessAge(prev => {
                    let s = [...prev]
                    s[index] = data.data || []
                    return s
                })
            })
        })
    }

    useEffect(() => {
        sendajax()
    }, [])

    function handleUpdate() {
        return messAge.map((item, index) => {
            return messAge[index].map((NewValue, index) =>
                <NewsItem NewValue={NewValue} id={index + 1}></NewsItem>
            )
        })
    }

    // 这个不能设置成useState，不然隐藏会失效，因为它的修改需要使用到set，而没法直接改
    let NewsLists = handleUpdate()
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
                            <h6>{item.nowtime}</h6>
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
