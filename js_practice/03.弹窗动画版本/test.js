var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.querySelector(".close");

btn.onclick = function() {
    console.log("xx");
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}