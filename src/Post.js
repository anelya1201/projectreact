import React, { createRef, useState } from 'react'

export default function Post(props) {
    let postref = React.createRef()
    let heartref = React.createRef()
    let [likes, setLikes] = useState(0)
    let [stay, setStay] = useState(1)

    function bcchange() {
        postref.current.style.backgroundColor = prompt('any color')
    }
    function heartchange() {
        if (stay == 1) {
            setLikes(likes + 1)
            heartref.current.src = 'heart.png'
            setStay(0)
        } else {
            setLikes(likes - 1)
            heartref.current.src = 'whiteheart.png'
            setStay(1)
        }
    }
    return (
        <div className='post'>
            <img src={props.post_img} alt="" width="85" />
            <div className='block' ref={postref} >
                <div className='avatar'>
                    <img src={props.user_img} alt="" width="35" height="45" />
                    <div className='text'>
                        <h4>{props.user}</h4>
                        <p>{props.text} </p>
                    </div>
                </div>
                <img src="photo.jpeg" alt="" width="400" />
                <br></br>
                <button><img src="whiteheart.png" alt="" width="30px" ref={heartref} onClick={heartchange} /></button>
                <div className='likes'>
                {likes}
                </div>
                <h5>{props.user}: {props.text}</h5>
            </div>
        </div>
    )
}
