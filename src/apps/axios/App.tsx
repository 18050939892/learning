import './App.css'
import axios from './axios/axios.tsx'

function App() {
    async function a() {
        const b = await axios.get(`http://localhost:3000/posts`).then((res) =>
            console.log(res.data))
        //     const c = await axios.delete(`http://localhost:3000/posts/1`).then((res) =>
        //         console.log(res.data))
        //     const d = await axios.put(`http://localhost:3000/posts/1`, {
        //         title: '666',
        //         views: 5
        //     }).then((res) =>
        //         console.log(res.data))
        //     const e = await axios.post(`http://localhost:3000/posts`, {
        //         id: '4',
        //         title: '666',
        //         views: 5
        //     }).then((res) =>
        //         console.log(res.data))
    }

    a()
    return (
        <>
            <div>观看console查看效果</div>
        </>
    )
}

export default App
