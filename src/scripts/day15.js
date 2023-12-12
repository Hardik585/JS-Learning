function submitFun(){
    var fullEmail = document.getElementById("fullEmail").value.trim();
    if(fullEmail.endsWith("@gmail.com")){
    var atPos = fullEmail.indexOf("@");
    var email = fullEmail.substring(atPos , 0);
    var domain = fullEmail.substring(atPos+1);
    
    document.getElementById("email").innerHTML=email;
    document.getElementById("domain").innerHTML = domain;
}
  else{
    alert("Plz enter right domain ");
  }
}

var product ="Shoes: Nike-400 , deo-200";
 var[shoes , deo] = product.split(',');
 var details = product.slice(',');
 
document.write(
    `Name : ${shoes} <br> Name : ${deo} <br>`
);
document.write(
    `Name of the shoes is : ${shoes.substring(shoes.indexOf("-") ,shoes.indexOf(" "))}
    <br> 
      price is : ${shoes.substring(shoes.indexOf("-") + 1)}`
);