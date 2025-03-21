import { atom, getDefaultStore } from 'jotai'

export const store = getDefaultStore()
export const FirstShow = atom(false)
export const LogoShow = atom(true)
type ScrType = 'show' | 'hide'
export const OverHidden = atom<ScrType>('show')
export const CheckWork = atom(true)
export const FontSize = atom(14)
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
export const WorkList = atom(['读者', '学习', '362', '验证：学习', '学习', '工作学习', '未来奋斗', '学友'])
export const UnWorkList = atom(['无名', '摸鱼', '421', '验证：摸鱼', '摸鱼', '工资摸鱼', '自由争命', '鱼友'])
export const SetScrShow = atom<ScrType>('hide')
