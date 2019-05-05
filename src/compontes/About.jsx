import React from 'react'
import { Link, Route,Redirect  } from 'react-router-dom'

import Tab1 from '@/compontes/tabs/Tab1'
import Tab2 from '@/compontes/tabs/Tab2'

export default class About extends React.Component{
    constructor() {
        super()
        this.state={}
    }
    render() {
        return <div>
            <h1>About组件</h1>
            <button onClick={() => { this.goBack() }}>后退</button>&nbsp;
            <Link to="/about/tab1" >tab1</Link>&nbsp;&nbsp;
            <Link to="/about/tab2" >tab2</Link>
            
            <Route exact path='/about' render={()=><Redirect to='/about/tab1' />}></Route>
            <Route path='/about/tab1' component={Tab1}></Route>
            <Route path='/about/tab2' component={Tab2}></Route>
        </div>
    }
    goBack = () => {
        this.props.history.go(-1)
    }
}