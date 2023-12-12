function themeChanger(){
    var checkBoxValue = document.getElementById("form-checkbox");
   var formBlock = document.getElementById("form-block");
   if(checkBoxValue.checked){
    formBlock.className="themeChanger";
    document.querySelector(".btn").className="btn btn-light ";
   }
   else{
    formBlock.className="";
    document.querySelector(".btn").className="btn btn-dark";
   }
   
}
function checkFirstChar(){
    var userName = document.getElementById("user-name").value;
    var userNameError = document.getElementById("user-name-error");

    if(userName.charCodeAt(0)>=65 && userName.charCodeAt(0)<=90){
        userNameError.innerHTML = "";
    }
    else{
        userNameError.innerHTML = "Name must Start with Capital Letter".fontcolor('red');
    }
}