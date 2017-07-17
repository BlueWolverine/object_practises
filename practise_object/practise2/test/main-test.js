'use strict';

describe('practise2', () => {

  it('get the student instruction', () => {
    //let stu = require('../main/main.js');
    let student = new Student('xiaoming', 20, 'class 2');
    let kclass = 'My name is xiaoming. I am 20 years old. I am a Student. I am at class 2.';
    expect(student.introduce()).toEqual(kclass);
  });


});
