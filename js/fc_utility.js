/* Federico Contreras vanilla JS utility functions ... */
var fc = new Object();

fc.getw = function(){
	// gets window width
	return window.innerWidth;
}

fc.geth = function(){
	// gets window height
	return window.innerHeight;
}

fc.getdpr = function(){
	var r = window.devicePixelRatio;
	return r;
}

fc.getid = function(p) {
    // gets an item by id and returns that item
    var r = document.getElementById(p);
    return r;
}

fc.gettags = function(p) {
    // gets all elements of a given tag and returns a nodelist / array of those items
    var r = document.getElementsByTagName(p);
    return r;
}

fc.getclass = function(p){
	// gets all elemenst with a given class name and returns a nodelist / array of those items
	var r = document.getElementsByClassName(p);
	return r;
}

fc.find = function(t, n, c) {
    /* 
    fc.find() : Finds tags (String t)
    by the content (String c) 
    of a given attribute (String n)
    and returns an array of those tags.
            
    USAGE: fc.find( String t = Tag Name, String n = Attribute Name, String c = Content Search Term);
    */
    
    // Initialize our return array
    var tList = new Array();

    if (t == null || n == undefined || c == undefined) {
        console.log("fc.find() : Finds tags (String t) by the content (String c) of a given attribute (String n) and returns an array of those tags\nUSAGE:\nfc.find( String t = Tag Name, String n = Attribute Name, String c = Content Search Term )");

        //alert("fc.find() : finds tags (String t) by the content (String c) of a given attribute (String n) and returns an array of those tags\nUSAGE:\nfc.find( String t = Tag Name, String n = Attribute Name, String c = Content Search Term)");
    } else {
        // get list of tags
        var l = document.getElementsByTagName(t);
        // now look for which tags have the attribute containing the specific search term
        for (var i = 0; i < l.length; i++) {
            if (l[i].getAttribute(n) != undefined) {
                // found a non-blank attribute of the correct name, do we add it?
                // console.log("Found attribute: "+n+": "+l[i].getAttribute(n));

                if (l[i].getAttribute(n) == c) {
                    console.log("Found matching (\"" + c + "\") attribute: " + n + ": \"" + l[i].getAttribute(n) + "\"");
                    tLIst.push(l[i]);
                }
            }
        }

        return tList;
    }
}

fc.dec = function(d) {
    // returns a floating point digit rounded to the nearest 2 decimal points.
    return (Math.round(d * 100)) / 100;
}

fc.isLeap = function(y) {
    //returns true if y is a leap year
    return ((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0);
}

//Ingest an XML file
fc.xreq = new XMLHttpRequest();
fc.responseXML;
// Define which file to open and send the request.
fc.getxml = function (t = undefined){
	if(t != undefined){
		fc.xreq.open("GET", t, false);
		fc.xreq.setRequestHeader("Content-Type", "text/xml");
		fc.xreq.onreadystatechange = function () {
			if(fc.xreq.readyState === 4 && fc.xreq.status === 200) {
				console.log("\n\n\nRESPONSETEXT BELOW:");
				console.log(fc.xreq.responseText);
				var domparser = new DOMParser();
				// XML doc
				newXML = domparser.parseFromString(fc.xreq.responseText, "text/html");
				console.log("\n\n\nXMLDOC BELOW:");
				console.log(newXML);
				fc.responseXML = newXML;
				return newXML;
			}
		}
		fc.xreq.send();
	} else {
		console.log("Blank XML Request");
	}
}

// reload the page automatically at a certain frequency
fc.reloadFrequency = 1000;
fc.reload = false;

fc.reloader = function() {
	/* 
	Loads the page on a fresh URL to dodge cache issues.
	to load slower or faster, modify fc.reloadFrequency
	to a higher or lower value (in ms).
	*/
    if (fc.reload == true || fc.reload == 1) {
        console.log("autoReload");
        var resetDigit = Math.round(Math.random() * 1000);
        var newurl = window.location.href.split("?")[0];
        console.log(newurl + "?reload=" + resetDigit);
        setTimeout(function() {
            window.location.href = newurl + "?reload=" + resetDigit;
        }, fc.reloadFrequency);
    } else {
		// do nothing
	}
}

window.onload = function() {
    fc.reloader();
}