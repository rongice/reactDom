//创建组件
import React from 'react'
import ReactDOM from 'react-dom'
import fetchJSONP from 'fetch-jsonp'

React.Component.prototype.http=fetchJSONP


import App from '@/compontes/App'
//import { DatePicker } from "antd";

//import "antd/dist/antd.css";
// ReactDOM.render(<div>
//     {/* <App /> */}
//     <DatePicker />

// </div>, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById("root"));

//fetchJSONP('http://api.douban.com/v2/movie/in_theaters').then(res=>res.json()).then(data=>console.log(data))