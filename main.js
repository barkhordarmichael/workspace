/* Calculator function*/
    
function appendDigit(digit) {
    document.getElementById("display").value += digit;
  }

  function appendOperator(operator) {
    document.getElementById("display").value += operator;
  }

  function calculate() {
    try {
      let result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result.toFixed(2);
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }

  function clearDisplay() {
    document.getElementById("display").value = "";
  }
      function calculateOverride() {
let a = document.getElementById("copyOfPremium").value
document.getElementById("premium").value = a
document.getElementById("premium2").value = a
document.getElementById("months").value = a
document.getElementById('quote').value = a

const z = 1.12
var aff = document.getElementById("aaf").value
var overRideValue = a - aff
document.getElementById("result").value = (overRideValue / z).toFixed(2)
  document.getElementById("monthly1").value= (a/12).toFixed(2);
  document.getElementById("monthly2").value= (a/12).toFixed(2);
  document.getElementById("monthly3").value= (a/12).toFixed(2);
  document.getElementById("monthly4").value= (a/12).toFixed(2);
  document.getElementById("monthly5").value= (a/12).toFixed(2);
  document.getElementById("price_diff").value = diff;
  
  
  
}

function calculateExtraMonths(){
let nOfMonths = document.getElementById("noOfMonths").value
let premium = document.getElementById("months").value
let result = premium/nOfMonths
let valueOfMonths = (nOfMonths-12)*result
document.getElementById("extraMonths").value= valueOfMonths.toFixed(2)
document.getElementById("monthly4").value = premium-valueOfMonths.toFixed(2)


}
//console.log(overRideValue)
//displayClock()
function calculateDivision(){
let premium = document.getElementById("premium").value
let division = document.getElementById("division").value
let result = (premium/division)
document.getElementById("output").value=result.toFixed(2)

}

function calculateDiscount() {
var a = document.getElementById("premium2").value
var discount = document.getElementById("discountPercentage").value
var result = (discount / 100) * a;
document.getElementById("discount").value = a - result.toFixed(2);
console.log(result)
}

function calculateDiffInprice(){
  const diff = document.getElementById('quote').value - document.getElementById('web').value 
  
  document.getElementById('price_diff').value=diff;
}
function updateTime() {
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');
	const timeString = `${hours}:${minutes}:${seconds}`;
	document.getElementById('clocky').innerHTML = timeString
}
setInterval(updateTime, 1000);
const d = new Date()
const date = d.getDate();

const today = d.toLocaleDateString();

function myFunction() {
/* Get the text field */
var copyText = document.getElementById("happyWithQuote")

/* Select the text field */
copyText.select();
copyText.setSelectionRange(0, 99999); /* For mobile devices */

/* Copy the text inside the text field */
  
navigator.clipboard.writeText(copyText.value+" called:  "+today);
document.execCommand("happyWithQuote");
console.log(copyText.value);
  
}

function myFunction2() {
/* Get the text field */
var copyText2 = document.getElementById("takePayment");

/* Select the text field */
copyText2.select();
copyText2.setSelectionRange(0, 99999); /* For mobile devices */

/* Copy the text inside the text field */
navigator.clipboard.writeText(copyText2.value+" called:  "+today);
console.log(copyText2.value)
/* Alert the copied text */
//alert("Copied the text: " + copyText.value);
}

function myFunction3() {
/* Get the text field */
var copyText = document.getElementById("reviewQuote");

/* Select the text field */
copyText.select();
copyText.setSelectionRange(0, 99999); /* For mobile devices */

/* Copy the text inside the text field */
navigator.clipboard.writeText(copyText.value+" called:  "+today);
console.log(copyText.value)
}
function myFunction4() {
/* Get the text field */
var copyText = document.getElementById("receivedDocs");

/* Select the text field */
copyText.select();
copyText.setSelectionRange(0, 99999); /* For mobile devices */

/* Copy the text inside the text field */
navigator.clipboard.writeText(copyText.value+" called:  "+today);
console.log(copyText.value)
}
function myFunction5() {
/* Get the text field */
var copyText = document.getElementById("callBack");

/* Select the text field */
copyText.select();
copyText.setSelectionRange(0, 99999); /* For mobile devices */

/* Copy the text inside the text field */
navigator.clipboard.writeText(copyText.value+" called:  "+today);
console.log(copyText.value)
}
/*
Date.prototype.toDateInputValue = (function() {
var local = new Date(this);
local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
return local.toJSON().slice(0, 10);
});
document.getElementById('date-input').value = new Date().toDateInputValue();

function calculateDays() {
var day, month, year;

$('#submit').on('click', function() {
  var date = $('#date-input').val().split("-");
   console.log(date, $('#date-input').val())
  day = date[0];
  month = date[1];
  year = date[2];
  //alert(day + month + year);
  result = (day + month + year)
  console.log(result)


  var day2, month2, year2;


  var date2 = $('#date2-input').val().split("-");
  console.log(date2, $('#date2-input').val())
  day2 = date2[0];
  month2 = date2[1];
  year2 = date2[2];

  console.log(day2 + month2 + year2);
  var result2 = (day2 + month2 + year2)
  var days = result2 - result
  document.getElementById("days").font = "red"
  document.getElementById("days").value = days

})
}
*/

let saveRate
let runningSave
let runningCancel
//let save 
//let cancel 

function calculateSaveRate() {
//var saveRate = document.getElementById("save")
//var saveRate = document.getElementById("rate")

let save = document.getElementById("save").innerHTML
document.getElementById("save").value = save+1
  console.log(save)
let cancel = document.getElementById("cancel").value
document.getElementById("cancel").value = cancel
let rate = document.getElementById("rate").value


result = parseInt(save - cancel)
if (save == cancel) {
  gauge.setAttribute("width",100)
  //document.getElementById("text").innerHTML=50+" %"
} else {
  var saveRate = (result / save) * (100)
  saveRate = saveRate.toFixed(1)
  console.log(result)
  //document.getElementById("rate").value=saveRate
  document.getElementById("dmcBar").value = result * 10
  //document.setAttribute("width",result*40)
  document.getElementById("rate").innerHTML = saveRate + "%"
  //document.getElementById("text").innerHTML=saveRate+" %"
  //document.getElementById("text")
  //text.setAttribute("x",result*25)
}

function getResult() {
  var a = document.getElementById("myLogins")
  var result = a.options[a.selectedIndex].value
  document.getElementById("userName").innerText = result

}
}
var clickcount = 0
var clickcount2 = 0
var clickcount3 = 0

//setInterval(function(){ upDateDmc(); }, 2000);
//setInterval(function(){ cancelCounter(); }, 4000);
//setInterval(function(){ prodCounter(); }, 3000);
function saveCounter() {
clickcount = clickcount+1;
document.getElementById("gcorners1").innerHTML = parseInt(clickcount)

var z = (clickcount - clickcount2)

var result = (clickcount / z) * 100
var dmc = parseFloat(result.toFixed(1))
  console.log(dmc)
//document.getElementById("dmcBox").innerHTML=dmc+"%"
//var size = document.getElementById("blueBox")
//size.setAttribute("width", clickcount)

}

function callCounter() {
clickcount3 = Number(clickcount3) + 1
document.getElementById("callCounter").innerHTML = clickcount3
}

function cancelCounter() {
clickcount2 = Number(clickcount2) + 1;
document.getElementById("rcorners1").innerHTML = clickcount2
var size = document.getElementById("redBox")
//size.setAttribute("width", clickcount2)

var z = (clickcount - clickcount2)
var result = (clickcount / z) * 100
var dmc = parseFloat(result.toFixed(2))


}

function upDateDmc() {

var save = document.getElementById("gcorners1").innerHTML
var cancel = document.getElementById("rcorners1").innerHTML
var result = parseFloat(save - cancel)

if (save == cancel) {
  document.getElementById("dmcBox").innerHTML = 50 + "%"
} else
  var dmc = (result / save * 100)
document.getElementById("dmcBox").innerHTML = dmc.toFixed(1) + "%"
//var saveRate= parseFloat(save/result)*100

//console.log("Save rate 2 :"+saveRate)
}

function addSales() {

console.log(sales.calculateMonthly)
}

function accSales() {
var runningBalance = sales++
console.log(runningBalance)
var accrual = parseFloat(sales) + parseFloat(sales)
//var sales = document.getElementById("premium").value
//let accrual= document.getElementById("moneyPot").value
//document.getElementById("moneyPot").innerHTML= sales
//accrual = document.getElementById("moneyPot").value
document.getElementById("moneyPot").innerHTML = accrual

}

function flrPopup(){
  document.querySelector('.dropdown-box').style.display="block";
 
}
function flrClear(){
  document.querySelector('.dropdown-box').style.display="none";
}
function monthExt(){
  document.querySelector('#month_ext_dropdown').style.display="block";
}
function monthExtClear(){
  document.querySelector('#month_ext_dropdown').style.display="none";;
}