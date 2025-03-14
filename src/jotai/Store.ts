import { atom } from 'jotai'
import { useState } from 'react'

export const Firstshow = atom<boolean>(false)
export const Logoshow = atom<boolean>(true)
export const Overhidden = atom<object>({
    height: '',
    overflow: '',
    textOverflow: '',
    whiteSpace: ''
})
export const Checkwork = atom<boolean>(true)
export const Fontsize = atom<number>(14)
export const Style = atom<object>({backgroundColor: '#1f2025', color: 'rgb(176, 179, 181)', svg: ''})
export const Workarr = atom<Array>(['读者', '学习', '362', '验证：学习', '学习', '工作学习', '未来奋斗', '学友'])
export const Unworkarr = atom<Array>(['无名', '摸鱼', '421', '验证：摸鱼', '摸鱼', '工资摸鱼', '自由争命', '鱼友'])
export const Setscrstyle = atom<object>({display: 'none', height: '0px'})
