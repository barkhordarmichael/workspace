


// bar chart dats
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const bar4 = document.getElementById('bar4');
const bar5 = document.getElementById('bar5');
const bar6 = document.getElementById('bar6');
const bar7 = document.getElementById('bar7');
const bar8 = document.getElementById('bar8');
const bar9 = document.getElementById('bar9')




let time = 0;
let barOne =0
let barTwo =0
let barThree =0
let barFour =0
let barFive = 0;
let barSix =0
let barSeven =0
let barEight = 0
let barNine = 0;

barOne = 0;
barTwo = 0;
barThree = 0;
barFour = 0;
barFive = 0;
barSix = 0;
barEight = 0;
barNine = 0;
 
 bar1.style.height= barOne*1+"em";
 bar2.style.height= barTwo*1+"em";
 bar3.style.height= barThree*1+"em";
 bar4.style.height= barFour*1+"em";
 bar5.style.height= barFive*1+"em";
 bar6.style.height= barSix*1+"em";
 bar7.style.height= barSeven*1+"em";
 bar8.style.height= barEight*1+"em";

// update hour
//console.log('cookie value: '+ barFive)
//  setInterval(function(){
   
    

//},2000);



let unit = 0;
let negativeDisposition = 0;
let conversion = 0;
const vanEl = document.getElementById('van');
let monthToDateUnits = 0;
let monthtoDateNegativeDisposition = 0;
let monthToDateConversion = 0;
		

let dailytargetEl = document.getElementById('daily_target');

let daily_units = 0;

let rangeSelectorEl = document.getElementById('range_selector')

//update daily target

function updateDailyTarget(){
  document.getElementById('daily_target').value= rangeSelectorEl.value; 
  //console.log("range selector: "+rangeSelectorEl.value)

}
// set daily targets

const d_unitsEl =document.getElementById('d_units');
function updateDailyUnits(){
daily_units++
vanEl.style.marginLeft=daily_units*5+"px"
d_unitsEl.innerHTML=daily_units;
//console.log(daily_units)
if(dailytargetEl.value==daily_units){
alert('Target achieved')

    }
}

// update range slider

function updateRangeSlider(){
  rangeSelectorEl.value = dailytargetEl.value
}
// get figures from local storage
function getLocalStorageData(){

monthToDateUnits = localStorage.getItem("month to date units");
monthtoDateNegativeDisposition = localStorage.getItem("Month to date negative disposition")
monthToDateConversion = localStorage.getItem("month to date conversion");
console.log(`last session data: units: ${unit} dispositions: ${negativeDisposition} month to date conversion${monthToDateConversion}`)
mdUnits.innerText=monthToDateUnits; 
document.getElementById('mdNegative_disposition').innerText=monthtoDateNegativeDisposition;
document.getElementById('mdConversion').innerText= monthToDateConversion;


}


function updateUnits(){
unit++;
monthToDateUnits++;
console.log('daily unit: '+unit)
localStorage.setItem('month to date units',monthToDateUnits)
mdUnits.innerText= monthToDateUnits;

}

function updateNegativeDisposition(){
negativeDisposition++;
monthtoDateNegativeDisposition++
document.getElementById('mdNegative_disposition').innerText= monthtoDateNegativeDisposition;
console.log(negativeDisposition);
console.log('months to date negative: '+monthtoDateNegativeDisposition);
//document.getElementById('negative_disposition').innerText = negativeDisposition;

}
function updateConversion(){

//document.getElementById('conversion').innerText=conversion;

 conversion = daily_units/(daily_units+negativeDisposition)*100;

 //document.getElementById('conversion').innerHTML = conversion.toFixed(2)+"%";
console.log('todays conversion: '+conversion)
}
function updateMonthToDateConversion(){

  //conversion = negativeDisposition/(daily_units+negativeDisposition)*100
       // conversion = conversion.toFixed(1);
	//const monthToDateConversion = (monthToDateUnits-monthtoDateNegativeDisposition)*10
  //document.getElementById('mdMonthToDateConversion').value = monthToDateConversion;
  //console.log(monthToDateConversion)
}
//coversionCalculator()
// update month to date stats


//Local storage



//Guauge script

