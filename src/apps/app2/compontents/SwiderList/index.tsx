import './index.less'
import { titleList } from '../../Array.tsx'
import { SwiperDomo } from '../../jotal/store.tsx'
import { useAtom } from 'jotai/index'

export function SwiperList() {
    const [, setSwiperDomo] = useAtom(SwiperDomo)
    return (
        <div className="swiper-list">
            <ul>
                {titleList.map((title, index) => (
                    <li key={index}><a
                        href={`#${index}`}
                        onClick={(event) => {
                            setSwiperDomo({
                                name: title,
                                type: title == 'Default' ? 'default' : title == 'Scrollbar' ? 'scrollbar' : title ==
                                'Navigation' ? 'navigation' : title == 'Pagination fraction' ? 'pagination navigation' : 'pagination'
                            })
                            const a: HTMLElement = event.currentTarget.parentElement as HTMLElement
                            const b: HTMLElement = a.parentElement as HTMLElement
                            b.querySelectorAll('a').forEach((element: HTMLElement) => {
                                element.classList.remove('check')
                            })
                            event.currentTarget.classList.toggle('check')
                        }}
                        className={title == 'Default' ? 'check' : ''}
                    >{title}</a></li>
                ))}
            </ul>
        </div>
    )
}
