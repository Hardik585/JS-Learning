// alert("Checking");
function bookedTicket(){
      document.getElementById("ShowDetails").style.display="block";

      document.getElementById("Book-Btn").innerHTML="Booked_Another";
   var movieName =document.getElementById("movieName").value;
   var movieHall = document.getElementById("cinemaName").value;
   var movieDay = document.getElementById("day").value;
   var movieTime = document.getElementById("timing").value;

     if(movieName=="Pathan"){
        document.getElementById("imgTag").src="../../public/img/pathan.jpeg";
     }
     else if(movieName=="Animal") {
        document.getElementById("imgTag").src="../../public/img/animal.jpeg";
     }else {
        document.getElementById("imgTag").src="../../public/img/tiger3.jpeg";
     }

     document.getElementById("Movie-Name").innerHTML=movieName;
     document.getElementById("Movie-Hall").innerHTML=movieHall;
     document.getElementById("Movie-Day").innerHTML=movieDay;
     document.getElementById("Movie-Timing").innerHTML=movieTime;
     
}