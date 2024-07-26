import React, { useState } from 'react'
import Post from './Post'

export default function Posts(props) {
  let [posts, setPosts] = useState(props.posts)
  let titleRef = React.createRef()
  let textRef = React.createRef()

  function addPosts() {
    let title = titleRef.current.value
    let text = textRef.current.value

    let newPost = {
      id: posts.length + 1,
      user: 'Anel',
      text: text,
      post_img: 'humster.png',
      user_img: 'avatar.jpeg'
    }

    setPosts([...posts, newPost])
  }



  let postslist = posts.map(p => {
    return <Post user={p.user} text={p.text} post_img={p.post_img} user_img={p.user_img} ></Post>
  })
  return (
    <div>
      <div className='form'>
        <h3>Add new post</h3>
        <div className='in1'>
          <input ref={titleRef} placeholder='title'></input>
        </div>
        <div className='in2'>
          <input ref={textRef} placeholder='text'></input>
        </div>
        <div>
          <button onClick={addPosts}>Add</button>
        </div>
      </div>
      {postslist}

    </div>
  )
}
