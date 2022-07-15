inputArray = document.querySelectorAll("INPUT");
console.log(inputArray);
const password = inputArray[4];
const confirm_password = inputArray[5];
for(let i = 0; i < inputArray.length; i++){
    inputArray[i].addEventListener("keydown", function(e){
        var whichkey = checkKey(e);
        if(whichkey == 13){
            e.preventDefault;
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