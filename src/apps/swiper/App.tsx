import 'swiper/css'
import './styles.css'
import { Current, Swiper, SwiperName } from './jotai/store.tsx'
import { titleList } from './Array.tsx'
import { useAtom } from 'jotai/index'

export default function App() {
    const [swiper] = useAtom(Swiper)
    const [, setSwiperName] = useAtom(SwiperName)
    const [current, setCurrent] = useAtom(Current)
    return (
        <div style={{display: 'flex'}}>
            <div className="swiper-list">
                <ul>
                    {titleList.map((title, index) => (
                        <li key={index}><a
                            href={`#${index}`}
                            onClick={() => {
                                setSwiperName(title)
                                setCurrent(() => {
                                    const a = Array(11).fill('')
                                    a[index] = 'check'
                                    return a
                                })
                            }}
                            className={current[index]}
                        >{title}</a></li>
                    ))}
                </ul>
            </div>
            {swiper.html}
        </div>
    )
}
