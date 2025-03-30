import './index.less'
import { useAtom } from 'jotai'
import { CurrentTheme } from '../../jotai/store.tsx'

export function Header() {
    const [currentTheme] = useAtom(CurrentTheme)
    return (
        <header className={currentTheme.value}>
            <img
                src="https://momoyu.cc/assets/logo-1-DXR4uO3F.png"
                alt=""
                className={currentTheme.value}
            />
            <input type="text" placeholder="搜索..." />
            <button
                id="login"
                className="submit"
                onClick={() => {
                    window.location.href = '../../../../../login.html'
                }}
            >登陆
            </button>
            <button
                id="register"
                className="submit"
                onClick={() => {
                    window.location.href = '../../../../../login.html'
                }}
            >注册
            </button>
        </header>
    )
}

