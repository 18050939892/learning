import './index.less'
import { useAtom } from 'jotai'
import { SetScrStyle } from '../../jotai/Store.ts'

function index() {
    
    
    const [SetObj, setSetObj] = useAtom(SetScrStyle)
    return (
        <div id="cover" style={{display: SetObj.display, height: SetObj.height}}>
        </div>
    )
}

export default index
