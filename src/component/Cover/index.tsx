import './index.less'
import { useAtom } from 'jotai'
import { SetScrShow } from '../../jotai/store.ts'
import { setScrStyle } from '../SetScreen/StoreObject.ts'

export function Cover() {
    const [setScrShow] = useAtom(SetScrShow)
    const setScrStyleItem = setScrStyle()
    return (
        <div
            id="cover"
            style={{
                display: setScrStyleItem[setScrShow].display,
                height: setScrStyleItem[setScrShow].height
            }}
        >
        </div>
    )
}

