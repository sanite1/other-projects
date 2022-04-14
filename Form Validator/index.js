var username = document.querySelector(".username");
var err = document.querySelector("p");

username.addEventListener("input", function(evt) {
    var currentVal = evt.target.value;
    // console.log(currentVal);
    var pattern = /^[\w]{6,8}$/;
    if (pattern.test(currentVal) == true) {
        console.log("True");
        err.classList.add("hidden");
        err.classList.remove("unhidden");
    }
    else {
        err.classList.add("unhidden");
        err.classList.remove("hidden");
    }
});