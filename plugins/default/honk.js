var honk = new Plugin("message", 
function() {
	if(msg.indexOf("HONK")>-1)
		sendMessage(bot.channels[0],"HONK HONK");
});
honk.name = "Honker";
honk.info = "A simple script to test SphereBot's plugin system";
addPlugin(honk);