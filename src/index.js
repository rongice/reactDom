//创建组件
import React from 'react'
import ReactDOM from 'react-dom'
import First from '@/compontes/first'

// const info = {
//     city: "杭州",
//     pso:"下沙"
// }

const divObj = <div>
    <First></First>
</div>


ReactDOM.render(divObj,document.getElementById('root'))




// import React from 'react'
// import ReactDOM from 'react-dom'

// // // import Hello from './compontes/hello'
// import Hello from "@/compontes/hello";
// // import '@/compontes/ts';
// import '@/compontes/01class静态方法';

// const citys = {
//     name: '杭州',
//     mingji: '西湖，雷峰塔',
//     name2: '上海',
//     mingji2:'外滩，东方明珠'
// }

// const divObj = <div>
//     <Hello {...citys}></Hello>
//     {/* <Ts></Ts> */}
//     {/* <Hello name={citys.name} mingji={citys.mingji}></Hello> */}
// </div>

// ReactDOM.render(divObj,document.getElementById('root'))








// import React from 'react'
// import ReactDOM from 'react-dom'

// const myh1 = React.createElement('h1', null, '你好')
// // ReactDOM.render(myh1, document.getElementById('root'))

// const els = "哈哈哈哈"
// const arr=['小小','青青','可可']

// let divObj = <div>
//     {els}
//     {arr.map((item, index) => <h5 key={index}>{item}</h5>)}
//     <p className="uu">uu</p>

// </div>

// // const my = React.createElement('div', { id: 'uu', title: 'yy' }, '你真美',myh1)
// ReactDOM.render(divObj, document.getElementById("root"));