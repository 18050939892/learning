import { atom } from 'jotai'
import Default from '../demo/default.tsx'
import NavigationDemo from '../demo/navigation.tsx'
import PaginationDemo from '../demo/pagination.tsx'
import PaginationCustom from '../demo/paginationCustom.tsx'
import PaginationDynamic from '../demo/paginationDynamic.tsx'
import PaginationFraction from '../demo/paginationFraction.tsx'
import ScrollbarDemo from '../demo/scrollbar.tsx'
import SlidesPerView from '../demo/slidesPerView.tsx'
import SpaceBetween from '../demo/spaceBetween.tsx'
import Vertical from '../demo/vertical.tsx'

export const Left = atom(Array(11).fill(0))
export const State = atom('1s left')

export const SwiperDomo = atom([{
    name: 'Default',
    html: <Default />,
}, {
    name: 'Navigation',
    html: <NavigationDemo />,
}, {
    name: 'Pagination',
    html: <PaginationDemo />,
}, {
    name: 'Pagination dynamic',
    html: <PaginationDynamic />,
},
//         {
//     name: 'Pagination progress',
//     html: <PaginationProgress />,
// },
{
    name: 'Pagination fraction',
    html: <PaginationFraction />,
}, {
    name: 'Pagination custom',
    html: <PaginationCustom />,
}, {
    name: 'Scrollbar',
    html: <ScrollbarDemo />,
}, {
    name: 'Vertical',
    html: <Vertical />,
}, {
    name: 'Space between',
    html: <SpaceBetween />,
}, {
    name: 'Slides per view',
    html: <SlidesPerView />,
}]
)
export const SwiperName = atom('Default')
export const Swiper = atom((get) => {
    const demos = get(SwiperDomo)
    const name = get(SwiperName)
    return demos.find(demo => demo.name === name) || demos[0]
})
