var reload = new Plugin("MESSAGE", 
function() {
	if(msg.indexOf("reload")>-1) {
		sendMessage(channel,"HONK HONK");
}});
honk.name = "Honker";
honk.info = "A simple script to test SphereBot's plugin system";
addPlugin(honk);