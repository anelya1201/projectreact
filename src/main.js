import React from 'react'
import Friend from './Friend'
import Posts from './Posts'
import Friends from './Friends'
import Chats from './chats'
import Chat from './chat'

export default function Main(props) {
    return (
        <main>
           <Friends friends = {props.data.Friendspage.friends}></Friends>
           <Posts posts = {props.data.PostPage.posts}></Posts>
           <Chat></Chat>
        </main>

    )
}