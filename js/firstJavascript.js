
const a= 10;

console.log(typeof a);

 let b='something said,"hey you!"';
 console.log(b);

x=[];
for(i=0;i<=100;i++){
    x[i]=i;
}

function cat(color, age){
    this.color=color;
    this.age=age;
    this.tambahUmur=function(){
        this.age=this.age+5;
    }
}

wawoosh= new cat("white", 10);
wawoosh.tambahUmur();
console.log(wawoosh);
console.log(x.length);
console.log(x);