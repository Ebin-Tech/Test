alert("Hai");



document.getElementById("functionBtn").addEventListener("click", displayDate);

function displayDate() {
    const students =["Ebin","Neethu","Nidhi","Ashna","Ebin","Sreelakshmi","Sonu","Sonia","Athulya","Soorya","Athira","Roopak","sofy","Ronald","Robin","Rebin",];
    
    var random =Math.round(16*Math.random());
    
    
    document.getElementById("demo").innerHTML = students[random] ;
  }