google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Units', 0],
          ['DMC', 0],
          ['Conversion', 0]
        ]);

        var options = {
          width: 500, height: 220,
          redFrom: 0, redTo: 0,
          yellowFrom: 0, yellowTo: 0,
          greenFrom: 0, greenTo: 0,
          minorTicks: 10
        };
        
        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
        

        chart.draw(data, options);
        
        setInterval(function() {
          data.setValue(0, 1, daily_units);
          chart.draw(data, options);
          //document.getElementById('units').innerHTML= daily_units;
          localStorage.setItem("month to date units", monthToDateUnits);
          document.getElementById("mdUnits").innerHTML=monthToDateUnits;
        }, 1000);
        setInterval(function() {
          data.setValue(1, 1, negativeDisposition);
          chart.draw(data, options);
          document.getElementById('mdNegative_disposition').innerHTML= monthtoDateNegativeDisposition;
          
          localStorage.setItem("Month to date negative disposition", monthtoDateNegativeDisposition)
        }, 2000);
        setInterval(function() {
        
        let monthToDateConversion = monthToDateUnits/(monthToDateUnits+monthtoDateNegativeDisposition)*100;
        //conversion = daily_units/(daily_units+negativeDisposition)*100
        
        console.log(conversion)
        	
          	 data.setValue(2, 1, conversion.toFixed(1));
          chart.draw(data, options);
          
          
          
          document.getElementById('mdConversion').innerHTML= monthToDateConversion.toFixed(1)+'%';
          
          localStorage.setItem("month to date conversion", monthToDateConversion.toFixed(1));
        
        }, 2000);
    
      }
      
      
     

 
  
  function updateCount(){
    const d = new Date()
    const time = new Date().getHours();
    
  if(time === 10 ){
     barOne++;
    console.log('bar one: '+barOne);
    
    document.getElementById('one').innerText= barOne;
     bar1.style.height= barOne*1+"em";
    localStorage.setItem("one", barOne)
  }
  else if(time === 11){
    barTwo++;
    console.log(barTwo) 
    document.getElementById('two').innerText= barTwo;
     bar2.style.height= barTwo*1+"em";
    localStorage.setItem("two", barTwo)
    
  }
   else if(time === 12){
    barThree++;
    console.log(barThree)
     bar3.style.height= barThree*1+"em";
     document.getElementById('three').innerText= barThree;
     localStorage.setItem("three", barThree)
  }
  else if(time === 13){
    barFour++;
    console.log(barFour)
     bar4.style.height= barFour*1+"em";
     document.getElementById('four').innerText= barFour;
    localStorage.setItem("four", barFour)
  }
  else if(time === 14){
    barFive++;
    console.log(barFive)
     bar5.style.height= barFive*1+"em";
     document.getElementById('five').innerText= barFive;
    localStorage.setItem("five", barFive)
  }
  else if(time === 15){
    barSix++;
    console.log(barSix)
     bar6.style.height= barSix*1+"em";
     document.getElementById('six').innerText= barSix;
    localStorage.setItem("six", barSix)
  }
  else if(time === 16){
    barSeven++;
    console.log(barSeven)
    document.getElementById('seven').innerText= barSeven;
    localStorage.setItem("five", barSeven)
     bar7.style.height= barSeven*1+"em";
  }
  else if(time === 17){
    barEight++;
    console.log(barEight);
    document.getElementById('eight').innerText= barEight;
    localStorage.setItem('eight', barEight);
    bar8.style.height= barEight*1+"em";
  }
  else if(time === 18){
    barNine++;
    console.log(barNine);
    document.getElementById('nine').innerText= barNine;
    localStorage.setItem('nine', barNine);
    bar9.style.height= barNine*1+"em";
  }
  else{
    console.log(`it's ${time} it's outside range`)
  }
}

 //chart
 
    function resetStats(){
      monthToDateConversion=0;
      monthtoDateNegativeDisposition=0;
      monthToDateUnits=0;
      
    
      localStorage.setItem("Month to date negative disposition", 0);
      localStorage.setItem("month to date units", 0);
      localStorage.setItem("month to date conversion", 0);
      
    
    }  
      
      
      
      
      
      
      
      
      
      
 // Reset counters
 function resetCounters(){
 	  daily_units=0;
    negativeDisposition= 0;
    conversion= 0;
    rangeSelectorEl.value= 0; 
    d_unitsEl.innerText = 0; 
  
 }