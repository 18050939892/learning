// import { useState } from 'react'
import './mmyzj.css'
import Header from './component/header.tsx'
import Middle from './component/middle.tsx'
import Setscreen from './component/setscreen.tsx'
import Footer from './component/footer.tsx'
import Cover from './component/cover.tsx'
import {useState,createContext} from "react";
export const StyleContext=createContext()
function content() {

    // const [count, setCount] = useState(0)
    const [setscrstyle,setSetscrstyle]=useState({display:"none",height:"0px"})
    return (
<div>
    <StyleContext.Provider value={{setscrstyle}}>
        <Cover />
    </StyleContext.Provider>

        <div id="content">
            <Header />
            <StyleContext.Provider value={{setSetscrstyle}}>
                <Middle />
            </StyleContext.Provider>
            <StyleContext.Provider value={{setscrstyle,setSetscrstyle}}>
                <Setscreen />
            </StyleContext.Provider>

           <Footer />
        </div>
</div>
    )
}
export default content