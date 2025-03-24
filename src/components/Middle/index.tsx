import { Icons } from './icons.tsx'
import { Title } from '../Title'
import { AsideTop } from '../AsideTop'
import { NewsItem } from '../NewsList'
import './index.less'
import './first.less'
import { CurrentTheme, FirstShow } from '../../jotai/store.ts'
import { useAtom } from 'jotai'
import { AsideButtom } from '../AsideButtom'
import { MySvg } from './mysvg.tsx'
export function Middle() {
    // 页面自适应
    const [firstShow] = useAtom(FirstShow)
    const [currentTheme] = useAtom(CurrentTheme)

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
                <NewsItem NewValue={NewValue}></NewsItem>
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
                {firstTitleList.map((item, index) => <Title item={item} index={index}></Title> )}
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
