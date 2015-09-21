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

var Student = function (age, name, cls) {

    Person.call(this, age, name);
    this._class = cls;
};
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.introduce = function () {
    return Person.prototype.introduce.call(this) +
        " I am a Student. I am at Class " + this._class + ".";
};

var Worker = function (age, name) {

    Person.call(this, age, name);
};
Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Student;
Worker.prototype.introduce = function () {
    return Person.prototype.introduce.call(this) +
        " I am a Worker. I have a job.";
};