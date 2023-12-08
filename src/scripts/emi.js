function amountChange() {
    document.getElementById("text-Amount").value = document.getElementById("range-Amount").value;
}
function yearsChange() {
    document.getElementById("text-Years").value = document.getElementById("range-Years").value
}
function intrestRateChange() {
    document.getElementById("text-IntrestRate").value = document.getElementById("range-IntrestRate").value
}
function calculateEmi() {
    var pricipal = parseInt(document.getElementById("text-Amount").value);
    var year = parseInt(document.getElementById("text-Years").value * 12);
    var rate = parseFloat(document.getElementById("text-IntrestRate").value / 12 / 100);

    // alert(pricipal+"\n"+year+"\n"+rate);
    var emi = (pricipal * rate * Math.pow(1 + rate, year)) / (Math.pow(1 + rate, year) - 1);

    document.getElementById("showResult").innerHTML = "Your monthy installment amount is <b> <span class='text-primary'> &#8377;" + Math.round(emi) + "</span></b> for " + pricipal + " in " + year + "months"
}

function textAmountChange() {
    document.getElementById("range-Amount").value = document.getElementById("text-Amount").value;
}
function textYearChange() {
    document.getElementById("range-Years").value = document.getElementById("text-Years").value;
}
function textRateChange() {
    document.getElementById("range-IntrestRate").value = document.getElementById("text-IntrestRate").value;
}