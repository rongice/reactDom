
import React from 'react'
import Items from "@/compontes/items";


export default class First extends React.Component{
    constructor() {
        super()
        this.state = {
           msg:'2019-4-22',
            CommentList: [
                { id: 1, user: '张三', content: '哈哈，沙发' },
                { id: 2, user: '李四', content: '哈哈，板凳' },
                { id: 3, user: '王五', content: '哈哈，凉席' },
                { id: 4, user: '赵六', content: '哈哈，砖头' },
                { id: 5, user: '田七', content: '哈哈，楼下山炮' }
            ]
        }
     }
    render() {
        this.state.msg='厦门'
        const ss = this.state.CommentList
        return (
          <div>
            <h1>评论组件列表</h1>
            <p>{this.state.msg}</p>
            <div>
                    {ss.map(item => (
                        <div key={item.id}>{Items(item)} </div>
                  
              ))}
            </div>
          </div>
        );
   }
}