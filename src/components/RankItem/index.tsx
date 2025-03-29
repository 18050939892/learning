import * as React from 'react'
import {Title} from '../Title'
import {Item} from '../Item'
export function RankItem(props) {
    const {title, content} = props
    return <>
        <Title item={title} ></Title>
        {
            content.map((item, i) =>
                <Item title={item} key={i}></Item>
            )
        }
    </>
}
