//Type Script Interface Examples

//Input Object
let empObj =  {empId: 1, empName: 'Shiva', empAge: 5}

//without Interface Declaration
function printEmployee(empObj: { empName: string}){
    console.log(empObj.empName);
}
printEmployee(empObj);
//****** Drawbacks [ not reusable emp object and type not clear]

//with Interface Declaration
interface Employee {
    empId : number;
    readonly empAge : number;
    empName : String;
    empGender ?: String;
}

//Input Object
let empObjI : Employee;
empObjI = {empId: 2, empAge: 33, empName: 'Saravanan'}
function printEmployeeInterFace(empObj: Employee){
    console.log(empObj.empName);
}
printEmployeeInterFace(empObjI);

//Interface Optional and Interface Reusable
let empObjIopt : Employee;
empObjIopt = {empId: 2, empAge: 23, empName: 'Vishnu', empGender: 'Female'}
// empObjIopt.empAge = 26;
empObjIopt.empName = 'Vishu Priya';
function printEmployeeInterFaceOptional(empObj: Employee){
        console.log(`${empObj.empName} - ${ empObj.empGender} `) ;
}
printEmployeeInterFaceOptional(empObjIopt);

//Readonly Array
let nmbX : number[] = [1,2,3,4,5,6,7];
let nmbRX : ReadonlyArray<number> = nmbX;
console.log(nmbRX);
nmbX[2] = 5;
// nmbRX[2] = 6;   // error TS2542: Index signature in type 'readonly number[]' only permits reading.
console.log(nmbX);

//Function Types
interface SearchFunc {
  (inputsString: string, searchInput: string) : boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, keystr: string){
   let _found = source.search(keystr);
   return _found > -1;   
}
console.log(mySearch("Hello TypeScript","Type"));

//Indexable Types
interface StringArray {
    [id:number]: string;
}
let myArray : StringArray;
myArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
console.log(myArray);

//Implements and Extends
interface TimeInterface {
     currentDay : String;
}

class Today implements TimeInterface {
     currentDay = "Sunday";
     constructor(){
        console.log(this.currentDay);
     }
}

let tdy = new Today();

//Interface Extends Interface
interface Shape {
   color : string;   
}
interface Penstroke {
    pWidh : number;
}
interface Square extends Shape, Penstroke {
    sizeLength : number;
}

let sqr = {} as Square;
sqr.color = "Red";
sqr.pWidh = 100;
sqr.sizeLength = 120;
console.log(sqr.color);
console.log(sqr.pWidh);
console.log(sqr.sizeLength);

// Interface Extend Class Refer in Classes


