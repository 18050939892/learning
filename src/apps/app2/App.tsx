import { SwiperList } from './compontents/SwiderList'
// import { SwiperDomoList } from './compontents/SwiderDomoList'
import { Swiper, SwiperSlide } from 'swiper/react'
// ✅ 正确 - 使用这个替代
import 'swiper/css'
import './styles.css'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import {SwiperDomo} from './jotal/store.tsx'
import { useEffect } from 'react'
import { useAtom } from 'jotai'
// import './App.css'
export default function App() {
    const [swiper] = useAtom(SwiperDomo)
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>'
        },
    }
    useEffect(() => {
        console.log(swiper)
        if (swiper.type == 'navigation') {
            import ('swiper/css/navigation')
        } else if (swiper.type == 'pagination navigation') {
            import ('swiper/css/navigation')
            import('swiper/css/pagination')
        } else if (swiper.type == 'pagination') {
            import('swiper/css/pagination')
        } else if (swiper.type == 'scrollbar') {
            import('swiper/css/scrollbar')
        }
        return () => {
        }
    }, [swiper.name, swiper.type])
    return (
        <div style={{display: 'flex'}}>
            <SwiperList></SwiperList>
            <Swiper
                direction={swiper.name == 'Vertical' ? 'vertical' : 'horizontal'}
                pagination={
                    swiper.name == 'Pagination' ? true : swiper.name == 'Pagination fraction' ? {
                        type: 'fraction'
                    } : swiper.name == 'Pagination custom' ? pagination : {
                        clickable: swiper.name == 'Vertical' || swiper.name == 'Space between' || swiper.name == 'Slides per view',
                        dynamicBullets: swiper.name == 'Pagination dynamic',
                    }
                }
                scrollbar={{
                    hide: swiper.name == 'Scrollbar',
                }}
                navigation={
                    swiper.name == 'Navigation' || swiper.name == 'Pagination fraction' ? true : {}
                }
                spaceBetween={swiper.name == 'Space between' || swiper.name == 'Slides per view' ? 30 : 0}
                slidesPerView={swiper.name == 'Slides per view' ? 3 : 1}
                modules={swiper.type == 'pagination' ? [Pagination] : (swiper.type == 'navigation' ? [Navigation] : (swiper.type == 'pagination navigation' ? [Pagination, Navigation] : swiper.type == 'scrollbar' ? [Scrollbar] : []))}
                className="mySwiper"
                style={{
                    width: '60%',
                    height: '500px',
                    marginLeft: '10px'
                }}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
        //  <div className="App">
        // <SwiperList></SwiperList>
        //  <SwiperDomoList></SwiperDomoList>
        //  </div>
    )
}
