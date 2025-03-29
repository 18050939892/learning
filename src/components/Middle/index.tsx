import { AsideTop } from '../AsideTop'
import './index.less'
import { FirstShow } from '../../jotai/store.tsx'
import { useAtom } from 'jotai'
import { AsideButtom } from '../AsideButtom'
import * as React from 'react'
import { RankItem } from '../RankItem'

export function Middle() {
    const [firstShow] = useAtom(FirstShow)
    const rankList = {
        true: [
            {
                title: '热门社区',
                content: ['知乎热榜', '豆瓣热话', '微博热搜', '虎扑步行街']
            }, {
                title: 'IT科技',
                content: ['中关村在线', '爱范儿', 'IT之家']
            }, {
                title: '程序员聚集地',
                content: ['开源中国', 'CSDN', '掘金']
            }, {
                title: '新闻资讯',
                content: ['今日头条', '虎嗅']
            }, {
                title: '视频平台',
                content: ['B站']
            }, {
                title: '热门社区',
                content: ['值得买三小时热门']
            },
        ],
        false: [{
            title: '',
            content: ['知乎热榜', '豆瓣热话', '微博热搜', '今日头条', '虎扑步行街', 'B站', '中关村在线', '爱范儿', 'IT之家', '开源中国', 'CSDN', '虎嗅', '值得买三小时热门', '掘金']
        }]
    }
    return (
        <div id="middle">
            <main>
                {rankList[firstShow].map((item) =>
                    <RankItem title={item.title} content={item.content} ></RankItem>
                )}
            </main>
            <aside>
                <AsideTop></AsideTop>
                <AsideButtom></AsideButtom>
            </aside>
        </div>

    )
}
