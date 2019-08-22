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

class ProjectManager extends Instructor {
  constructor(name, age, location, speciality, favLanguage, catchPhrase, gradClassName, favInstructor) {
    super(name, age, location, speciality, favLanguage, catchPhrase);
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }

  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standup time!`
  }

  debugsCode(studentObj, subject) {
    return `${this.name} debugs ${studentObj.student}'s code on ${subject}`
  }
}

const newPM = new ProjectManager("Apetsi", 28, "Accra")

console.log(newPM);