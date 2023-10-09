//Declare and assign a variable

let hour = new Date().getHours();

//Create a function

window.onload = function () {

    //Add a function call

    greet();

    //Create a function

    function greet () {

        //Create an if statement

        if ( hour < 18) {

            //Display the message

            document.getElementById("greeting").innerHTML = "Good day";
        }

        //Add else statement
    }
}


