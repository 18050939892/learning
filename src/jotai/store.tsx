import { atom, getDefaultStore } from 'jotai'
import {
    AiFan,
    BZhan,
    CSDN,
    DouBan,
    HuPu,
    HuXiou,
    It,
    JueJin,
    KaiYuan,
    TouTiao,
    WeiBo,
    ZhiDe,
    ZhiHu,
    ZhongGuan
} from './icons/all.tsx'

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
export const Icons = atom([
    {
        svg: <ZhiHu />,
        title: '知乎热榜',
        link: '/zhihu',
        message: []
    //     没有用【】占位的话在调用时会显示没有map方法
    },
    {
        svg: <DouBan />,
        title: '豆瓣热话',
        link: '/douban-movie',
        message: []
    }
    ,
    {
        svg: <WeiBo />,
        title: '微博热搜',
        link: '/weibo',
        message: []
    }
    ,
    {
        svg: <TouTiao />,
        title: '今日头条',
        link: '/toutiao',
        message: []
    }
    ,
    {
        svg: <HuPu />,
        title: '虎扑步行街',
        link: '/hupu',
        message: []
    }
    ,
    {
        svg: <BZhan />,
        title: 'B站',
        link: '/bilibili',
        message: []
    }
    ,
    {
        svg: <ZhongGuan />,
        title: '中关村在线',
        link: '',
        message: []
    }
    ,
    {
        svg: <AiFan />,
        title: '爱范儿',
        link: '/ifanr',
        message: []
    }
    ,
    {
        svg: <It />,
        title: 'IT之家',
        link: '/ithome',
        message: []
    }
    ,
    {
        svg: <KaiYuan />,
        title: '开源中国',
        link: '',
        message: []
    }
    ,
    {
        svg: <CSDN />,
        title: 'CSDN',
        link: '/csdn',
        message: []
    }
    ,
    {
        svg: <HuXiou />,
        title: '虎嗅',
        link: '/huxiu',
        message: []
    }
    ,
    {
        svg: <ZhiDe />,
        title: '值得买三小时热门',
        link: '',
        message: []
    }
    ,
    {
        svg: <JueJin />,
        title: '掘金',
        link: '/juejin',
        message: []
    }
    ,
])
