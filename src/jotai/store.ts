import { atom } from 'jotai'

export const FirstShow = atom<boolean>(false)
export const LogoShow = atom<boolean>(true)
type ScrType = 'show' | 'hide'
export const OverHidden = atom<ScrType>('show')
export const CheckWork = atom<boolean>(true)
export const FontSize = atom<number>(14)
type StyleType = 'dark' | 'geek' | 'eye'
export const StyleValue = atom<StyleType>('dark')
export const WorkList = atom<Array>(['读者', '学习', '362', '验证：学习', '学习', '工作学习', '未来奋斗', '学友'])
export const UnWorkList = atom<Array>(['无名', '摸鱼', '421', '验证：摸鱼', '摸鱼', '工资摸鱼', '自由争命', '鱼友'])
export const SetScrShow = atom<ScrType>('hide')
