var jam = 18; //input/nilai awal


if (jam >= 13){ //jika 'jam' lebih besar atau sama dengan 13
    console.log('PM')  //buat output "PM"
}else {  //selain itu
    console.log("AM")  //buat output "AM"
}

var cekJam = (jam >= 13) ? "PM":"AM";
console.log(cekJam)