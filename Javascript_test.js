console.log("\x1b[38;2;255;0;0mThis text is red\x1b")


function colourchange() {
    text = document.getElementById("textchange");
    var r = Math.random()*256
    var g = Math.random()*256;
    var b = Math.random()*256;
    text.style.color = `rgb(${r}, ${g}, ${b})`;

}

document.getElementById("change").addEventListener("click", function(event) {
    for (let i = 0; i < 10000; i++) {
        setTimeout(function() {
            colourchange();
        }, 100*i)
    } 
})
