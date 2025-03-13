import { useContext } from 'react'
import { StyleContext } from '../Content.tsx'


function cover() {
    
    const {setscrstyle} = useContext(StyleContext)
    return (
        <div id="cover" style={{display: setscrstyle.display, height: setscrstyle.height}}>
        </div>
    )
}

export default cover
