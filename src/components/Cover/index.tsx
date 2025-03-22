import './index.less'
import { useAtom } from 'jotai'
import { SetScrShow } from '../../jotai/store.ts'
import { useScreenStyle } from '../../hooks/StoreObject.ts'
import { useEffect, useState } from 'react'

// todo 这里的 Cover 思路有点奇怪，大部分代码都没用。 你在弹窗组件内部弄一个 absolute 的 Cover，就可以实现 阴影的效果吧？
export function Cover() {
    const [setScrShow] = useAtom(SetScrShow)
    let setScrStyleItem = useScreenStyle()
    const [height, setHeight] = useState<number>(0)

    function scroolHeight() {
        setHeight(document.body.clientHeight)
    }

    function resizeHeight() {
        setHeight(document.body.clientHeight)
    }

    useEffect(() => {
        if (setScrShow == 'show') {
            console.log(6)
            setHeight(document.body.clientHeight)
            window.addEventListener('scroll', scroolHeight)
            window.addEventListener('resize', resizeHeight)
        } else {
            console.log(1)
            window.removeEventListener('scroll', scroolHeight)
            window.removeEventListener('resize', resizeHeight)
            setHeight(0)
        }
    }, [setScrShow])
    return (
        <div
            id="cover"
            style={{
                display: setScrStyleItem[setScrShow].display,
                height: height + 'px'
            }}
        >
        </div>
    )
}

