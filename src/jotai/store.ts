import { atom } from 'jotai'

// todo 这个 Store.ts 文件，不要用大写开头，Store.ts -> store.ts
export const FirstShow = atom<boolean>(false)
export const LogoShow = atom<boolean>(true)

// TODO atom 的类型都不需要自己写，他会自动推导，全删掉
export const OverHidden = atom<ScrType>('show')
export const CheckWork = atom<boolean>(true)
export const FontSize = atom<number>(14)

// TODO 这种静态变量，直接导出就行了，不需要 jotai 状态，状态是用来改变的，你不需要改变就不需要状态
type StyleType='dark'|"geek"|"eye"
// export const Style = atom<object>({backgroundColor: '#1f2025', color: 'rgb(176, 179, 181)', svg: ''})
export const StyleValue = atom<StyleType>('dark')

export const WorkList = atom<Array>(['读者', '学习', '362', '验证：学习', '学习', '工作学习', '未来奋斗', '学友'])
export const UnWorkList = atom<Array>(['无名', '摸鱼', '421', '验证：摸鱼', '摸鱼', '工资摸鱼', '自由争命', '鱼友'])

// 这里一样
type ScrType='show'|"hide"
export const SetScrShow = atom<ScrType>('hide')
