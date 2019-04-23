//继承
//父类，可以理解为原型对象
class Person{
    constructor(name,age) {
        this.name = name
        this.age=age
    }
    sayHello() {
        console.log('hello')
    }
}
 
//子类
class Amaic extends Person{
    constructor(name, age) {
        super(name, age)
        this.scor='tec' //此子类独有的属性
    }   
}
const a1 = new Amaic('jack', 20)
console.log(a1)

//子类
class Chinese extends Person{ }
const c1=new Chinese('张三',23)
console.log(c1)







// function Student(name, age) {
//     (this.name = name), (this.age = age);
// }
// Student.info = "aaa";
// Student.prototype.say = function () {
//     console.log('这是Student的实例方法')
// }
// const uu = new Student("小小", 18);
// console.log(uu);
// console.log(Student.info);
// uu.say()


// class Teacher {
//     static ac = "yyyyy";
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     jiao() { 
//         console.log('Teacher的实例方法')
//     }
// }
// let ss = new Teacher("校长", 23);
// console.log(ss);
// console.log(Teacher.ac);
// ss.jiao()