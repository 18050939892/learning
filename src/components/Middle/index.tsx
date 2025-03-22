import useWindowSize from '../../hooks/useWindowSize.ts'
import { Icons } from './icons.tsx'
import { Item } from '../Item'
import { Title } from '../Title'
import { AsideTop } from '../AsideTop'
import { NewsList } from '../NewsList'
import { useEffect, useRef } from 'react'
import './index.less'
import './first.less'
import { FirstShow } from '../../jotai/store.ts'
import { useAtom } from 'jotai'
import { AsideButtom } from '../AsideButtom'

export function Middle() {
    // 页面自适应
    const mainRef = useRef<HTMLElement>(null)
    const middleRef = useRef<HTMLDivElement>(null)
    const asideRef = useRef<HTMLElement>(null)
    const size = useWindowSize()
    const [firstShow] = useAtom(FirstShow)
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
                <NewsList NewValue={NewValue}></NewsList>
            )
        })
    }
    // 这个不能设置成useState，不然隐藏会失效，因为它的修改需要使用到set，而没法直接改
    let NewsLists = handleUpdate()
    // 重复代码循环遍历化
    const items = Icons
    const itemsRef = items.map(() => {
        return useRef<HTMLDivElement>(null)
    })
    const FirstTitle = ['热门社区', 'IT科技', '程序员聚集地', '新闻资讯', '视频平台', '购物平台']
    return (
        <div ref={middleRef} id="middle">
            <main ref={mainRef} className={`container ${firstShow ? 'layout-first' : ''}`}>
                {FirstTitle.map((item, index) =>
                    <Title item={item} index={index}></Title>
                )}
                {items.map((item, index) =>
                    <Item
                        item={item}
                        index={index}
                        NewsLists={NewsLists[index]}
                        itemRef={itemsRef[index]}
                    ></Item>
                )
                }
            </main>
            <aside ref={asideRef}>
                <AsideTop></AsideTop>
                <AsideButtom></AsideButtom>
            </aside>
        </div>

    )
}
