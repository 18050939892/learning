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
    // todo 用一堆 useRef 说明思路错了，这东西不应该常用，最多只有很少的情况需要用
    // todo 纯数据驱动的思路，不要直接操作 DOM
    const mainRef = useRef<HTMLElement>(null)
    const middleRef = useRef<HTMLDivElement>(null)
    const asideRef = useRef<HTMLElement>(null)
    const size = useWindowSize()
    const [firstShow] = useAtom(FirstShow)

    // todo 这些代码可以都删掉，不要操作 DOM，用纯 CSS 去实现自适应
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
    // todo 不要又给变量重新取个名字再用，直接用， Icon.map()
    const items = Icons

    // todo 这行代码的作用是？ 看起来没用，而且用 useRef 说明你想操作 DOM，思路就错了
    const itemsRef = items.map(() => {
        return useRef<HTMLDivElement>(null)
    })

    // TODO 这个数组的命名不对，只有组件和 jotai 的状态才需要大驼峰。 命名也不对，应该是 firstTitleList
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
