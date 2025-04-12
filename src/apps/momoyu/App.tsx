import './App.less'
import { Header } from './components/Header'
import { Middle } from './components/Middle'
import { SetScreen } from './components/SetScreen'
import { Footer } from './components/Footer'
export default function App() {
    return (
        <div>
            <div id="content">
                <Header />
                <Middle />
                <SetScreen />
                <Footer />
            </div>
        </div>
    )
}

