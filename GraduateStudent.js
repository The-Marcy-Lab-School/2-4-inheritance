const Student = require('./Student');
const Person = require('./Person');

class GraduateStudent extends Student {

}

const ada = new GraduateStudent('Ada', 'Lovelace', 30, 'Computer Science', 'Marcy Lab School');

console.log(ada.fullName());

console.log('ada: ', Object.getOwnPropertyNames(ada));
console.log('GraduateStudent.prototype: ', Object.getOwnPropertyNames(GraduateStudent.prototype));
console.log('Student.prototype: ', Object.getOwnPropertyNames(Student.prototype));
console.log('Person.prototype: ', Object.getOwnPropertyNames(Person.prototype));

debugger;