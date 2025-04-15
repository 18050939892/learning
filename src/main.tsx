import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link } from 'react-router-dom'
import { Router } from './Router'
import { LucideHeart, LucideHome} from 'lucide-react'

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    //     <App />
    // </StrictMode>
    <BrowserRouter>
        <div className="app-container">
            <nav className="main-nav">
                <ul style={{display:'flex', backgroundColor:'gray'}}>
                    <li>
                        <Link to="/app1">
                            <LucideHome size={18} />
                            <span>应用1</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/app2">
                            <LucideHeart size={18} />
                            <span>应用2</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/app3">
                            <LucideHeart size={18} />
                            <span>应用3</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <main style={{width:'100%'}}>
                <Router />
            </main>
        </div>
    </BrowserRouter>
)
