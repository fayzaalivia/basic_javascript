console.log('perulangan break')
for(i=1;i<=5;i++){
    if(i==3){
        break;
    }
    console.log(i)
}

console.log('perulangan continue')
for(i=1;i<=5;i++){
    if(i==3){
        continue;
    }
    console.log(i)
}

console.log('perulangan continue tugas')
for(i=1;i<=15;i++){
    if(i==13){
        continue;
    }
    console.log(i)
}

//nyari sum
console.log('perulangan continue sum')
var sum = 0
for(i=4;i<8;i++){
    if(i==6){
        continue;
    }
    sum += i;
}
console.log(sum)