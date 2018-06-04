var musiclist = new Array(
			"audio/drama/16bit/dar1.wav",
			"audio/drama/16bit/dar2.wav",
			"audio/drama/16bit/dar3.wav",
      "audio/drama/16bit/dar4.wav",
			"audio/drama/16bit/dar5.wav",
			"audio/drama/16bit/dar6.wav",
			"audio/drama/16bit/dar7.wav",
			"audio/drama/16bit/dar8.wav",
			"audio/drama/16bit/dar9.wav",
			"audio/drama/16bit/dar10.wav",
			"audio/drama/16bit/dar11.wav",
			"audio/drama/16bit/dar12.wav",
			"audio/drama/16bit/dar13.wav",
			"audio/drama/16bit/dar14.wav" );
var selectnum = Math.floor(Math.random() * musiclist.length);
var out = "<source src=" + musiclist[selectnum] + ">";
document.write(out);
