import { SetScrStyle } from '../../jotai/store.ts'
import { useAtom } from 'jotai'

export function Icons() {
    // 原子实例
    const [, setSetScrStyle] = useAtom(SetScrStyle)

    // 设置界面关闭
    const handleOnclick = (event) => {
        setSetScrStyle({display: 'none', height: '0px'})
        event.preventDefault()
    }

    //   svg数组
    const items = [
        <svg
            t="1741273897782" className="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"
            onClick={handleOnclick}
        >
            <path
                d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z"
                p-id="4250" fill="#ffffff"
            ></path>
        </svg>,
        <svg
            t="1741273897782" className="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"
            onClick={handleOnclick}
        >
            <path
                d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z"
                p-id="4250"
            ></path>
        </svg>
    ]
    return items
}


