//  Your test here

describe('tests of practice 01', function () {

    it("given Person with age 21 and name Tom, get introduce", function () {

        var person = new Person(21, "Tom");
        var intro = person.introduce();

        expect(intro).toBe("My name is Tom. I am 21 years old.");
    });

    it("given Student with age 21, name Tom and class 2, get introduce", function () {

        var student = new Student(21, "Tom", 2);
        var intro = student.introduce();

        expect(intro).toBe("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");
    });

    it("given Teacher with age 25, name Bob and teaches class 2, get introduce", function () {

        var teacher = new Teacher(25, "Bob", 2);
        var intro = teacher.introduce();

        expect(intro).toBe("My name is Bob. I am 25 years old. I am a Teacher. I teach Class 2.");
    });

    it("given Teacher with age 25, name Bob and teaches no class, get introduce", function () {

        var teacher = new Teacher(25, "Bob");
        var intro = teacher.introduce();

        expect(intro).toBe("My name is Bob. I am 25 years old. I am a Teacher. I teach No Class.");
    });

});