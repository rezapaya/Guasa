$("document").ready(function(){
	$("body>section#chat>div#bottom>div#msg").keydown(function(e){
		if(e.keyCode == 13){
			e.preventDefault();
			msgSend();
		}
	});
	var emoji = new Array(new Array("415", "056", "057", "414", "405", "106", "418", "417", "40D", "40A", "404", "105", "409", "40E", "402", "108", "403", "058", "407", "401", "40F", "40B", "406", "413", "411", "412", "410", "107", "059", "416", "408", "40C", "11A", "10C", "32C", "32A", "32D", "328", "32B", "022", "023", "327", "329", "32E", "32F", "334", "337", "336", "13C", "330", "331", "326", "03E", "11D", "05A", "00E", "00F", "420", "00D", "010", "011", "41E", "012", "422", "22E", "22F", "231", "230", "427", "41D", "00F", "41F", "14C", "201", "115", "428", "51F", "429", "424", "423", "253", "426", "111", "425", "31E", "31F", "31D", "001", "003", "005", "004", "51A", "519", "518", "515", "516", "517", "51B", "152", "04E", "04E", "51C", "51E", "11C", "536", "003", "41C", "41B", "419", "41A"), new Array("04A", "04B", "049", "048", "04C", "13D", "443", "43E", "04F", "052", "053", "524", "52C", "52A", "531", "050", "527", "051", "10B", "52B", "52F", "528", "01A", "134", "530", "529", "526", "52D", "521", "523", "52E", "055", "525", "10A", "109", "522", "019", "054", "520", "306", "030", "304", "110", "032", "305", "303", "118", "447", "119", "307", "308", "444", "441"), new Array("436", "437", "438", "43A", "439", "43B", "117", "440", "442", "446", "445", "11B", "448", "033", "112", "325", "312", "310", "126", "127", "008", "03D", "00C", "12A", "00A", "00B", "009", "316", "129", "141", "142", "317", "128", "14B", "211", "114", "145", "144", "03F", "313", "116", "10F", "104", "103", "101", "102", "13F", "140", "11F", "12F", "031", "30E", "311", "113", "30F", "13B", "42B", "42A", "018", "016", "015", "014", "42C", "42D", "017", "013", "20E", "20C", "20F", "20D", "131", "12B", "130", "12D", "324", "301", "148", "502", "03C", "30A", "042", "040", "041", "12C", "007", "31A", "13E", "31B", "006", "302", "319", "321", "322", "314", "503", "10E", "318", "43C", "11E", "323", "31C", "034", "035", "045", "338", "047", "30C", "044", "30B", "043", "120", "33B", "33F", "341", "34C", "344", "342", "33D", "33E", "340", "34D", "339", "147", "343", "33C", "33A", "43F", "34B", "046", "345", "346", "348", "347", "34A", "349"), new Array("036", "157", "038", "153", "155", "14D", "156", "501", "158", "43D", "037", "504", "44A", "146", "50A", "505", "506", "122", "508", "509", "03B", "04D", "449", "44B", "51D", "44C", "124", "121", "433", "202", "135", "01C", "01D", "10D", "136", "42E","01B", "15A", "159", "432", "430", "431", "42F", "01E", "039", "435", "01F", "125", "03A", "14E", "252", "137", "209", "154", "133", "150", "320", "123", "132", "143", "50B", "514", "513", "50C", "50D", "511", "50F", "512", "510", "50E"), new Array("21C", "21D", "21E", "21F", "220", "221", "222", "223", "224", "225", "210", "232", "233", "235", "234", "236", "237", "238", "239", "23B", "23A", "23D", "23C", "24D", "212", "24C", "213", "214", "507", "203", "20B", "22A", "22B", "226", "227", "22C", "22D", "215", "216", "217", "218", "228", "151", "138", "139", "13A", "208", "14F", "20A", "434", "309", "315", "30D", "207", "229", "206", "205", "204", "12E", "250", "251", "14A", "149", "23F", "240", "241", "242", "243", "244", "245", "246", "247", "248", "249", "24A", "24B", "23E", "532", "533", "534", "535", "21A", "219", "21B", "02F", "024", "025", "026", "027", "028", "029", "02A", "02B", "02C", "02D", "02E", "332", "333", "24E", "24F", "537"));
	for(i in emoji){
		$("body>section#chat>ul#emoticons").append("<li>");
		for(j in emoji[i]){
			$("body>section#chat>ul#emoticons>li:eq("+i+")").append("<img src=\"img/emoji/emoji-E" + emoji[i][j] + ".png\" alt=\""+"\" onclick=\"emojiWrite('E" + emoji[i][j] + "')\" />");
		}
	}
});

function emojiWrite(code){
	$("body>section#chat>div#bottom>div#msg").append(" <img src=\"img/emoji/emoji-" + code + ".png\" alt=\""+ String.fromCharCode(parseInt(code, 16)) + "\" class=\"emoji\" />").focus();
	$("body>section#chat>ul#emoticons").toggle();
}

function emojiToChar(str){
	str = str.replace("<br>", "");
	return str.replace(/<img[^>]+alt="([^">]+)"[^>]*>/gi, '$1');
}

