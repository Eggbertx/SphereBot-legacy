function EventHandler() {
msg = msg.substring(0,msg.lastIndexOf("\n"));
	if(msg.indexOf("PRIVMSG") == -1) {
		if(msg.indexOf("JOIN") >-1) {
			msg = msg.substring(1,msg.length);
			sender = msg.substring(0, msg.indexOf("!"));
			msg = msg.replace(":"+sender+"!", "");
			sender_host = msg.substring(0, msg.indexOf(" "));
			msg = msg.replace(sender_host+" ", "");
			event = msg.substring(0,msg.indexOf(" "));
			msg = msg.replace(event+" :", "");
			channel = msg
		} else if(msg.indexOf("QUIT") >-1) {
			msg = msg.substring(1,msg.length);
			sender = msg.substring(0, msg.indexOf("!"));
			msg = msg.replace(":"+sender+"!", "");
			sender_host = msg.substring(0, msg.indexOf(" "));
			msg = msg.replace(sender_host+" ", "");
			event = msg.substring(0,msg.indexOf(" "));
			msg.replace(event+" :", "");
		} else if(msg.indexOf("MODE") >-1) {
			msg = msg.substring(1, msg.length);
			nick = msg.substring(0, msg.indexOf(" "));
			msg = msg.replace(nick+" ", "");
			event = "MODE";
			mode_change = msg.substring(msg.lastIndexOf(":")+1,msg.length);
		} 
	} else if(msg.indexOf("PRIVMSG") >-1) {
		msg = msg.substring(1,msg.length);
		sender = msg.substring(0, msg.indexOf("!"));
		msg = msg.replace(":"+sender+"!", "");
		sender_host = msg.substring(0, msg.indexOf(" "));
		msg = msg.replace(sender_host, "");
		event = "MESSAGE";
		msg = msg.replace("PRIVMSG ", "");
		channel = msg.substring(1, msg.indexOf(":"));
		msg = msg.replace(channel+":", "");
		msg = msg.substring(1,msg.length);
	}
}
/*
:eggbertx_laptop!eggbertx_l@oks-AEDE1120.hsd1.wa.comcast.net QUIT :Quit: Leaving:eggbertx_laptop!eggbertx_l@oks-AEDE1120.hsd1.wa.comcast.net PRIVMSG #spherebot :bleah
*/