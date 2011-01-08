function GetFileAsString(file) {
	file_raw = OpenRawFile(file, false);
	rf = file_raw.read(file_raw.getSize());
	return CreateStringFromByteArray(rf);
}
function ParsePlugin(file) {
	try {
		plugin_string= GetFileAsString(file);
		eval(plugin_string);
	} catch(e) { sendMessage(bot.channels[0], "Error: "+e); 
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
	this.quitmessage = "";
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
	bot.quitmessage = config_file.read("quitmessage", "Bye everyone!");
}

function sendMessage(chan, msg) {
	socket.write(CreateByteArrayFromString("PRIVMSG "+chan+" :"+msg+"\n"));
	log.write("sent message to "+chan+" \""+msg+"\"");
}

function Plugin(event, code) {
	this.name = "";
	this.info = "";
	this.event = event;
	this.code = code;
}

function addPlugin(plugin) {
	PluginArray[PluginArray.length] = plugin;
}

function LoadDefaultPlugins() {
	var default_plugin_list = GetFileList("plugins/default");
	for(i=0;i<default_plugin_list.length;i++) {
		ParsePlugin("~/plugins/default/"+default_plugin_list[i]);
	}
}