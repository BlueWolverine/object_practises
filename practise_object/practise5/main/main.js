
class Person {
  constructor(name=0, age=0) {
    this.name = name;
    this.age = age;
  }
  basicIntroduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, kclass) {
    super(name, age);
    this.kclass = kclass;
  }
  introduce() {
    return `${super.basicIntroduce()} I am a Student. I am at ${this.kclass}.`;
  }
}


class Worker extends Person {
  constructor(name, age) {
    super(name, age);
  }
  introduce() {
    return `${super.basicIntroduce()} I am a Worker. I have a job.`;
  }
}


