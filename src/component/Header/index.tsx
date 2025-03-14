import './Header.less'
import { useAtom } from 'jotai'
import { Style } from '../../jotai/Store.ts'

function index() {
    const [StyleObj, setStyleObj] = useAtom(Style)
    const handleOnclick = (event) => {
        if (event.target.id == 'login') {
            window.location.href = '../../../login.html'
        } else {
            window.location.href = '../../../login.html'
        }
        
    }
    return (
        <header style={{backgroundColor: StyleObj.backgroundColor}}>
            <img
                src="https://momoyu.cc/assets/logo-1-DXR4uO3F.png" alt=""
                style={{backgroundColor: StyleObj.backgroundColor}}
            />
            <input type="text" placeholder="搜索..." style={{backgroundColor: StyleObj.backgroundColor}} />
            <button id="login" className="submit" onClick={handleOnclick}>登陆</button>
            <button id="register" className="submit" onClick={handleOnclick}>注册</button>
        </header>
    )
}

export default index
