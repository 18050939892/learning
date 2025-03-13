// import { useState } from 'react'
import './MmyZj.css'
import Header from './component/Header.tsx'
import Middle from './component/Middle.tsx'
import SetScreen from './component/SetScreen.tsx'
import Footer from './component/Footer.tsx'
import Cover from './component/Cover.tsx'
import { useState, createContext } from 'react'

export const StyleContext = createContext()

function content() {
    
    // const [count, setCount] = useState(0)
    const [setscrstyle, setSetscrstyle] = useState({display: 'none', height: '0px'})
    const [fontsize, setFontsize] = useState<number>(14)
    const [workarr, setWorkarr] = useState<Array>(['读者', '学习', '362', '验证：学习', '学习', '工作学习', '未来奋斗', '学友'])
    const [unworkarr, setUnworkarr] = useState<Array>(['无名', '摸鱼', '421', '验证：摸鱼', '摸鱼', '工资摸鱼', '自由争命', '鱼友'])
    const [checkwork, setCheckwork] = useState<boolean>(true)
    const [logoshow, setLogoshow] = useState<boolean>(true)
    const [firstshow, setFirstshow] = useState<boolean>(false)
    const [overhidden, setOverhidden] = useState<object>({
        height: '',
        overflow: '',
        textOverflow: '',
        whiteSpace: ''
    })
    const [style, setStyle] = useState({backgroundColor: '#1f2025', color: 'rgb(176, 179, 181)', svg: ''})
    return (
        <div>
            <StyleContext.Provider value={{setscrstyle}}>
                <Cover />
            </StyleContext.Provider>
            
            <div id="content">
                <StyleContext.Provider value={{style}}>
                    <Header />
                </StyleContext.Provider>
                
                <StyleContext.Provider
                    value={{
                        setSetscrstyle,
                        style,
                        fontsize,
                        workarr,
                        unworkarr,
                        checkwork,
                        overhidden,
                        logoshow,
                        firstshow
                    }}
                >
                    <Middle />
                </StyleContext.Provider>
                <StyleContext.Provider
                    value={{
                        setscrstyle,
                        setSetscrstyle,
                        style,
                        setStyle,
                        fontsize,
                        setFontsize,
                        checkwork,
                        setCheckwork,
                        overhidden,
                        setOverhidden,
                        logoshow,
                        setLogoshow,
                        firstshow,
                        setFirstshow,
                    }}
                >
                    <SetScreen />
                </StyleContext.Provider>
                <StyleContext.Provider value={{style, fontsize}}>
                    <Footer />
                </StyleContext.Provider>
            
            </div>
        </div>
    )
}

export default content
