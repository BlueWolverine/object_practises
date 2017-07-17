
class Person {
  constructor(name=0, age=0) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, kclass) {
    super(name, age);
    this.kclass = kclass;
  }
  introduce() {
    return `${super.introduce()} I am a Student. I am at ${this.kclass}.`;
  }
}


class Teacher extends Person {
  constructor(name, age, kclass='No') {
    super(name, age);
  }
  introduce() {
    return `${super.introduce()} I am a Teacher. I teach class 2.`;
  }
}


