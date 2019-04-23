import React from 'react'


export default function Items(props) {
    return <div >
        <h2>评论人：{props.user}</h2>
        <p>{props.content}</p>
    </div>
}