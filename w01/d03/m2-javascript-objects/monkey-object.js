
function Monkey(name, species){}
  this.name = "Bob the Monkey";
  this.species = "Orangutan";
  this.thingsEaten = [];
  this.eatSomething = function(food){
      this.thingsEaten.push(food);
    };
  this.introduce = function(){
      console.log("Hi, I'm " + this.name + ".  Nice to meet you!");
    };
}

var monkey1 = new Monkey("Bob", "Orangutan");
monkey1.eatSomething("pizza");
monkey1.introduce();
