//  Your code here

var Person = function (age, name) {

    this._name = name;
    this._age = age;
};
Person.prototype.base_introduce = function () {
    return "My name is " + this._name + ". I am " + this._age + " years old.";
};
Person.prototype.introduce = function () {
    return this.base_introduce();
};

var Class = function (number) {
    this._number = number;
};
Class.prototype.getNumber = function () {
    return this._number;
};
Class.prototype.introduce = function () {
    if (this._number != null) {
        return "Class " + this._number;
    } else {
        return "No Class";
    }
};
Class.prototype.equals = function (another) {

    return this._number == another._number;
};

var Student = function (age, name, cls) {

    Person.call(this, age, name);
    this._class = cls;
};
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.introduce = function () {

    return Person.prototype.introduce.call(this) +
        " I am a Student. I am at Class " + this._class.getNumber() + ".";
};

var Teacher = function (age, name, cls) {

    Person.call(this, age, name);
    this._class = cls;
};
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.introduce = function () {

    return Person.prototype.introduce.call(this) +
        " I am a Teacher. I teach " + this._class.introduce()
        + ".";
};
Teacher.prototype.introduceWith = function (student) {
    if (this._class.equals(student._class)) {
        return Person.prototype.introduce.call(this) +
            " I am a Teacher. I teach " + student._name + ".";
    } else {
        return Person.prototype.introduce.call(this) +
            " I am a Teacher. I don't teach " + student._name + ".";
    }
};
