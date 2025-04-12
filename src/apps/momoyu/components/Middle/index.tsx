import { AsideTop } from '../AsideTop'
import './index.less'
import { AsideButtom } from '../AsideButtom'
import { RankItem } from '../RankItem'
import { rankList } from './rankList.tsx'

export function Middle() {
    return (
        <div id="middle">
            <main>
                {rankList.map((item, index) =>
                    <RankItem title={item.title} content={item.content} key={index}></RankItem>
                )}
            </main>
            <aside>
                <AsideTop></AsideTop>
                <AsideButtom></AsideButtom>
            </aside>
        </div>
    )
}
