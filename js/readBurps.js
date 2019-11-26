var flatfile = 1;
var xr = new XMLHttpRequest();
var burps;
var displayArea = fc.getid("burplist");
console.log(displayArea);
function readBurps(t = "burps.txt"){
	xr.open("GET", t, false);
	xr.onreadystatechange = function () {
		if(xr.readyState === 4 && xr.status === 200) {
			console.log(xr.response);
			burps = xr.response.split("\n");
			console.log(burps);
			for(var i=0; i<burps.length; i++){
				if(burps[i].length > 0){
					var burp = JSON.parse(burps[i]);
					console.log(burp);
					console.log(burp.handle);
					console.log(burp.message);
		
		
					// Ok, write html elements
					var burpstring = "<div class=\"messageBox\">" +
					"<span class=\"handle\"><small>" + burp.handle +
					"</small></span><br/><span class=\"message\">" + burp.message +
					"</span></div>";
					
					displayArea.innerHTML += burpstring;
				}
			}
		}
	}
	xr.send();
}