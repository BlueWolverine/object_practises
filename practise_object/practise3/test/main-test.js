'use strict';

describe('practise2', () => {

  it('get the student instruction', () => {
    let student = new Student('xiaoming', 20, 'class 2');
    let kclass = 'My name is xiaoming. I am 20 years old. I am a Student. I am at class 2.';
    expect(student.introduce()).toEqual(kclass);
  });

  it('get the person introduction', () => {
    let person = new Person('xiaohong', 19);
    let text = 'My name is xiaohong. I am 19 years old.';
    expect(person.introduce()).toEqual(text);
  }) 

});
