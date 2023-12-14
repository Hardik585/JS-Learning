var regExp =/ /;

function setPic() {
    var name = document.getElementById("country-Name").value;
    var pic = document.getElementById("country-Pic");
    var textMub = document.getElementById("text-Mobile");
    if (name.trim() == "India") {
        pic.src = "../../public/img/india.jpg";
        textMub.placeholder = "+91 and 10 digit No";
        regExp=/\+91\d{10}/;
    } else if (name.trim() == "USA") {
        pic.src = "../../public/img/USA.png"
        textMub.placeholder="(1)(425) 555-0100";
        regExp=/\(1\)\(\d{3}\)\s\d{3}-\d{4}/;
    }
    else {
        pic.src = "../../public/img/London.jpeg";
        textMub.placeholder="+(44)(20) 1234 5678";
        regExp = /\+\(d{2}\)\(d{2}\)\s\d{4}\s\d{4}/;
    }
}
function RegClick(){
       var textMobile = document.getElementById("text-Mobile").value;
    if(textMobile.match(regExp)){
        document.write("Registerd");
    }
    else{
      var error =  document.getElementById("errorMsg");
      error.innerHTML=`Plz Enter Write Number - ${document.getElementById("text-Mobile").placeholder} `;
    }
}

// lblStock.innerHTML = (stockCheckBox.checked)?"Available":"Out of Stock"; 
            