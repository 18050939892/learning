import './index.less'
import { useAtom } from 'jotai'
import { SetScrStyle } from '../../jotai/store.ts'

export function Cover() {
    const [setScrStyle] = useAtom(SetScrStyle)
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


