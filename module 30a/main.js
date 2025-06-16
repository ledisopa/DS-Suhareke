var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;


function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
 HEAD
    var minutes = currentTime.getMinutes;
    var seconds = currentTime.getSeconds;

    var meridian = "AM";
    if(hours >= noon){
        meridian = "PM";
    }


    var clockTime = hours + ":" + minutes + ":" + seconds + " " ;
    clock.innerText = clockTime;
    changeImage();

 HEAD


    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";
    if(hour >= noon){
        meridian = "PM";
    }
    var clockTime = hours + ":"+ minutes + ":" + seconds + " " + meridian;
    clock.innerText = clockTime;
    changeImage();
 aafcb826e6a4ee31e6c9ab08c7196382d17923fe
 a88c9bd7dec8e70e73ddf1581834cc57492d3bd8
}

var oneSecond = 1000;

 HEAD
setInterval(showCurrentTime, oneSecond);



 HEAD
setInterval(showCurrentTime, oneSecond);

function changeImage(){
    var time = new Date ().getElementById
}

setInterval (showCurrentTime, oneSecond);
function changeImage(){
    var time = new Date (). getHours();
    console.log(time);
    var image = "ds_clock.png";
    var imageHTML = document.getElementById("timeImage");
    if(time == wakeuptime){
        images = "morning.gif";
        console.log("morning");

    }
    else if (time == dstime){
        images = "class.gif";
    }
    else if(time == sleepTime){
        images = "night.gif";
    }
    imageHTML.src = image;
    console.log(imageHTML.src);
        
    
}
function updateClock(){
    var wakeuptimeselector = document.getElementById('wakeUpTimeSelector');

    wakeuptime = wakeuptimeselector.value;

    var dsTimeSelector = document.getElementById('dsTimeSelector');
    dstime = dsTimeSelector.value;

    var sleepTimeSelector=document.getElementById('sleepTimeSelector');
    sleepTime = sleepTimeSelector.value;
}
var saveButton = document.getElementById("save button");    var dsTimeSelector = document.getElementById('dsTimeSelector');

saveButton.addEventListener("click",updateClock);
 aafcb826e6a4ee31e6c9ab08c7196382d17923fe
 a88c9bd7dec8e70e73ddf1581834cc57492d3bd8
