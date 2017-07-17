
class Person {
  constructor(name=0, age=0, id=0) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }
}

class Kclass {
  constructor(number = 0) {
    if(number == 0) {
      return 'no class';
    } else {
      this.number = `class ${number}`;
    }
   this.members = [];
  }
  appendMember(student) {
    this.members.push(student);
  }

  isin(student) {
   if(this.members.indexOf(student) != -1) {
     return true;
   } else {
     return false;
   }
  }

  assignLeader(student) {
    if(this.isin()) {
      this.leader = student;
    } else {
    console.log('It is not one of us.');
    }
  }
}

class Student extends Person {
  constructor(name, age, id, kclass) {
    super(name, age, id);
    this.kclass = kclass;
  }
  introduce() {
    if(this.kclass.leader == this) {
      return `${super.introduce()} I am a Student. I am the leader of ${this.kclass.number}`; 
    }
    return `${super.introduce()} I am a Student. I am at ${this.kclass.number}.`;
  }
}


class Teacher extends Person {
  constructor(name, age, kclasses) {
    super(name, age);
    this.kclasses = kclasses;
  }
  introduce() {
    var str = 'class ';
    for(var i = 0; i<this.kclasses.length-1; i++) {
      str = str +this.kclasses[i]+''+',';
    }
    str = str + this.kclasses[this.kclasses.length-1];
    return `${super.introduce()} I am a Teacher. I teach ${str}.`;
  }
  introduceWith(student) {
    if (student.kclass == this.kclass) {
      return `${super.introduce()} I am a Teacher. I teach ${student.name}.`;
    } else {
      return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`;
    }
  }
  isTeaching(student) {
    if(this.kclasses.indexOf(student.kclass) != -1) {
      return true;
    } else {
      return false;
    }
  }
}


