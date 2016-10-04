// Get the modal
var modal = document.getElementsByClassName('overlay')[0];

// Get the button that opens the modal
var menuButton = document.getElementsByClassName("menuButton")[0];

// Get the <span> element that closes the modal
var exit = document.getElementsByClassName("exit")[0];

// When the user clicks on the button, open the modal 
menuButton.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on (x), close the modal
exit.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
