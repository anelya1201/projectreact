import React from 'react'
import Friend from './Friend'

export default function Friends(props) {
  let friendslist = props.friends.map(p => {
    return <Friend user={p.user} img={p.img}></Friend>
  })
  return (
    <div>
      {friendslist}

    </div>
  )
}
