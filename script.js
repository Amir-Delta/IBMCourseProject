function submitForm() {
    
    var recomText = document.getElementById("form_text").value;

    var newRecom = document.createElement("div");
    var newRecomText = document.createTextNode("\" "+recomText+" \"");
    var newP = document.createElement("p");

    newP.appendChild(newRecomText);
    document.getElementById("recomcontainterid").appendChild(newRecom).appendChild(newP).className="recom";
}

function confirmMessage() { 
    var recomName =document.getElementById("form_name").value;
        if (recomName != "") {
            document.getElementById("messageText").innerHTML="Thanks "+recomName+" for leaving a recommendation."
            document.getElementById("messageText").setAttribute("style","font-family: Verdana, Geneva, Tahoma, sans-serif;color:rgb(100,100,100);text-align: center;");}
        else {
            document.getElementById("messageText").innerHTML="Thanks for leaving a recommendation."
            document.getElementById("messageText").setAttribute("style","font-family: Verdana, Geneva, Tahoma, sans-serif;color:rgb(100,100,100);text-align: center;");
        }
            
}

function clearForms() { 
    recomName = document.getElementById("form_name").value=""
    recomName = document.getElementById("form_text").value=""
}
