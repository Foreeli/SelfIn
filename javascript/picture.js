var imglist = new Array(
  "darjeeling/dar1.jpg",
  "darjeeling/dar2.jpg",
  "darjeeling/dar3.jpg",
  "darjeeling/dar4.jpg",
  "darjeeling/dar5.png",
  "darjeeling/dar6.jpg",
  "darjeeling/dar7.jpg",
  "darjeeling/dar8.jpg",
  "darjeeling/dar9.jpg",
  "darjeeling/dar10.jpg",
  "darjeeling/dar11.jpg",
  "darjeeling/dar12.jpg",
  "darjeeling/dar13.jpg",
  "darjeeling/dar14.jpg" );
var selectnum = Math.floor(Math.random() * imglist.length);
var output = "<img src=" + imglist[selectnum] + ">";
document.write(output);
