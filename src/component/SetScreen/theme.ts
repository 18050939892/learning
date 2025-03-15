import { useState } from 'react'

type Theme = '暗夜' | '护眼' | '极客';

interface ThemeStyle {
    backgroundColor: string;
    color: string;
    svg: any;
}

export function Test() {
    const themeStyles: Record<Theme, ThemeStyle> = {
        '暗夜': {
            backgroundColor: '#1f2025',
            color: 'rgb(176, 179, 181)',
            svg: items[0]
        },
        '护眼': {
            backgroundColor: '#333e43',
            color: 'rgb(176, 179, 181)',
            svg: items[0]
        },
        '极客': {
            backgroundColor: 'white',
            color: 'black',
            svg: items[1]
        }
    };

    const themeOrder: Theme[] = ['暗夜', '护眼', '极客'];
    const [theme, setTheme] = useState<Theme>('暗夜');

    // 衍生状态，直接计算，不用 set()
    const style = themeStyles[theme];

    const zjOnmouseDown = (event) => {
        const currentIndex = themeOrder.indexOf(theme);
        const isLeft = event.target.value === '<';
        const newIndex = (currentIndex + (isLeft ? -1 : 1) + themeOrder.length) % themeOrder.length;

        // 只修改源头
        setTheme(themeOrder[newIndex]);
    };
}
