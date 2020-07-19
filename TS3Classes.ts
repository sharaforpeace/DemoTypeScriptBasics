
//Basic class
class Car {
    color: string | undefined;
    speed: number | undefined;
    drive() {
        console.log(`${this.color} car went in a speed ${this.speed} ... whooo ...`);
    }
}

let _benz = new Car();
_benz.color = "Red";
_benz.speed = 180;
_benz.drive();

//using Interface to implemnets Class
interface VechileInterface {
    color: string | undefined;
    speed: number | undefined;
    drive(color: string, speed: number): void;
}

class Vechile implements VechileInterface {
    color = '';
    speed = 0;
    model = '';
    drive() {
        console.log(`This ${this.model} color ${this.color} and its speed ${this.speed}.`);
    }
}

let bus = new Vechile();
bus.model = 'Bus';
bus.color = 'Green';
bus.speed = 120;
bus.drive();

// Class with Default value
class House {
    modelType = '';
    color = '';
    constructor(address: string){
        console.log(` House name: ${address} `);
    }
    Build(modelType: string, color: string = 'White') {
        console.log(`Type of House ${modelType} and its color ${color}`);
    }
    protected payRent(amount: number): void {
        console.log(`House Rent Rs. ${amount}`)
    }
}

let oldHouse = new House(' oldHouse ');
oldHouse.Build(' villa ');

let flatHouse = new House(' flatHouse ');
flatHouse.Build(' appartment ', ' Yellow. ');

// Interface
interface IAccount {
    rent: number;
    getAccountDetails(): void;
}

//is a (IndivialVilla is a House)
class IndivialVilla extends House implements IAccount {
    rent = 0;
    constructor(Indiviaddress: string){
        super(Indiviaddress);
    }
    getAccountDetails() {
        console.log(`Indivial Villa Rent Rs.${this.rent}`);
    }
}

//is a (RoayalVilla is a House)
class RoayalVilla extends House implements IAccount {
    rent = 0;
    constructor(Rayaladdress: string){
        super(Rayaladdress);
    }
    getAccountDetails() {
        super.payRent(this.rent);
        console.log(`RoayalVilla Villa Rent Rs.${this.rent}`);
    }
    Build(modelType: string, color: string = "White") {
        console.log(`Premium Roayal ${modelType} and its color ${color}`);
    }    
   
    payRent(amount: number){
          console.log(this.rent);
    }     
}

let sml = new IndivialVilla(' Three Start ');
sml.Build('without car parking');
sml.rent = 1300;
// sml.payRent(2300); // property cannot be accessed outside if its protected
sml.getAccountDetails();

let bml = new RoayalVilla(' Five Start ');
bml.Build('with car parking', 'Royal Blue');
bml.rent = 1500;
// bml.payRent(2300);
bml.getAccountDetails();

// Private and # 
class Employee{
     constructor(name: string){
         console.log(` Employee name: ${name} `);
     }
}

class B {
    foo : number = 23;
    // readonly foo : number = 24;
    bHelper(){
         return this.foo;
    }
}
let b = new B();
// b.foo = 25;
console.log(b.bHelper());

class C {
    #foo : number = 10;
    cHelper(){
         return this.#foo;
    }
}

class D extends C{ 
   #foo : number = 15;
   dHelper(){
        return this.#foo;
   }
}

let dIns = new D();
console.log(dIns.cHelper());
console.log(dIns.dHelper());

class U {
    //private foo = '10';    
    #foo = '10';    
}

// console.log(new U().foo);
// console.log(new U()["foo"]);

