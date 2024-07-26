import React from 'react'

export default function Profile() {
  return (
    <div className='profile'>
      <img src="avatar.jpeg" alt="" width="120px" />
      <h4>@kamila</h4>
      <p>Hi, I’m 32 y.o</p>
      <p>My love is only for you</p>
      <div className='buttons'>
      <button className='follow'>Follow</button>
      <button className='message'>Message</button>
      <button className='others'>Other</button>
      </div>
      <hr />
      <div className='images'>
      <img src="post.jpeg" alt="" />
      <img src="post.jpeg" alt="" />
      <img src="post.jpeg" alt="" />
      <img src="post.jpeg" alt="" />
      <img src="post.jpeg" alt="" />
      <img src="post.jpeg" alt="" />
      <img src="post.jpeg" alt="" />
      <img src="post.jpeg" alt="" />
      <img src="post.jpeg" alt="" />
      </div>
    </div>
  )
}
