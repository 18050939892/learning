import { LogoShow } from '../../jotai/store.tsx'
import { useAtom } from 'jotai'
import * as React from 'react'
export function MySvg({children}: {children: React.ReactNode}) {
    const [logoShow] = useAtom(LogoShow)
    return <div style={{display: logoShow ? 'inline-block' : 'none', float: 'left'}}>
        {children}
    </div>
}
