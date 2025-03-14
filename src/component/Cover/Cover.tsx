// import { useContext } from 'react'
// import { StyleContext } from '../Content/Content.tsx'
import './Cover.less'
import { useAtom } from 'jotai'
import { Setscrstyle } from '../../jotai/Store.ts'

function cover() {
    
    // const {setscrstyle} = useContext(StyleContext)
    const [setscrstyle, setSetscrstyle] = useAtom(Setscrstyle)
    return (
        <div id="cover" style={{display: setscrstyle.display, height: setscrstyle.height}}>
        </div>
    )
}

export default cover
