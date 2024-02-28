//Fetching data from a json file, the . indicates a movement out of the current file and the / means a movement into a file
fetch("./oppenheimer.json")
.then(response => response.json())
.then(ourData =>{
    //creating a new let variable that is equal to the incoming data from the json file
    let gita = ourData
    console.log(gita);
    //A for loop that is executed based on amount of categories that currently exist in the JSON file
    for (chapter in gita){
        
        storage = document.getElementById('jsonNames')
        //Adding data which is inside the JSON file under the current category and under the subcategory of "name"
        storage.innerHTML += gita[chapter]["name"]
    }

})
//A statement that console logs any error if there is any during executing this code (very useful for debugging)
.catch(error =>{
    console.log(error);
})

//An array, basically a list of strings or other data types inside of it
let mathTeachers = ['mice', 'rat', 'rodent', 'vermin'];

//References the third data point inside the array
mathTeachers[2];

let isTeachers = ['pikachju', 'the bird from pokemon', 'charizrad']

//Creating a new array which is an array that contains both data from mathTeachers and isTeachers
let combined = mathTeachers.concat(isTeachers);


//A loop that basically runs for every single element inside the array
mathTeachers.forEach(element => {
    alert(element);
})
//Creating a new variable that takes in what the user typed into the window prompt that appears
requested = window.prompt("request teacher")

if(mathTeachers.includes(requested)){
    alert(`yes ${requested} is avaliable`)
} else {
    alert(`sorry! ${requested} is not avaliable`)
}

//A class, basically a template for creating an instance for an object
class circle {
    //The constructor, which basically outlines all the key variables that make up this object
    constructor(radius, units) {
        this.radius = radius;
        this.units = units;
    }

    //Multiple functions tied towards this class
    diameter() {
        return this.radius*2 + ` ${this.units}`
    }

    area() {
        return Math.round(Math.PI*this.radius**2) + ` ${ this.units} \u00B2`
    }

    volume() {
        return Math.round((4/3)*Math.PI*this.radius**3) + ` ${ this.units} \u00B3` //ascii escape code
    }
}

//Creating a new instance of the class that has a radius of 7 and a unit of cm
var thing = new circle(7, 'centimeters');
//Creating an alert that calls upon the new object's function of area with the given parameters of 7 for the radius and cm for the units
alert(`the Area of this circle is ${(thing.area())}`);
alert(`the Volume of this circle is ${(thing.volume())}`);
alert(`the diameter of this circle is ${(thing.diameter())}`);



//A constant, a type of variable which the value cannot be changed at all
const constant = "20"

//A let variable, a type of variable that changes its 
//value based on where it is defined. For example, i is defined as 
//"21" here but i will be defined as 0 instead in the for loop
let i = "21"

//A variable, a type of variable that can change in value and are avaliable throughout the function they're defined in
var variable = "19"


//document.getElementById allows you to get a specific element based off of a element that has the same id inside your html file.
var button = document.getElementById("title")


//A for loop, essentially iterates itself over and over based off of the parameters inside,
//for this example, we can see that the for loop will loop over itself 5 times, as each iteration i increased by 2
//and will reach the value of 10 after 5 iterations.
for(let i = 0; i <= 10; i += 2){
    console.log(i)
}

console.log(i)

//An if else statement, a type of conditional statement that allows you to execute something based off of whether or not a specific parameter is triggered
if(constant == 20){
    button.style.color = "red"
} else {
    button.style.display = "none"
}


//A function, a type of parameter that allows you to create code that only runs when the function is called upon.
function colour() {
    let colourbutton = document.getElementById("title")

    for (let i = 0; i < 1000; i++) {
        //setTimeout is a special function that allows you to execute the code inside its function after a defined amount of milliseconds
        setTimeout(() => {
            //Math.random() is a function that gives you a random number between 0 and 1

            //Math.floor() returns a rounded up value of the number inside its parameters
            let r = Math.floor(255 * Math.random())
            let g = Math.floor(255 * Math.random())
            let b = Math.floor(255 * Math.random())
        
            //.style allows you to change the styling of a element

            //${} is a type of parameter that allows you to put in specific values of a variable inside a string
            colourbutton.style.color = `rgb(${r}, ${g}, ${b})`
        }, 100*(1.1**(i)));
    }


}