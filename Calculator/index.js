var nums = document.querySelectorAll(".num-item");
var ops = document.querySelectorAll(".op-item");
var txtArea = document.querySelector(".text-area");
for (var i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", function(){
        txtArea.value += Number(this.innerText);
        
    });
}

for (var i = 0; i < ops.length; i++) {
    ops[i].addEventListener("click", function(){
        var opItem = this.innerText;
        if (opItem == "=" ) {
            txtArea.value = eval(txtArea.value);
            console.log("equal" + txtArea.value);
        }
        else if (opItem == "C") {
            txtArea.value = "";
        }
        else {
            txtArea.value += (" " + this.innerText + " ");
        }
    });
}



document.addEventListener("keypress", function(evt) {
    if (Number(evt.key) >= 0 && Number(evt.key) <=9) {
        txtArea.value += Number(evt.key);
        // console.log(evt.key);
        // for (var i = 0; i < nums.length; i++) {
        //     if (evt.key == Number(nums[i].innerText)) {
        //         console.log(this.innerText);
        //     }
        // }
        
    }
    else if(evt.key == "+" || evt.key == "-" || evt.key == "/" || evt.key == "*") {
        txtArea.value += (" " + evt.key + " ")
    }
    else if (evt.key == "C" || evt.key == "c") {
        txtArea.value = "";
    }
    else if (evt.key == "=" || evt.keyCode === 13) {
        txtArea.value = eval(txtArea.value);
        console.log("equal");
    }
    else {
        console.log("nahhhh");
    }
});
