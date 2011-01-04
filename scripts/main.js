RequireSystemScript("time.js");
EvaluateScript("sys.js");

var y = 0
var screen;
var window = GetSystemWindowStyle();
var font = GetSystemFont();
var waittext = ".";
var msg_arr = [];
var plugins = [];
var log = OpenLog("log.txt");
//var address = "irc.theoks.net";
//var port = 6667;
//var channel = "#r0b0tix";
//var login = "eggbot";
//var nick = "SphereBot";
//var realname = "SphereBot McAwesomesauce";
ParseConfig();
function initConnection() {
	start_time = GetTime();
	socket = OpenAddress(bot.server,bot.port);
	log.write("Connecing to "+bot.server+" on port "+bot.port);
	while(!socket.isConnected()) {
		if(IsKeyPressed(KEY_ESCAPE)) Exit();
		if(start_time+20000 <= GetTime() && socket.isConnected() == false) {
			if(waittext.length <= 3) {
				font.drawText(0,0, "Connecting"+waittext);
				FlipScreen();
				waittext+=".";
				Delay(1000);
			} else {
				waittext = "";
			}
		}
	}
	if(socket.isConnected()) {
		socket.write(CreateByteArrayFromString("PASS eggbotisawesome\n"));
		socket.write(CreateByteArrayFromString("NICK "+bot.nick+"\n"));
		socket.write(CreateByteArrayFromString("USER " + bot.login + " eggbertx.theoks.net "+bot.server+" :" + bot.realname+"\n"));
		socket.write(CreateByteArrayFromString("PROTOCTL NAMESX\n"));

		Delay(10);
	}
}

function pingCheck(msg) {
	if(msg.indexOf("PING") >-1) {
		socket.write(CreateByteArrayFromString(msg.replace("PING", "PONG")));
	}
}

function game() {
	initConnection();
	log.write("Connected to "+bot.server+" successfully");
	while(!IsKeyPressed(KEY_ESCAPE)) {
		msg = CreateStringFromByteArray(socket.read(socket.getPendingReadSize()))
		if(msg.length > 0) {
			log.write(msg.replace("\n",""));
			msg_arr.push(msg);
			pingCheck(msg);
		}
		if(socket.isConnected()) {
			font.drawText(0, 0, "Connected to "+bot.server+" on port "+bot.port);
			while(msg_arr.length > 1) {
				msg_arr.shift();

			} if(msg.indexOf("test") >-1) {
				sendMessage();
			}
			if(msg.indexOf("376") > -1) {
				for(c=0;c<bot.channels.length;c++) {
					socket.write(CreateByteArrayFromString("JOIN "+bot.channels[c]+" x\n"));
					socket.write(CreateByteArrayFromString("MODE "+bot.channels[c]+"\n"));
					socket.write(CreateByteArrayFromString("WHO "+bot.channels[c]+"\n"));
				}
			}
			font.drawTextBox(0, 24, GetScreenWidth(), GetScreenHeight()-24, 0, msg_arr.join("\n"));
			FlipScreen();
		}
	}
}