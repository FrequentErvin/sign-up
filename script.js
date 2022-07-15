inputArray = document.querySelectorAll("INPUT");
console.log(inputArray);

for(let i = 0; i < inputArray.length; i++){
    inputArray[i].addEventListener("keydown", function(e){
        var whichkey = checkKey(e);
        if(whichkey == 13){
            /* e.preventDefault; */
            focusNext(i)
        }
    });
}
function checkKey(e){
    return e.which;
}
function focusNext(i){
    if(i < inputArray.length - 1){
        console.log(inputArray[i+1]);
        inputArray[i+1].focus();
    }
}
var check = function() {
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const message = document.getElementById('message');
        if (password == confirm_password) {
        message.style.color = 'green';
        message.innerHTML = '*Passwords match';
      } else {
        message.style.color = 'red';
        message.innerHTML = '*Passwords do not match';
      }
}