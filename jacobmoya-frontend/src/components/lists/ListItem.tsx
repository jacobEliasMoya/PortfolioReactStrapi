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
          props.itemtext
        }

        { 
          props.itemChildren
        }
    </li>
  )
}

export default ListItem