var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');

//button.onclick = function(){
 //   text.innerHTML = input.value;

//}

var input1 = document.querySelector('#input1_id');
var input2 = document.querySelector('#input2_id');
var btn2 = document.querySelector('#btn2_id');
var ans = document.querySelector('#answer');

btn2.addEventListener("click",function(){
    ans.innerHTML = parseInt(input1.value) + parseInt(input2.value);
});

button.onclick = function (){
    if(input.value > 10)
    {
        text.innerHTML="input valeu is greater than 10";
    }
    else if (input.value < 10){
        text.innerHTML = "input value is less than 10";
    }
    else
    {
        text.innerHTML = "input value is equal to 10";
    }
}