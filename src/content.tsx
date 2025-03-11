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
    const [style,setStyle]=useState({backgroundColor:'#1f2025',color:'rgb(176, 179, 181)',svg:''})
        return (
<div >
    <StyleContext.Provider value={{setscrstyle}}>
        <Cover />
    </StyleContext.Provider>

        <div id="content">
            <StyleContext.Provider value={{style}}>
                <Header />
            </StyleContext.Provider>

            <StyleContext.Provider value={{setSetscrstyle,style}}>
                <Middle />
            </StyleContext.Provider>
            <StyleContext.Provider value={{setscrstyle,setSetscrstyle,style,setStyle}}>
                <Setscreen />
            </StyleContext.Provider>
            <StyleContext.Provider value={{style}}>
                <Footer />
            </StyleContext.Provider>

        </div>
</div>
    )
}
export default content