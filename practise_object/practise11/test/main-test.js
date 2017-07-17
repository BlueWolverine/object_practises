'use strict';

describe('practise5', () => {

  it('get the student instruction', () => {
    let kclass = new Kclass(2);
    let kclass2 = new Kclass(3);
    let student = new Student('xiaoming', 20, 123345, kclass);
    kclass2.assignLeader(student);
    let text = 'My name is xiaoming. I am 20 years old. I am a Student. I am at class 2.'
    expect(student.introduce()).toEqual(text);
  });

  it('get the teacher instruction', () => {
    let kclass = new Kclass(2);
    let kclass2 = new Kclass(3);
    let kclasses = [];
    kclasses.push(kclass.number.number);
    kclasses.push(kclass2.number.number);
    let teacher = new Teacher('zhangfeng', 30, [2,3,4]);
    let text = 'My name is zhangfeng. I am 30 years old. I am a Teacher. I teach class 2,3,4.';
    expect(teacher.introduce()).toEqual(text);
  });

  it('judge whether the teacher teach the student', () => {
    let kclass = new Kclass(2);
    let kclass_t = new Kclass(2);
    let teacher = new Teacher('zhangfeng', 30, kclass_t);
    let student = new Student('xiaoming', 20, kclass);
    let text = `My name is zhangfeng. I am 30 years old. I am a Teacher. I teach xiaoming.`;
    expect(teacher.introduceWith(student)).toEqual(text); 
  });



});
