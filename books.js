
document.getElementById("MiniBankBookClosed1").addEventListener("click", displayDate1);
document.getElementById("MiniBankBookClosed2").addEventListener("click", displayDate2);
// document.getElementById("MiniBankBookClosed3").addEventListener("click", displayDate3);

var aaron = 3;

function displayDate1() {
    
    var a = document.getElementById("checkbalance"); 
    a.setAttribute("href", "/skem/checkbalance/1");

    var a = document.getElementById("transferpayment"); 
    a.setAttribute("href", "/skem/transferpayment/1");

    var a = document.getElementById("checkbalancedisable"); 
    if ( a != null) {
        a.removeAttribute("id")
        a.setAttribute("class", "optionbutton");
    }

    var a = document.getElementById("transferpaymentdisable"); 
    if ( a != null) {
        a.removeAttribute("id")
        a.setAttribute("class", "optionbutton");
    }

    document.getElementById("MiniBankBookClosed1").setAttribute("id", "MiniBankBookOpen1");
    document.getElementById("MiniBankBookOpen2").setAttribute("id", "MiniBankBookClosed2");
   
    aaron = 1;
    
}



function displayDate2() {

    var a = document.getElementById("checkbalance"); 
    a.setAttribute("href", "/skem/checkbalance/2");

    var a = document.getElementById("transferpayment"); 
    a.setAttribute("href", "/skem/transferpayment/2");

    var a = document.getElementById("checkbalancedisable"); 
    if ( a != null) {
        a.removeAttribute("id")
        a.setAttribute("class", "optionbutton");
    }

    var a = document.getElementById("transferpaymentdisable"); 
    if ( a != null) {
        a.removeAttribute("id")
        a.setAttribute("class", "optionbutton");
    }
    
    
    document.getElementById("MiniBankBookClosed2").setAttribute("id", "MiniBankBookOpen2");
    document.getElementById("MiniBankBookOpen1").setAttribute("id", "MiniBankBookClosed1");

    aaron = 2;
    
    // document.getElementById("MiniBankBookOpen3").setAttribute("id", "MiniBankBookClosed3")
    
}



// function displayDate3() {
//     document.getElementById("MiniBankBookClosed3").setAttribute("id", "MiniBankBookOpen3")
//     document.getElementById("MiniBankBookOpen1").setAttribute("id", "MiniBankBookClosed1")
//     document.getElementById("MiniBankBookOpen2").setAttribute("id", "MiniBankBookClosed2")
    
// }

