const isItTrue = document.getElementById("idofNavbar")

var string = 5;

if(isItTrue.class === "navbar"){
    isItTrue.style.color = "white"
} else if(string >= 2){
    console.log("its false")
} else{
    console.log("Hi!")
}

switch (string){
    case 1:
        console.log("uno")
    case 2:
        console.log("dos")
        break;
    case 3:
        console.log("tres")
        break;
    default:
        console.log("¡lo siento!")
}

