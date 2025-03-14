import { atom } from 'jotai'

export const FirstShow = atom<boolean>(false)
export const LogoShow = atom<boolean>(true)
export const OverHidden = atom<object>({
    height: '',
    overflow: '',
    textOverflow: '',
    whiteSpace: ''
})
export const CheckWork = atom<boolean>(true)
export const FontSize = atom<number>(14)
export const Style = atom<object>({backgroundColor: '#1f2025', color: 'rgb(176, 179, 181)', svg: ''})
export const WorkList = atom<Array>(['读者', '学习', '362', '验证：学习', '学习', '工作学习', '未来奋斗', '学友'])
export const UnWorkList = atom<Array>(['无名', '摸鱼', '421', '验证：摸鱼', '摸鱼', '工资摸鱼', '自由争命', '鱼友'])
export const SetScrStyle = atom<object>({display: 'none', height: '0px'})
