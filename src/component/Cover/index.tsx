import './index.less'
import { useAtom } from 'jotai'
import { SetScrStyle } from '../../jotai/Store.ts'

function index() {
    const [setScrStyle, setSetScrStylej] = useAtom(SetScrStyle)
    return (
        <div
            id="cover"
            style={{
                display: setScrStyle.display,
                height: setScrStyle.height
            }}
        >
        </div>
    )
}

export default index
