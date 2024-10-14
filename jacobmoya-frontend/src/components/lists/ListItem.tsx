import React from 'react'

type Props = {
    itemtext:string,
    itemClass:string,
    itemChildren: React.ReactNode
}

const ListItem = (props: Props) => {
  return (
    <li className={props.itemClass}>{props.itemChildren}</li>
  )
}

export default ListItem