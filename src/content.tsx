// import { useState } from 'react'
import './mmyzj.css'
import Header from './component/header.tsx'
import Middle from './component/middle.tsx'
import Setscreen from './component/setscreen.tsx'
import Footer from './component/footer.tsx'
import Cover from './component/cover.tsx'


function content() {
    // const [count, setCount] = useState(0)
    return (
<div>
        <Cover />
        <div id="content">
            <Header />
            <Middle />
            <Setscreen />
           <Footer />
        </div>
</div>
    )
}
export default content