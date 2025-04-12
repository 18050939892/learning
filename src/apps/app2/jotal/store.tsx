import { atom } from 'jotai'

export const Left = atom(Array(11).fill(0))
export const State = atom('1s left')

export const SwiperDomo = atom({
    name: 'Scrollbar',
    type: 'scrollbar',
})
