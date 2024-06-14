
// Exercise 1 //

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(i = 0; i < Object.values(person3).length; i ++){
    console.log(Object.values(person3)[i])
}

// Exercise 2 //

function Person(name, age){
    this.name = name;
    this.age = age;

    this.showInfo = () => {
        console.log(`This persons name is ${this.name}, and their age is ${this.age}.`)
    }

    this.addAge = () => {
        this.age ++
    }    
}

let person1 = new Person('Jonathon', 40)
let person2 = new Person('Sherry', 22)

person1.showInfo()
person2.showInfo()

person2.addAge()
person2.addAge()
person2.addAge()

person2.showInfo()


// Exercise 3 //

function checkStringLength(string) {
    return new Promise((resolve) => {
        if (string.length > 10) {
        resolve('Big word');
      } else {
        resolve('Small Number');
      }
    });
  }

checkStringLength('I love Coding Temple')
.then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error);
  });

  
  checkStringLength('Hi')
.then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error);
  });