import React from 'react'

export default function Friend(props) {
    return (
        <div class="friend">
            <img class="photo" src={props.img} alt="" />
            <div>
                <div class="name">{props.user}</div>
                <button class="button">Follow</button>
            </div>
        </div>
    )
}
