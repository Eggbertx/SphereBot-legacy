var honk = new Plugin("MESSAGE", 
function() {
	if(msg.indexOf("HONK")>-1) {
		Abort(msg)
		sendMessage(channel,"HONK HONK");
}});
honk.name = "Honker";
honk.info = "A simple script to test SphereBot's plugin system";
addPlugin(honk);