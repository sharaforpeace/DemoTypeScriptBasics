
//without parameter property
class Box {
   size : number = 0;
   length : number = 0 ;
   width  : number = 0;
   height : number = 0;
   constructor(l: number,  w:number, h:number){
         this.length = l; 
         this.height = h;
         this.width = w;
         this.size = l * h * w;
   }   
   Area(){ 
        console.log(` box dimension ${this.length} * ${this.height} * ${this.width} = ${this.size} `);
   }
}

let bx = new Box(10,10,10);
bx.Area();

// parameter property
class StackBox {
    size : number = 0;
    constructor(public length: number, public width:number, public height:number){
          this.size = length * height * width;
    }
    Area(){
        console.log(` StackBox dimension ${this.length} * ${this.height} * ${this.width} = ${this.size} `);
    }
 }

let sbx = new StackBox(11,11,11);
sbx.Area();
