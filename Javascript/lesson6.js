
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

    for (let i = 0; i < 3000; i++) {
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