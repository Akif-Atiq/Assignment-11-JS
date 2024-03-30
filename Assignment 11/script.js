let cities = ["Faisalabad", "Lahore","Karachi","Islamabad", "Burawala", "Shekhupura", "Kashmir"]
//clear output button
function clearOutput (){
    document.getElementById("output").innerHTML = ""
}
//simple alert
function simpleAlert (){
    alert("alert button is clicked")
    document.getElementById("output").innerHTML = "alert button is clicked"
}
// print my name 
function printName (){
    let userName = prompt("please enter your name")
    document.getElementById("output").innerHTML = "AhmedAkif"
}
//print all cities
function printAllCities(){
    document.getElementById("output").innerHTML = ""
    for (let i=0; i<cities.length; i++){
        document.getElementById("output").innerHTML += i+1 +") " + cities[i] + "<br />"
    }
}
// add city in list
function addCity(){
    document.getElementById("output").innerHTML = ""
    let newCity = prompt("please enter city name you want to add")
    cities.push(newCity)

    for (let i=0; i<cities.length; i++){
        document.getElementById("output").innerHTML += i+1 +") " + cities[i] + "<br />"
    }
}
// generate table 
function generateTable(){
    tableNumber = +prompt("please enter table number that use want to generate")
    document.getElementById("output").innerHTML = `<h3>Table of ${tableNumber}<h3/> <hr />`
    for(let i=1; i<11; i++){
        let table = tableNumber + " * " + i + " = " + tableNumber*i + "<br />"
        document.getElementById("output").innerHTML += table ;
    }
}