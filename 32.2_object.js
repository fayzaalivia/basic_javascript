function flight(number, status){
    this.number = number;
    this.status = status;
}

//create an object using a constructor
var flight1 = new flight("NGT 929", "landed");

console.log('The flight ' + flight1.number + 'is '+ flight1.status);