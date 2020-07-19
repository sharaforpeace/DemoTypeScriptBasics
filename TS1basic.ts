// Typescript Basic Types

let nmb : number = 27.108;
console.log(nmb);

let nmbHx : number = 0xf0abcd;
console.log(nmbHx);

let s: string = 'Ts first string declartion';
console.log(s);

//Template String `
let tmpStr: string = ` Template String Include (${ s }) `;
console.log(tmpStr);
//lowercase
let lcs: string = 'Ts first string declartion';
console.log(lcs.toLowerCase());

//uppercase
let upctmpStr: string = ` Template String Include (${ s }) `;
console.log(upctmpStr.toUpperCase());

//Array Declartion
let arrValue: number[] = [6, 2, 5, 4, 9];
console.log(arrValue);

//Array Reverse
let ReverseArrValue: number[] = [6, 2, 5, 4, 9];
console.log(ReverseArrValue.reverse());

//Genrics way declaring array
let gArrValue: Array<number> = [7, 39, 45, 23, 12, 43] ;
console.log(gArrValue);

//Tuple
let tplX : [number, string];
tplX = [768, "Good Day"] ;
console.log(tplX);

//Tuple optional
let optTplX : [string, number, string?, number?]; 
optTplX = ["gooogle", 108, "apple"];
console.log(optTplX);

//Enum
enum Color {
    red,
    green,
    blue
}
// refer index (0, 1, 2)
let _color : Color = Color.blue;
console.log(_color);
// get code based on index
let _colorName : string = Color[2];
console.log(_colorName);

//Any
let _v_any : any = 'character string or number';
console.log(_v_any);
_v_any = 239;
console.log(_v_any);

// any used in integrate with other javascript library
let _v_anyList : any[] = [1, 'Hello', true];
console.log(_v_anyList);

//void
let _nv : void = undefined;
console.log(_nv);

// let _nvNull : void = null;  // "strictNullChecks": false,    
// console.log(_nvNull);

function fncExvoid() : void {
    console.log('This will not return ...');
}
fncExvoid();


//null and undefied ( union type | )
function fncExUndefined() : string | null | undefined {
   let _strVal = 'some text string' ; // null, undefined
   return _strVal;
}
console.log(fncExUndefined());

//Never
// function error(message: string): never {
//     throw new Error(message);
// }
// console.log(error('CustomeError Will not get print'));

//Type Assertions
let _somStr : any = "Welcome to typescript"; //  234232342 ; //

let _lngSomStr : number = (<string> _somStr).length;
console.log(_lngSomStr);

let _lngSomStrOW : number = (_somStr as string).length;
console.log(_lngSomStrOW);

let _convrtStr : string = (<string> _somStr);
// console.log(_convrtStr);
let _lngSomStrOW1 : number = _convrtStr.length;
console.log(_lngSomStrOW1);

// let example
function sum(mat: number[][]) : number {
    let _tot = 0 ;
     for (let i = 0 ; i < mat.length; i++){
          let _fstRow = mat[i];
          for(let j = 0; j < _fstRow.length; j++){
              _tot += _fstRow[j];
          }
     }
     return _tot;
}

var mat : number[][] = [
 [1, 2],
 [3, 4]
];

console.log(sum(mat));

// const
const _constValue : number = 100;
console.log(_constValue);
// _constValue = 120;  // it does not allow to re-declare again

//array destructuring
let adinput = [1, 2];
let [adfirst, adsecond] = adinput;
//swap
[adfirst, adsecond]  = [adsecond, adfirst];
console.log(adfirst);
console.log(adsecond);

let [adFst, ... adRest] = [1,2,3,4,5,6,7,8];

//tuple destructuring
let td_Values : [number, string, boolean] = [1,"One", true];
let [td_a, td_b, td_c] = td_Values;
console.log(td_Values);
console.log(td_a);
console.log(td_b);
console.log(td_c);

//Default Values (optional vs default)
function fncDefaultCheck(one: number, two: string = 'welcome'){
    let _strval = ` ${ two } in ${ one } `;
    console.log(_strval);
}
fncDefaultCheck(100, 'Global');
fncDefaultCheck(101);

//destructuring for using default along optional
function fncDefaultOptional({ one, two = 'welcome' }: { one: number; two?:string; }){
    let _strval = ` ${ two } in ${ one } `;
    console.log(_strval);
}
fncDefaultOptional({ one: 100, two: 'Global' });  // custom
fncDefaultOptional({ one: 100, two: undefined }); // default
fncDefaultOptional({ one: 101 });                 // optional

//Spread
let varSprdA : number[] = [11,12,13];
let varSprdB : Array<number> = [21,22,23];
let varSprdC : Array<number> = [];
console.log(varSprdA);
console.log(varSprdB);
varSprdC = [ 1, 2, ...varSprdA, ...varSprdB];
console.log(varSprdC);

//---- Basic TypeScript Types Ends.