function charToEmoji(str){
	return str.replace(/([\uE000-\uFFFF])/g, function(match){return "<img src=\"img/emoji/emoji-" + ord(match).toString(16).toUpperCase() + ".png\" class=\"emoji\" />";});
}

function chatList(){
	if(g.chats && g.chats.length > 0){
		$("body>section#chats>ul#chatslist").empty();
		for(i=g.chats.length-1;i>=0;i--){
			chat = g.chats[i];
			contact = g.contacts[chat.contact];
			if(chat.messages){
				lastmsg = chat.messages[chat.messages.length-1];
				if(lastmsg.class=="to")sign = "→";
				else sign = "←";
				res = "<li id=\""+ i +"\" onclick=\"chatShow(" + i + ");\"><img src=\"" + contact.photo + "\" alt=\"\" class=\"photo\"/><div id=\"text\">" + contact.name + "<br /><span class=\"small\">" + sign + " " + lastmsg.body + "</span></div><img src=\"img/new.png\" alt=\"new\" class=\"new\" /></li>";
			}else res = "<li id=\""+ i +"\" onclick=\"chatShow(" + i + ");\"><img src=\"" + contact.photo + "\" alt=\"\" class=\"photo\"/><div id=\"text\">" + contact.name + "</div><img src=\"img/new.png\" alt=\"new\" class=\"new\" /></li>";
			$("body>section#chats>ul#chatslist").append(res);
		}
	}else{
		$("body>section#chats>ul#chatslist").html("<li id=\"none\"><div id=\"text\">No chats yet<br /><span class=\"small\">(Chats from official App are not sincronizable)</span></div></li>");
	}
}

function chatWith(contact){
	chats = g.chats;
	if(chats && chats.length > 0){
		var ci = chatFind(contact);
		if(ci<0){
			ci = chatNew(contact);
		}
	}else{
		chats = new Array();
		chats[0] = new Object();
		chats[0].contact = contact;
		var ci = 0;
	}
	localStorage.setItem("chats", JSON.stringify(chats));
	g.chats = chats;
	chatShow(ci);
}

function chatNew(contact){
	chats[chats.length] = new Object();
	chats[chats.length-1].contact = contact;
	return chats.length-1;
}

function chatShow(ci){
	chatPull(ci);
	load("chat");
	chat = g.chats[g.chats.length-1];
	contact = g.contacts[chat.contact];
	$("body>section#chat>header>figure>figcaption>h1").html(contact.name);
	$("body>section#chat>header>figure>img").attr("src", contact.photo);
	$("body>section#chat>ul#messages").empty();
	$("body>section#chat>div#bottom>div#msg").empty();
	$("body>section#chat>div#bottom>div#msg").focus();
	msgRender();
	$("body>section#chat>header>figure>figcaption>span#lastseen").hide();
	g.lastseen(contact, function(lastseen){
		if(lastseen)res = "Last seen " + date("M j, G:i", time()-lastseen.seconds_ago);
		else res = "Not in WhatsApp yet!";
		$("body>section#chat>header>figure>figcaption>span#lastseen").html(res).fadeIn(200);
	});
	$("body>section#chats>ul#chatslist>li#" + chat + ">img.new").hide();
}

function chatFind(contact){
	for(i=0;i<g.chats.length;i++){
		if(g.chats[i].contact == contact)return i;
	}
	return -1;
}

function messageFind(id, messages){
	for(i in messages){
		if(messages[i].id == id)return i;
	}
	return -1;
}

function chatPull(ci){
	var temp = g.chats[ci];
	g.chats.splice(ci, 1);
	g.chats[g.chats.length] = temp;
	localStorage.setItem("chats", JSON.stringify(g.chats));
}

function msgSend(){
	chat = g.chats[g.chats.length-1];
	contact = g.contacts[chat.contact];
	msg = emojiToChar($("body>section#chat>div#bottom>div#msg").html());
	if(msg.length>0){
		$("body>section#chat>div#bottom>div#msg").empty();
		if(!chat.messages || chat.messages.length<=0)chat.messages = new Array();
		chat.messages[chat.messages.length] = new Object();
		chat.messages[chat.messages.length-1].id = time();
		chat.messages[chat.messages.length-1].body = msg;
		chat.messages[chat.messages.length-1].timestamp = time();
		chat.messages[chat.messages.length-1].class = "to";
		g.message(contact.cc, contact.cel, msg, function(answer){
			if(answer){
				//Received by server (mark with one tick)
			}
		});
		g.chats[g.chats.length-1] = chat;
		localStorage.setItem("chats", JSON.stringify(g.chats));
		msgRender();
	}
}

function msgRender(){
	chat = g.chats[g.chats.length-1];
	$("body>section#chat>ul#messages").empty();
	for(i in chat.messages){
		msg = chat.messages[i];
		$("body>section#chat>ul#messages").append("<li class=\"" + msg.class + "\"><span id=\"body\">" + charToEmoji(msg.body) + "</span><span id=\"timestamp\">" + date("G:i", msg.timestamp) + "</span></li>");
	}
	$("body>section#chat>ul#messages").scrollTop($("body>section#chat>ul#messages").height());
}
