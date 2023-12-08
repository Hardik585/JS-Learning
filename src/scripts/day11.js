
var x = parseInt(prompt("enter Your age"));
document.write(typeof(x));
if(typeof(x)=="number"){
    document.write("\n next year Your age is : "+(x+1));
    document.write(typeof(x));
}
else{
    document.write("Enter Number value is not Corret ");
}

// if(isNaN(x)){
//      document.write("enter value is wrong  " +x);
// }
// else{
//     document.write("Well Write" +x);
// }