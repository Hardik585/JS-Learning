<!--
"use strict";
function bodyLoad(){
    document.querySelector("input[type=button]").value="Delete";
}

function delButton(){
   var flag = confirm("confirm to Delete\n or cancel to cancel it ");
    if(flag==true){
        // alert("Delete Successufully");
        // document.write("<h2>Delete . and represent new Screen we can use html tag here also</h2>\n <a href=day7.html>Go Back</a>");
        // document.querySelector("p").innerText="<h2>Delet Confired</h2> ";  //marup not allowed 
        // document.querySelector("p").innerHTML="<h2>Here Marup Allowed but confit occure due to p tag we are represent h2 tag inside p tag </h2>"
        document.querySelector("p").outerHTML="<h2>Here Conflict not occure </h2>"

    }
    else{
        alert("Cancel Delete");
    }
}

-->