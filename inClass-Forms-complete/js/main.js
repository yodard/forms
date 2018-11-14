// Create a document ready function to check and see if the page has been loaded, and is ready to take commands

$(document).ready(function(){
    // Create a small alert to check and see if js is loaded.
    // alert("i'm working"); // un-comment this line to check.

    // Lets set a few variables to hold our functions

    // This function will trigger when a button has been clicked
    var clickButton = function() {
        // Check and see if the function has been clicked
        console.log("click");

        // lets create a variable to capture what button has been clicked

        var btnClick = $(this).attr("id");

        // Lets pass the variable into the console.log
        console.log(btnClick + " Has been Clicked");

    }

    // This function will trigger once a button has been hovered

    var hoverButton = function() {
        // check and see if the function has been hovered
        console.log("hover");

        // Lets also check and see what buttons have been hovered. Let's set a variable

        var btnHover = $(this).attr("id");

        // Lets pass the variable into the console.log

        console.log(btnHover + " Has been hovered");
    }


    // Okay, lets write the listener
    // We will look for anytihng in the DOM (Document object Model that has teh class of war-btn)

    $(".war-btn").click(clickButton).hover(hoverButton);
    

});