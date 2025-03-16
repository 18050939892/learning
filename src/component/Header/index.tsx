import './index.less'
import { useAtom } from 'jotai'
import { StyleValue } from '../../jotai/store.ts'
import { StoreObject} from '../SetScreen/StoreObject.ts'

export function Header() {
    // 命名按照这个格式
    const [styleValue] = useAtom(StyleValue)
    const style = StoreObject()
    return (
        // TODO 这里的 backgroundColor 需要变化吗？ 能用 CSS 实现的，不要引入 JS，一个类就可以解决了
        <header style={{backgroundColor: style[styleValue].backgroundColor}}>
            <img
                src="https://momoyu.cc/assets/logo-1-DXR4uO3F.png" alt=""
                style={{backgroundColor: style[styleValue].backgroundColor}}
            />
            <input type="text" placeholder="搜索..." />
            <button
                id="login"
                className="submit"
                onClick={() => {
                    // 逻辑绑定内聚化，直接写标签上
                    window.location.href = '../../../login.html'
                }}
            >登陆
            </button>
            <button
                id="register"
                className="submit"
                onClick={() => {
                    window.location.href = '../../../register.html'
                }}
            >注册
            </button>
        </header>
    )
}


