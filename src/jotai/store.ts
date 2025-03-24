import { atom, getDefaultStore } from 'jotai'

export const store = getDefaultStore()
export const FirstShow = atom(false)
export const LogoShow = atom(true)
type ScrType = 'show' | 'hide'
export const OverHidden = atom<ScrType>('show')
export const CheckWork = atom(true)
export const FontSize = atom(13)
export const themeList = [
    {
        name: '暗夜',
        value: 'dark',
        backgroundColor: '#1f2025',
        color: 'rgb(176, 179, 181)',
    },
    {
        name: '护眼',
        value: 'eye',
        backgroundColor: '#333e43',
        color: 'rgb(176, 179, 181)',
    },
    {
        name: '极客',
        value: 'geek',
        backgroundColor: 'white',
        color: 'black',
    }
]

export const ThemeIndex = atom(0)
export const CurrentTheme = atom((get) => themeList[get(ThemeIndex)])
export const SetScrShow = atom<ScrType>('hide')

export const MessAge = atom([[], [], [], [], [], [], [], [], [], [], [], [], [], []])

// export const UpdateTime = atom()
// export const NowTime = atom((get) => {
//     const timeDiff = new Date() - get(UpdateTime)
//     const minutes = Math.floor(timeDiff / (1000 * 60))
//     return `${minutes}分钟前`
// })
