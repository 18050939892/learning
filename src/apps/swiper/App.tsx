import { SwiperList } from './compontents/SwiderList'
import 'swiper/css'
import './styles.css'
import {Swiper} from './jotai/store.tsx'
import { useAtom } from 'jotai'
export default function App() {
    const [swiper] = useAtom(Swiper)
    return (
        <div style={{display: 'flex'}}>
            <SwiperList></SwiperList>
            {swiper.html}
        </div>
    )
}
