var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res)=>{
	res.render("index");
})

server = app.listen("3000", ()=>{
	console.log("Server is running!");
})

var io = require("socket.io")(server);

io.on("connection", socket => {
	console.log("New user!");
	socket.on("setting_name", function(data){
		console.log("Setted name is " + data.name);
		socket.emit("test", (mess: "Hello, " + data.name + "!"));
	})
})