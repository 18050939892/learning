import './index.less'
import { Header } from '../Header'
import { Middle } from '../Middle'
import { SetScreen } from '../SetScreen'
import { Footer } from '../Footer'
import { Cover } from '../Cover'

// 这里的 Content 的内容直接弄到 App.tsx 里，整个组件不要了。  属于无用的中间层
export function Content() {
    return (
        <div>
            <Cover />
            <div id="content">
                <Header />
                <Middle />
                <SetScreen />
                <Footer />
            </div>
        </div>
    )
}

