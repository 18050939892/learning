import { atom } from 'jotai'
export const FirstShow = atom(false)
export const LogoShow = atom(true)
type ScrType = 'show' | 'hide'
export const OverHidden = atom<ScrType>('show')
export const CheckWork = atom(true)
export const FontSize = atom(14)
type StyleType = 'dark' | 'geek' | 'eye'
export const StyleValue = atom<StyleType>('dark')
export const WorkList = atom(['读者', '学习', '362', '验证：学习', '学习', '工作学习', '未来奋斗', '学友'])
export const UnWorkList = atom(['无名', '摸鱼', '421', '验证：摸鱼', '摸鱼', '工资摸鱼', '自由争命', '鱼友'])
export const SetScrShow = atom<ScrType>('hide')
