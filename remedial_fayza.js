//variabel
console.log("==variabel==");
var hewan ="burung"
console.log(hewan ,"\n");

//comment
console.log("==comment==" , "\n")
//var i ="ikan" (ini singleline hanya 1 baris saja)
/* var b ="ayam"
(ini multiline untuk lebih dari 1 baris)*/

//assigment
console.log("==assignment==")
var v = 5
v+=10;
console.log("nilai assignment : " + v, "\n");

//comparison
console.log("==comparison==")
var b = 8
var c = 10
b == c;
console.log(b == c)
b != c;
console.log(b != c)

//if
console.log("==if==")
var s =8
var h =10
if(s<h){
    console.log("okee","\n")
}

//if else
console.log("==if else==")
var q = 6
var r = 2
if(q>r){
    console.log("oke benar")
}else{
    console.log("yahh salah")
}

//switch case
console.log("\n","==switch case==")
var menu =6
switch (menu){
    case 1:
    console.log("ayam bakar");
    break;

    case 2:
    console.log("ikan asem manis");
    break;
    
    case 3:
    console.log("soto betawi");
    break;

    case 4:
    console.log("es kelapa");
    break;

    default:
    console.log("air putih");
}

//for
console.log("\n","==for==")
for(o=1;o<=8;o++){
    console.log(o);
}

//while
console.log("\n","==while==")
var y = 1;
while(y<=8){
    console.log(y);
    y+=1;
}

//do while
console.log("\n","==do while")
var x = 3;
do{
    console.log(x)
    x+=1
}while(x<=5)