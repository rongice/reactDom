import React from 'react'

export default class Home extends React.Component{
    constructor() {
        super()
        this.state={}
    }
    render() {
        return <div>
            <h1>Home组件</h1>
            <button onClick={() => this.goAbout()}>去关于页面</button>
            <button onClick={() => this.goJsonpData()}>打印关于电影的信息</button>
        </div>
    }
    goAbout = () => {
        this.props.history.push('/about')
    }
    goJsonpData =async() => { 
        // this.http("http://api.douban.com/v2/movie/in_theaters").then(res=>res.json()).then(data=>console.log(data));
        const res = await this.http("http://api.douban.com/v2/movie/in_theaters")
        const data = await res.json()
        console.log(data)
    }

 
}