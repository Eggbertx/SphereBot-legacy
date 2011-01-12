var reload = new Plugin("MESSAGE", 
function() {
	if(msg.indexOf(bot.prefix+"reload ")==0) {
		plugin_name = msg.replace(bot.prefix+"reload ", "");
		ParsePlugin(plugin_name);
}});
reload.name = "reload";
reload.info = "Reloads the specified script";
addPlugin(reload);