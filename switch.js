//7.1
console.log('switch 7.1')

var menu = 15
/* 1. Bakso, 2. Nasi Padang, 3. Nasi Goreng
*/

switch (menu) {
    case 1:
        console.log("bakso")
    break

    case 2:
        console.log("nasi padang")
    break

    default :
        console.log("nasi goreng")
}

//7.2
console.log('switch 7.2')

var theme = 7

switch (theme){
    case 1:
        console.log("light")
        break

    case 2:
        console.log("dark")
        break

    case 3:
        console.log("norturne")
        break

    case 4:
        console.log("terminal")
        break

    default:
        console.log("indigo")
    }

// oneline IF
    console.log(theme == 1 ? "light" : 
    (theme == 2 ? "dark":
    (theme == 3 ? "norturne" :
    (theme == 4 ? "terminal" : "indigo"))))