var x = 10;// global variable

let y = 20;// init variable
const z = 30;
k = 10;// variable
x = "hello world!";
console.log(x);//black screen
let f = y>10;
let u = false;
if(f){
    console.log("y lon hon 10");
}else{
    console.log("y be hon 10");
}
for(let i=0;i<10;i++){
    console.log("Xin chao"+i);
}
x = "10";
y =20;
x = parseInt(x);
console.log(x+y);
k = "13hello5";
k = parseInt(k);
if(isNaN(k)){
    console.log("ko phai so")
}else{
    console.log(k);
}
let ary = [1,2,3];
ary[3]= "hello";
ary[4]= [5,6,"xin chao"];
ary[4][3] = [3,14,1,"a"];
sayHello();
function sayHello() {
    console.log("Hello everybody!");
}
function sum(a,b) {
    return a+b;
}
c = sum(1,6);
console.log(c);

let arr = [5,1,7,9,12,2];
arr.map(function (e){
    console.log(e);
});
arr.push(77);

function checkSNT(n) {
    if(n<2) return false;
    if(n<3) return true;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0) return false;
    }
    return true;
}

for(let i=0;i<1000;i++){
    if(checkSNT(i))
        snt.push(i);
}
for(let i=0;i< snt.length;i++){
    console.log(snt[i]);
}
snt.map(function (e) {
    console.log(e);
});
snt.map(e=>{
    console.log(e);
});