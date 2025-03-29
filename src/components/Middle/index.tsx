import { AsideTop } from '../AsideTop'
import './index.less'
import { AsideButtom } from '../AsideButtom'
import * as React from 'react'
import { RankItem } from '../RankItem'
import { rankList } from './rankList.tsx'

export function Middle() {
    return (
        <div id="middle">
            <main>
                {rankList.map((item) =>
                    <RankItem title={item.title} content={item.content}></RankItem>
                )}
            </main>
            <aside>
                <AsideTop></AsideTop>
                <AsideButtom></AsideButtom>
            </aside>
        </div>
    )
}
