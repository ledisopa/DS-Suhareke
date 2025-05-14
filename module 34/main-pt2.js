var circle=document.getElementById("circle");
var ShowTime=document.getElementById("time");
var timeStart=new Date().getTime();


function shouCircle()
{
    circle.style.display='block';
       circle.style.top=Math.random()*500 + 'px';
       circle.stylr.left=Math.random() * 900 + 'px';
       circle.style.backgroundColor=randomColor();
       timeStart=new Date().getTime();
}

shouCircle();

circle.onclick = function (){
    circle.style.display='none';
    setTimeout(showCircle,1000);
    var timeEnd=new Date().getTime();
    var time=(timeEnd - timeStart)/1000;
    ShowTime.innerHTML = time + 's';
}

function randomColor(){
    var s='0123456789ABCDEF';
    var color='#';

    for(var i = 0; i<6; i++){

        color=color + s[Math.floor(Math.random()*16)]
    }

  return color;
}