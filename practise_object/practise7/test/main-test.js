'use strict';

describe('practise5', () => {

  it('get the student instruction', () => {
    let student = new Student('xiaoming', 20, 'class 2');
    let kclass = 'My name is xiaoming. I am 20 years old. I am a Student. I am at class 2.'
    expect(student.introduce()).toEqual(kclass);
  });

  it('get the teacher instruction', () => {
    let teacher = new Teacher('zhangfeng', 30, 'class 2');
    let text = 'My name is zhangfeng. I am 30 years old. I am a Teacher. I teach class 2.'
    expect(teacher.introduce()).toEqual(text);
  })

});
