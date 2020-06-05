var canvas = document.getElementById("world");
var ctx = canvas.getContext("2d");

var username = prompt("Enter your nickname please: ");
var socket = io.connect("https://right-resisted-property.glitch.me:3000");
socket.emit("setting_name", {name: username});

socket.on("test", function(data){
	alert(data.mess)
})