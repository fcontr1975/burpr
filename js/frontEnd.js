var d = new Date();
console.log(d.toUTCString());
var _JSONPacketContent;
var mainForm = fc.getid("mainForm");

function gather(){
	// console.log("GATHER...");
	// ok, gather data, serialize into JSON and send to DB.
	var u = fc.getid("username").value;
	if(u.length == 0){
		u = "Anonymous";
	}
	var m = fc.getid("messagearea").value;

	//Build object
	_JSONPacketContent = new Object();
	_JSONPacketContent.handle = u;
	_JSONPacketContent.message = m;
	console.log("Message length: "+_JSONPacketContent.message.length);
	
	// stringify for upload...
	var JSONPacketContent = JSON.stringify(_JSONPacketContent);
	// console.log(JSONPacketContent);
	
	var d=new Date();
	
	fc.getid("JSONPacket").value = JSONPacketContent;
	fc.getid("submit").value=u;
}

function submitForm(){
	console.log("submitForm();")
	gather();
	if(_JSONPacketContent.message.length > 0){
		mainForm.requestSubmit();
	}
}
