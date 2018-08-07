/* global Java */

var pflApp = Java.type("pflorderingproblem.UI");

function getProducts(){  
  if (pflApp !== null){
    pflApp.getPackages();
    var products = pflApp.products;
  }
}
