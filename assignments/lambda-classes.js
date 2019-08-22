// CODE here for your Lambda Classes
class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  speak() {
    return (`Hello, my name is ${this.name}, I am from ${this.location}.`)
  }
}

const josh = new Person("Josh", 27, "Accra");

const sarah = new Person("Sarah", 37, "Kumasi");

const fred = new Person("Fred", 33, "Bedrock");

// console.log(josh);
// console.log(sarah);
// console.log(fred.speak());

class Instructor extends Person {
  constructor(name, age, location, speciality, favLanguage, catchPhrase) {
    super(name, age, location)
    this.speciality = speciality;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  }
}

const apetsi = new Instructor("Apetsi", 28, "Accra", "Software Development", "JavaScript", "JavaScript Rocks!!")

// console.log(apetsi.grade({name: "Apetsi"}, "english"))

class Student extends Person {
  constructor(name, age, location, previousBackground, className, favSubjects, grade) {
    super(name, age, location)
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
    this.grade = grade;
  }

  listsSubjects() {
    this.favSubjects.forEach(subject => `${subject}`)
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`
  }

  sprintChallenge(subject) {
    return `${this.name} has begun spring challenge on ${subject}`
  }

  graduate() {
    
  }
}