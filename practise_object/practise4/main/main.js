
class Person {
  constructor(name=0, age=0) {
    this.name = name;
    this.age = age;
  }

}

class Student extends Person {
  constructor(name, age, kclass) {
    super(name, age);
    this.kclass = kclass;
  }
  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at ${this.kclass}.`;
  }
}


class Worker extends Person {
  constructor(name, age) {
    super(name, age);
  }
  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old. I am a Worker. I have a job.`;
  }
}


