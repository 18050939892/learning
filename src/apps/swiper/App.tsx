import 'swiper/css'
import './styles.css'
import { Swiper, SwiperName } from './jotai/store.tsx'
import { titleList } from './Array.tsx'
import { useAtom } from 'jotai/index'
export default function App() {
    const [swiper] = useAtom(Swiper)
    const [, setSwiperName] = useAtom(SwiperName)
    return (
        <div style={{display: 'flex'}}>
            <div className="swiper-list">
                <ul>
                    {titleList.map((title, index) => (
                        <li key={index}><a
                            href={`#${index}`}
                            onClick={(event) => {
                                setSwiperName(title)
                                const a: HTMLElement = event.currentTarget.parentElement as HTMLElement
                                const b: HTMLElement = a.parentElement as HTMLElement
                                b.querySelectorAll('a').forEach((element: HTMLElement) => {
                                    element.classList.remove('check')
                                })
                                event.currentTarget.classList.toggle('check')
                            }}
                            className={title == 'Default' ? 'check' : ''}
                        >{title}</a></li>
                    ))}
                </ul>
            </div>
            {swiper.html}
        </div>
    )
}
