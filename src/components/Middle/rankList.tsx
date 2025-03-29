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
import * as React from 'react'

export const rankList = [{
    title: '热门社区',
    content: [{
        svg: <ZhiHu />,
        title: '知乎热榜',
        link: '/zhihu',
        weight: 0,
    }, {
        svg: <DouBan />,
        title: '豆瓣热话',
        link: '/douban-movie',
        weight: 1,
    }, {
        svg: <WeiBo />,
        title: '微博热搜',
        link: '/weibo',
        weight: 2,
    }, {
        svg: <HuPu />,
        title: '虎扑步行街',
        link: '/hupu',
        weight: 4,
    }
    ]
}, {
    title: 'IT科技',
    content: [{
        svg: <ZhongGuan />,
        title: '中关村在线',
        link: '',
        weight: 7,
    }
    ,
    {
        svg: <AiFan />,
        title: '爱范儿',
        link: '/ifanr',
        weight: 8,
    }
    ,
    {
        svg: <It />,
        title: 'IT之家',
        link: '/ithome',
        weight: 6,
    }
    ]
}, {
    title: '程序员聚集地',
    content: [{
        svg: <KaiYuan />,
        title: '开源中国',
        link: '',
        weight: 9,
    }
    ,
    {
        svg: <CSDN />,
        title: 'CSDN',
        link: '/csdn',
        weight: 10,
    }
    , {
        svg: <JueJin />,
        title: '掘金',
        link: '/juejin',
        weight: 13,
    }]
}, {
    title: '新闻资讯',
    content: [{
        svg: <TouTiao />,
        title: '今日头条',
        link: '/toutiao',
        weight: 3,
    },
    {
        svg: <HuXiou />,
        title: '虎嗅',
        link: '/huxiu',
        weight: 11,
    }
    ]
}, {
    title: '视频平台',
    content: [{
        svg: <BZhan />,
        title: 'B站',
        link: '/bilibili',
        weight: 5,
    }
    ]
}, {
    title: '购物平台',
    content: [{
        svg: <ZhiDe />,
        title: '值得买三小时热门',
        link: '',
        weight:12,
    }
    ]
}]
