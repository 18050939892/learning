import './index.less'
import { Header }  from '../Header'
import { Middle }  from '../Middle'
import { SetScreen }  from '../SetScreen'
import { Footer }  from '../Footer'
import { Cover }  from '../Cover'


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


