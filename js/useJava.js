/* global Java */

var pflApp = Java.type("pflorderingproblem.UI");

var firstName;
var lastName;
var companyName;
var address1;
var address2;
var city;
var state;
var postalCode;
var countryCode;
var email;
var phoneNumber;

function getProducts(){  
  if (pflApp !== null){
    pflApp.getPackages();
    var products = pflApp.products;
  }
}

function setCustomer(){  
    firstName = document.getElementById("first_name").innerHTML;
    lastName = document.getElementById("last_name").innerHTML;
    companyName = document.getElementById("company").innerHTML;
    address1 = document.getElementById("street_address").innerHTML;
    address2 = document.getElementById("street_address2").innerHTML;
    city = document.getElementById("city").innerHTML;
    state = document.getElementById("state").innerHTML;
    postalCode = document.getElementById("zipCode").innerHTML;
    countryCode = document.getElementById("country").innerHTML;
    email = document.getElementById("email").innerHTML;
    phoneNumber = document.getElementById("phone_number").innerHTML; 
}
