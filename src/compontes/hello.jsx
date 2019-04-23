
import React from 'react'
export default function Hello(props) {
    // return <div>111</div>
    return (
        <div>
            <p>tu1----城市---名胜古迹</p>
            <p>tu2----{props.name2}---{props.mingji2}</p>
            <p>tu3----{props.name}---{props.mingji}</p>
        </div>
    );
}