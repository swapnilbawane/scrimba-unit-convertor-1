function customvalue() 
{ 

// Get input and convert it into a number
let customValueEntered = +(document.getElementById("input-area").value);

// Update value in the upper part 
document.getElementById("number-entered").textContent = customValueEntered; 

// Calculate unit conversions 
let resultLengthFeet = customValueEntered*3.28084;
let rndFeet = resultLengthFeet.toFixed(3);

let resultLengthMeters = customValueEntered*0.3048;
let rndMeters = resultLengthMeters.toFixed(3);

let resultVolumeGallons = customValueEntered*0.264172;
let rndGallons = resultVolumeGallons.toFixed(3);

let resultVolumeLitres = customValueEntered*3.785411784;
let rndLitres = resultVolumeLitres.toFixed(3);

let resultMassPounds = customValueEntered*2.20462;
let rndPounds = resultMassPounds.toFixed(3);

let resultMassKilos = customValueEntered*0.453592;
let rndKilos = resultMassKilos.toFixed(3);

// Display it on screen 
document.getElementById("length-result").textContent =  customValueEntered + " meters = " + rndFeet + " feet " + " | " + customValueEntered + " feet = " + rndMeters + " meters";

document.getElementById("volume-result").textContent = customValueEntered + " litres = " + rndGallons + " gallons " + " | " + customValueEntered + " gallons = " + rndLitres + " litres "; 

document.getElementById("mass-result").textContent = customValueEntered + " kilos = " + rndPounds + " pounds " + " | " + customValueEntered + " pounds = " + rndKilos + " kilos "; 

}

function refresh () 
{
    // Update the top area with 0
    document.getElementById("number-entered").textContent = 0;

    // Use .value for input type to reinitialize it to 0. 
    document.getElementById("input-area").value = 0;
    document.getElementById("length-result").textContent = " ";
    document.getElementById("volume-result").textContent = " ";
    document.getElementById("mass-result").textContent = " ";

}