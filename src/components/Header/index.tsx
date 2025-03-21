import './index.less'
import { useAtom } from 'jotai'
import { StyleValue } from '../../jotai/store.ts'

export function Header() {
    // 命名按照这个格式
    const [styleValue] = useAtom(StyleValue)
    return (
        <header className={styleValue}>
            <img
                src="https://momoyu.cc/assets/logo-1-DXR4uO3F.png"
                alt=""
                className={styleValue}
            />
            <input type="text" placeholder="搜索..." />
            <button
                id="login"
                className="submit"
                onClick={() => {
                    window.location.href = '../../../login.html?id=login'
                }}
            >登陆
            </button>
            <button
                id="register"
                className="submit"
                onClick={() => {
                    window.location.href = '../../../login.html'
                }}
            >注册
            </button>
        </header>
    )
}

