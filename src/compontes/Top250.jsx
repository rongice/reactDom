
import React from 'react'

export default class Top250 extends React.Component{
    constructor() {
        super()
        this.state={}
    }
    render() {
        return <div>
            <h2>Top250电影排行榜----{this.props.match.params.type}</h2>
        </div>
    }
}