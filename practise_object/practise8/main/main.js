
class Person {
  constructor(name=0, age=0) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }
}

class Kclass {
  constructor(number = 'No') {
    this.number = number;
  }
}


class Student extends Person {
  constructor(name, age, kclass) {
    super(name, age);
    this.kclass = kclass;
  }
  introduce() {
    return `${super.introduce()} I am a Student. I am at class ${this.kclass.number}.`;
  }
}


class Teacher extends Person {
  constructor(name, age, kclass) {
    super(name, age);
    this.kclass = kclass;
  }
  introduce() {
    return `${super.introduce()} I am a Teacher. I teach class ${this.kclass.number}.`;
  }

  introduceWith(student) {
    if (student.kclass.number == this.kclass.number) {
      return `${super.introduce()} I am a Teacher. I teach ${student.name}.`;
    } else {
      return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`;
    }
  }
}


