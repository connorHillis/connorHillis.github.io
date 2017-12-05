/* global ajax */
/* global parseResponse */
    var container = document.getElementById('container');
    var url = "https://api.openweathermap.org/data/2.5/weather?q="; 
    var city = "Sacramento"; 
    var apiKey = "8b66adf5ddf26bd7ca26ba367901145a"; 

    url += city + "&appid=" + apiKey; 
    ajax(url, function(resp) { 
        resp = parseResponse(resp); 
        document.getElementById("resultArea").innerHTML = resp;
    }); 

    /* global ajax */
/* global parseResponse */

    function changeCityInfo() {
     
     var x =  document.getElementById("textField").value;
     var container = document.getElementById('container');
     var url = "https://api.openweathermap.org/data/2.5/weather?q="; 
     var city = x; 
     var apiKey = "8b66adf5ddf26bd7ca26ba367901145a"; // private/personal


     url += city + "&appid=" + apiKey + "            "; 
     ajax(url, function(resp) { 
     resp = parseResponse(resp); 
     console.log(resp);
     document.getElementById("resultArea").innerHTML = resp;
   
    }); 
    }
    

function ajax(url, handler) {
    var req = new XMLHttpRequest();
    if (!req) {
        alert('Browser not supported.');
        return;
    }

    req.onreadystatechange = function() {        
        var resp;        
        if (this.readyState === XMLHttpRequest.DONE) {           
            if (this.status === 200) {               
                resp = this.responseText;            
                handler(resp);            
            } else {               
                handler('Ajax error, status: ' + this.status);           
            }       
        }    
    };
    req.open('GET', url);
  req.send();
}