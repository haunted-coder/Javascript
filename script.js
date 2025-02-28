var mystudent ={
name: "Tabrin",
age: 13,
grade: 7

};
var mystudentJSON = JSON.stringify(mystudent);  //STRIGFIED VERSION
var newstudentobject = JSON.parse(mystudentJSON)  //CONVERTED TO OBJECT



document.getElementById("result").innerHTML = newstudentobject.grade



document.getElementById("result").innerHTML = " My name is " + newstudentobject.name + " I study in grade " + newstudentobject.grade




