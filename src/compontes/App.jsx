
import React from 'react'
import { HashRouter, Route, Link ,Redirect} from 'react-router-dom'

import Home from "@/compontes/Home";
import Movie from "@/compontes/Movie";
import About from "@/compontes/About";
import Top250 from '@/compontes/Top250'

export default class App extends React.Component{

    constructor() {
        super()
        this.state = {}
    }
    render() { 
        return (
          <HashRouter>
            <div>
              <h3>app根组件</h3>
              <Link to="/home">首页</Link>&nbsp;&nbsp;
              <Link to="/movie">电影</Link>&nbsp;&nbsp;
              <Link to="/movie/top250">电影</Link>&nbsp;&nbsp;
              <Link to="/about">关于</Link>&nbsp;
              <hr />
               <Route exact path="/" render={()=><Redirect to="/home" />}/>
              <Route path="/home" component={Home} />
              <Route path="/movie" component={Movie} exact/>
              <Route path="/movie/:type" component={Top250} />
              <Route path="/about" component={About} />
            </div>
          </HashRouter>
        );
       
    }

}