var quit = new Plugin("message", 
function() {
	if(msg.toLowerCase().indexOf(bot.name.toLowerCase()+" quit")>-1) {
		socket.write(CreateByteArrayFromString("QUIT :"+bot.quitmessage+"\n"));
		Exit();
}});
quit.name = "Quit";
quit.info = "Makes the bot exit from all channels and shut down.";
addPlugin(quit);