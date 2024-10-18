import React from 'react'

type Props = {
  itemtext:string,
  itemClass:string,
  itemChildren: React.ReactNode | undefined,
  onclick: any,
  itemKey: number
}

const ListItem = (props: Props) => {
  return (
    <li key={props.itemKey} onClick={props.onclick} className={props.itemClass}>
        { props.itemtext }

        { props.itemChildren }
    </li>
  )
}

export default ListItem