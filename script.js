//Declare and assign a variable

let hour = new Date().getHours();

//Create a function

window.onload = function () {

    //Add a function call

    greet();

    //Create a function

    function greet () {

        //Create an if statement

        if ( hour < 10) {

            //Display the message

            document.getElementById("greeting").innerHTML = "Good morning";
        }

        //Add else if statement

        else if (hour < 20) {

            //Display message

        }

        //Add else statement

        else {
            
            //Display message

            document.getElementById("greeting").innerHTML = "Good evening";
        }
    }
}


