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
} from './icons/all'

// todo 这里的思路不应该是 Icons 这么一个小数组，而是一个包含热榜所有数据的大数组，一个对象包含一个热榜的所有数据
export const Icons = [
    {
        svg: <ZhiHu />,
        title: '知乎热榜',
        link: '/zhihu'
    },
    {
        svg: <DouBan />,
        title: '豆瓣热话',
        link: '/douban-movie'
    }
    ,
    {
        svg: <WeiBo />,
        title: '微博热搜',
        link: '/weibo'
    }
    ,
    {
        svg: <TouTiao />,
        title: '今日头条',
        link: '/toutiao'
    }
    ,
    {
        svg: <HuPu />,
        title: '虎扑步行街',
        link: '/hupu'
    }
    ,
    {
        svg: <BZhan />,
        title: 'B站',
        link: '/bilibili'
    }
    ,
    {
        svg: <ZhongGuan />,
        title: '中关村在线',
        link: ''
    }
    ,
    {
        svg: <AiFan />,
        title: '爱范儿',
        link: '/ifanr'
    }
    ,
    {
        svg: <It />,
        title: 'IT之家',
        link: '/ithome'
    }
    ,
    {
        svg: <KaiYuan />,
        title: '开源中国',
        link: ''
    }
    ,
    {
        svg: <CSDN />,
        title: 'CSDN',
        link: '/csdn'
    }
    ,
    {
        svg: <HuXiou />,
        title: '虎嗅',
        link: '/huxiu'
    }
    ,
    {
        svg: <ZhiDe />,
        title: '值得买三小时热门',
        link: ''
    }
    ,
    {
        svg: <JueJin />,
        title: '掘金',
        link: '/juejin'
    }
    ,
]
