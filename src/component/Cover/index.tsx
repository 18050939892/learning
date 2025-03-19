import './index.less'
import { useAtom } from 'jotai'
import { SetScrShow } from '../../jotai/store.ts'
import { useScreenStyle } from '../../hooks/StoreObject.ts'
import { useEffect, useState } from 'react'

export function Cover() {
    const [setScrShow] = useAtom(SetScrShow)
    let setScrStyleItem = useScreenStyle()
    const [height, setHeight] = useState<number>(0)
    function scroolHeight() {
        setHeight(document.body.clientHeight)
    }function resizeHeight() {
        setHeight(document.body.clientHeight)
    }
    useEffect(() => {
        if(setScrShow == 'show'){
            console.log(6)
            setHeight(document.body.clientHeight)
            window.addEventListener('scroll', scroolHeight);
            window.addEventListener('resize', resizeHeight);
        }else{
            console.log(1)
            window.removeEventListener('scroll', scroolHeight )
            window.removeEventListener('resize', resizeHeight)
            setHeight(0)
        }
    }, [setScrShow])
    return (
        <div
            id="cover"
            style={{
                display: setScrStyleItem[setScrShow].display,
                height:height + "px"
            }}
        >
        </div>
    )
}

