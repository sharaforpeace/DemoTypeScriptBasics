// 13-june-2020 Type Script

class School{
     name : string = '';     
}
let _school = new School()
_school.name = 'Star School.';
console.log(_school.name);

//Getter Setter
class ESchool {
  static  ID : number = 1;
  private _name: string = '';
  get name(): string {
    return this._name;
  }
  set name(nam: string) {
     this._name = nam;  
  }
}
ESchool.ID = 1;   // Static Property Across All the Objects
console.log(ESchool.ID);
ESchool.ID++;
let _eschool = new ESchool();
_eschool.name = 'Maheswara School';
console.log(_eschool.name);
console.log(ESchool.ID);
ESchool.ID++;
let _eschool2 = new ESchool();
_eschool2.name = 'PETERS School';
console.log(_eschool2.name);
console.log(ESchool.ID);



