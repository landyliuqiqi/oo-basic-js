//  Your code here

var Person = function (age, name) {

    this._name = name;
    this._age = age;
};

Person.prototype.introduce = function () {
    return "My name is " + this._name + ". I am " + this._age + " years old.";
};

var Student = function (age, name, cls) {

    Person.call(this, age, name);
    this._class = cls;
};
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.introduce = function () {
    return "I am a Student. I am at Class " + this._class + ".";
};
