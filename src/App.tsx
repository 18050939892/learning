import { Content } from './component/Content/index.tsx'

// todo 看这里，直接导出具体函数，才是正确做法
// export function App() 或者
// export const App = () => {}
export function App() {
    return (
        <>
            <Content></Content>
        </>
    )
}

// todo 所有地方，后面忘记有 export default 这个东西，全部用 export 来导出，然后 import { App } = 'App.tsx' 来引入

