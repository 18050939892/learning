import { atom } from 'jotai'

export const FirstShow = atom<boolean>(false)
export const LogoShow = atom<boolean>(true)

// TODO atom 的类型都不需要自己写，他会自动推导，全删掉
export const OverHidden = atom({
    height: '',
    overflow: '',
    textOverflow: '',
    whiteSpace: ''
})
export const CheckWork = atom<boolean>(true)
export const FontSize = atom<number>(14)

// TODO 这种静态变量，直接导出就行了，不需要 jotai 状态，状态是用来改变的，你不需要改变就不需要状态
export const Style = atom<object>({backgroundColor: '#1f2025', color: 'rgb(176, 179, 181)', svg: ''})

// 这样
// export const Style = {backgroundColor: '#1f2025', color: 'rgb(176, 179, 181)', svg: ''}

export const WorkList = atom<Array>(['读者', '学习', '362', '验证：学习', '学习', '工作学习', '未来奋斗', '学友'])
export const UnWorkList = atom<Array>(['无名', '摸鱼', '421', '验证：摸鱼', '摸鱼', '工资摸鱼', '自由争命', '鱼友'])

// 这里一样
export const SetScrStyle = atom<object>({display: 'none', height: '0px'})
