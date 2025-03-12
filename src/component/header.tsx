import { StyleContext } from '../content.tsx'
import { useContext } from 'react'

function header() {
    const {style} = useContext(StyleContext)
    const handleonclick = (event) => {
        if (event.target.id == 'login') {
            window.location.href = '../../login.html?name=login'
        } else {
            window.location.href = '../../login.html'
        }
        
    }
    return (
        <header style={{backgroundColor: style.backgroundColor}}>
            <img
                src="https://momoyu.cc/assets/logo-1-DXR4uO3F.png" alt=""
                style={{backgroundColor: style.backgroundColor}}
            />
            <input type="text" placeholder="搜索..." style={{backgroundColor: style.backgroundColor}} />
            <button id="login" className="submit" onClick={handleonclick}>登陆</button>
            <button id="register" className="submit" onClick={handleonclick}>注册</button>
        </header>
    )
}

export default header
