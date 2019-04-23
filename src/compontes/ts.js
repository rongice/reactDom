function Student(name, age) {
  (this.name = name), (this.age = age);
}
Student.info = "aaa";
const uu = new Student("小小", 18);
console.log(uu);
console.log(Student.info);

class Teacher {
  static ac = "yyyyy";
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let ss = new Teacher("校长", 23);
console.log(ss);
console.log(Teacher.ac);
