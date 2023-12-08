function bodyLoad(){
    // ) DOM hierarchy 
    // b) By using Name 
    // c) By using ID 
    // d) By query selector 
    document.querySelector("h1").innerHTML="Hi JS is working";
   var string  = location.search;
    userName = string.substring(string.indexOf("=")+1);
//     string = location.search; 
//    username = string.substring(string.indexOf("=")+1); 
          document.querySelector("span").innerHTML="<h2> Hi "+ userName +"</h2>";

         var age = prompt("Enter Your Age");
         alert(userName + "Your Age is "+ age);
}