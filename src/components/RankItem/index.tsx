import * as React from 'react'
import { Item } from '../Item'
import { useAtom } from 'jotai/index'
import { FirstShow } from '../../jotai/store.tsx'

export function RankItem(props) {
    const {title, content} = props
    const [firstShow] = useAtom(FirstShow)
    return <>
        {firstShow && <div
            className={`item`}
            style={{
                paddingTop: '10px',
                height: '15px',
                width: '90.5%',
                borderRadius: '5px 5px',
                color: 'rgb(176, 179, 181)',
                order:0
            }}
        >
            {title}
        </div>}
        {
            content.map((item, i) =>
                <Item item={item} key={i} ></Item>
            )
        }
    </>
}
