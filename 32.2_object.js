/*function tugas(){
    var flightNumber = (20);
    var flightStatus = (20);
    var flight1 = new flightNumber(flightNumber, flightStatus);
    console.log('the flight ' + flight1.number + 'is' + flight1.statys);

}
function flight(flightNumber, status) {
    this.number = flightNumber;
    this.status = status;
}*/

function terbang(flightNumber, flightStatus) {
    //fix the constructor
    this.flightNumber = flightNumber;
    this.flightStatus = flightStatus;
};  
    //assign a flight object to flight1 variable
    
    //output
    console.log('The flight ' + terbang1.flightNumber + ' is ' + terbang1.flightStatus)
    