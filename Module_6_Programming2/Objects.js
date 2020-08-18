/*car*/
let car = { 
    make: "Mercedes",
    model: "S-Class",
    color: "red",
    year: 2020,
     
    getMake: function() { 
	   return this.make; 
    },  
    getColor: function() {
        return this.color
    },
    setMake: function(newMake) {
        this.make = newMake;
    }
    setColor: function(newColor) {
        this.color = newColor;
    },
    myCar: function() { 
         return "My car is a " + this.color + " " + this.make + "."; 
    },
};
car.setColor("white");
car.setMake("BMW");
car.getColor();
car.getMake();
car.myCar();


////*team*///

let team = {
    name: "Jets",
    type: "football",
    hometown: "New York",
    color: "blue",

    getColor: function(){
        return this.color;
    },

    setColor: function(newColor) {
        this.color = newColor;
    },

    myTeam: function() {
        return "My favorite team is " + name + " and they are " + this.color + ".";
    }

};
team.setColor("green");
team.getColor();
team.Myteam();


/*animal*/
let animal = {
    type: "dog",
    name: "Buba",
    color: "brown",
    age: 3,
    bark: function(){
        alert("Woof")
    },
    getAge: function() {
        return this.age;
    },
    setAge: function(newAge) {
        this.age = newAge;
    }
};
animal.bark();
animal.setAge(5);
animal.getAge();
