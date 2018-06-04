var musiclist = new Array(
			"audio/mp3/01.mp3",
			"audio/mp3/02.mp3",
			"audio/mp3/02.mp3",
      "audio/mp3/02.mp3",
			"audio/mp3/02.mp3" );
var selectnum = Math.floor(Math.random() * musiclist.length);
var out = "<source src=" + musiclist[selectnum] + ">";
document.write(out);
