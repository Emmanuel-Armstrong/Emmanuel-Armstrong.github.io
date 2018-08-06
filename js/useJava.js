function getProducts(){
  
  var pflApp = document.getElementById("PFLOrderingProblem");
  if (pflApp != null){
    pflApp.getPackages();
    var products = pflApp.products;
  }
}
