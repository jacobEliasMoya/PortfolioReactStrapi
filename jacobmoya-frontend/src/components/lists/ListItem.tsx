import React from 'react'

type Props = {
    itemtext:string,
    itemClass:string,
    itemChildren: React.ReactNode | undefined
}

const ListItem = (props: Props) => {
  return (
    <li className={props.itemClass}>
        { 
            props.itemChildren ? props.itemChildren : props.itemtext
        }
    </li>
  )
}

export default ListItem