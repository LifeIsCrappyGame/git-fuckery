//CheatSheet
/* class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  const john = new Person('John', 25);
  john.sayHello(); // Output: "Hello, my name is John and I'm 25 years old."
   */




  class Character {
    constructor(name, weektype, open) {
      this.name = name;
      this.weektype = weektype;
      this.open = open;
    }


    
    BuildSlot() {
      console.log(this.weektype);
      document.getElementById("div").innerHTML += "<br></br>" + this.name + "<br></br>" + this.weektype;
    }
  }

const Sucrose = new Character("Sucrose", "Closed today - Opens on Monday, Thursday, Sunday", "<mark>Domain OPEN</mark>");
const Diluc = new Character("Diluc", "Closed today - Opens on Tuesday, Friday, Sunday", "<mark>Domain OPEN</mark>");
const Zhongli = new Character("Zhongli", "Closed today - Opens on Wednesday, Saturday, Sunday", "<mark>Domain OPEN</mark>");


  