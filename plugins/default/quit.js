var quit = new Plugin("MESSAGE", 
function() {
	if(msg == bot.prefix+"quit") {
		socket.write(CreateByteArrayFromString("QUIT :"+bot.quitmessage+"\n"));
		Exit();
}});
quit.name = "Quit";
quit.info = "Makes the bot exit from all channels and shut down.";
addPlugin(quit);