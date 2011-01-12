function EventHandler() {
	if(msg.indexOf("PRIVMSG") == -1) {
		if(msg.indexOf("JOIN") >-1)
			return "join";
		else if(msg.indexOf("QUIT") >-1)
			return "quit";
		else if(msg.indexOf("MODE") >-1)
			return "mode";
	}
	else if(msg.indexOf("PRIVMSG") >-1)
		return "message";
}
	
//:eggbertx_laptop!eggbertx_l@oks-AEDE1120.hsd1.wa.comcast.net QUIT :Quit: Leaving
//:eggbertx_laptop!eggbertx_l@oks-AEDE1120.hsd1.wa.comcast.net JOIN :#spherebot

//:SphereBot MODE SphereBot :+iwx