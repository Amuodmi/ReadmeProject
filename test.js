

function Viking() {
    // const this = {};
    this.size = 100;

    // return this;
}


const Thor = new Viking();


class Planet {
    population = 0;

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
    populate(num) {
        this.population = num;
    }

    static explode(planetRef) {
        //can't use `this` in a static method because static methods don't have visibility of 
        // the class instance | static methods can only be accessed from the Class itself (Planet.explode) and not (earth.explode) 
        // i think it throws an error like "cannot access static method on instance" or might say not a function 
        // this.population (i think this would be undefined in this context)

        //should probably pass a reference of an instance if we want to change it directly from the static method
        planetRef.population = 0;
    }
}

const solar_system = {
    earth: new Planet("earth"),
    mars: new Planet("mars"),
    jupiter: new Planet("jupiter"),
}

solar_system.earth.populate();

// const solar_system = {
//     earth: {
//         name: "earth",
//         getName: function () { return this.name; }
//     },
//     mars: {
//         name: "mars",
//         getName: function () { return this.name; }
//     },
//     jupiter: {
//         name: "jupiter"
//     }
// }


console.log("Thor is a new Viking instance", Thor);

class Horse {
    constructor(size) {
      this.size = size;
    }
  
    static makeSound() {
      console.log("neeeeeiiighhh");
    }
  
  }
  
  class CookieType {
    static BAKING_TEMPERATURE = "300F";
  
    constructor(flavour) {
      this.flavour = flavour;
    }
  
  
  }
  
  CookieType.BAKING_TEMPERATURE
  
  /**
   * an object instance of the CookieType class
   * @type {CookieType}
   */
  const cookie = new CookieType("macadamia nut - white chocolate");
  
  console.log("checking if cookie is an instance of CookieType", cookie instanceof CookieType);
  
  const quarterHorse = new Horse(100);
  
  console.log(Horse)
  
  console.log(quarterHorse)