var students = ["john","mark","ana"];

//Challange1

for(i=0;i<students.length;i++){
    document.write(students[i]+'<br>');
}

var names_input=document.getElementById("name_input");
var btnAdd=document.getElementById("btnAdd");
var btnShow=document.getElementById("btnShow");

btnAdd.onclick=function(){
    students.push(names_input.value);
}

btnShow.onclick=function(){
    for(i=0; i<students.length; i++){
        document.write(students[i]+'<br>');
    }
}