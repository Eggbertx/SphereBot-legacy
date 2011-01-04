function GetFileAsString(file) {
	file_raw = OpenRawFile(file, false);
	rf = file_raw.read(file_raw.getSize());
	return CreateStringFromByteArray(rf);
}
function ParsePlugin(file) {
	try {
		plugin_string= GetFileAsString(file);
		eval(plugin_string);
	} catch(e) { Abort("HONK "+e); 
	}
}

function bot() {
	this.nick = "";
	this.login = "";
	this.realname = "";
	this.logging = true;
	this.channels = [];
	this.server = "";
	this.port = 6672;
}
function ParseConfig() {
	config_file = OpenFile("../config.txt");
	bot.nick = config_file.read("nick", "SphereBot");
	bot.nick = config_file.read("nick", "SphereBot");
	bot.login = config_file.read("login", "spherebot");
	bot.realname = config_file.read("realname", "SphereBot McAwesome");
	bot.logging = config_file.read("logging",true)
	channels = config_file.read("channels", "#bots");
	bot.channels = channels.split(",");
	bot.server = config_file.read("server", "irc.theoks.net");
	bot.port = config_file.read("port", 6672);
}

function sendMessage(chan, msg) {
	socket.write(CreateByteArrayFromString("PRIVMSG "+chan+" :"+msg+"\n"));
}