import * as React from 'react'
import axios from 'axios'
import { MessAge } from '../../jotai/store.ts'
import { useAtom } from 'jotai/index'

export function MyReFresh({message, number, children}: {message:string, number:number, children: React.ReactNode}) {
    const [, setMessAge] = useAtom(MessAge)
    return (<div
        onClick={async () => {
            const res = await axios.get(`https://my-repository-orcin-beta.vercel.app${message}`)
            const {data} = res.data
            setMessAge(prev => {
                const s = [...prev]
                s[number] = data || []
                s[number].nowTime = new Date()
                return s
            })
        }}
    >
        {children}
    </div>)
}
