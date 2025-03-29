import { AsideTop } from '../AsideTop'
import './index.less'
import { FirstShow } from '../../jotai/store.ts'
import { useAtom } from 'jotai'
import { AsideButtom } from '../AsideButtom'
import * as React from 'react'
import { Title } from '../Title'
import { Item } from './item.tsx'

export function Middle() {
    const [firstShow] = useAtom(FirstShow)
    const firstTitleList = ['热门社区', 'IT科技', '程序员聚集地', '新闻资讯', '视频平台', '购物平台']
    const firstContent = {
        true: [[0, 1, 2, 4], [8, 6, 7], [9, 10, 13], [3, 11], [5], [12]],
        false: [Array.from({length: 14}, (_, i) => i)]
    }

    const iconTitle = ['知乎热榜', '豆瓣热话', '微博热搜', '今日头条', '虎扑步行街', 'B站', '中关村在线', '爱范儿', 'IT之家', '开源中国', 'CSDN', '虎嗅', '值得买三小时热门', '掘金']
    return (
        <div id="middle">
            <main>
                {/* todo 这里应该整体是一个 <RankItem> ，组件里直接包含所有东西了 */}
                {
                    firstContent[firstShow].map((item, index) =>
                        <>
                            <Title item={firstTitleList[index]} index={index}></Title>
                            {
                                item.map((item) =>
                                    <Item title={iconTitle[item]}></Item>
                                )
                            }
                        </>
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
