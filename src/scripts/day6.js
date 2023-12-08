<!--
"use strict";
function bodyOnload() {
    window.document.images[0].src = "../../public/img/groot.jpg";
    // window.document.images[0].width=200;
    window.document.forms[0].elements[1].value ="Register";
    window.document.forms[1].elements[1].value = "login";

    //by name 
    pic.src="../../public/img/groot.jpg";
    formReg.btnReg.value="Register";
    formLog.btnLogin.value="Login";

    //by Id 
    document.getElementById("btnReg").value="Register";

    // By QuerySelector
    document.querySelector(".Reg").value="Register By Query Selector";  

}

-->