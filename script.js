//Declare and assign a variable

let hour = new Date().getHours();

//Create a function

window.onload = function () {
    greet();
    function greet () {
        //Create an if statement

        if ( hour > 18) {

            //Display the message

            document.getElementById("greeting").innerHTML = "Good evening";
        }
    }
}


