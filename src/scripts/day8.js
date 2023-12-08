<!--
"use strict";
function saveAndShowDetails(){
     document.getElementById("Register-Btn").style.display="none";
     document.getElementById("Product-Details").style.display="block";

      var ProductName = document.querySelector("#Product-Name").value;
     var ProductPrice = document.getElementById("Product-Price").value;
     var ProductCity = document.querySelector("#Product-City").value;
     var ProductManuFactureDate = document.querySelector("#Product-Manufacture-Date").value;

       var ProductStock = document.getElementById("Product-Stock");
         if(ProductStock.checked){
            ProductStock ="Available";
         }
         else{
            ProductStock="Out Of Stock";
         }
     document.getElementById("Pro-Name").innerHTML=ProductName;
     document.getElementById("Pro-Price").innerHTML=ProductPrice;
     document.getElementById("Pro-City").innerHTML=ProductCity;
     document.getElementById("Pro-Date").innerHTML=ProductManuFactureDate;
     document.getElementById("Pro-Stock").innerHTML=ProductStock;
}

function editProduct(){
       document.getElementById("Register-Btn-InsideForm").innerHTML="Save";
       document.getElementById("Register-Btn-InsideForm").className="btn btn-info";
}

-->