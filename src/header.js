import React from 'react'

export default function Header() {
  return (
    <header>
    <h1>BookTok <img src="logo.png" alt="" /></h1>
    <nav>
        <a href="/"><p>Home</p> <img src="home.png" alt="" /></a>
        <a href=""><p>News</p> <img src="news.png" alt="" /></a>
        <a href=""><p>Chats</p> <img src="chats.png" alt="" /></a>
        <a href="/profile"><p>Profile</p> <img src="mprofile.png" alt="" /></a>
    </nav>
</header>
  )
}
