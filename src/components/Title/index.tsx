import { FirstShow } from '../../jotai/store.tsx'
import { useAtom } from 'jotai'

export function Title(props) {
    const [firstShow] = useAtom(FirstShow)
    const {item} = props
    return (
        <div
            className={`item `}
            style={{
                paddingTop: '10px',
                height: '15px',
                width: '90.5%',
                borderRadius: '5px 5px',
                color: 'rgb(176, 179, 181)',
                display: firstShow ? 'block' : 'none' /* 默认隐藏所有元素 */
            }}
        >
            {item}
        </div>
    )
}
