const express = require('express');
const app = express();


// Setting '/node_modules' as static so that
// we can access jQuery from node_modules.
// TODO Determine whether this is ok...
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/res'));


app.get('/', (req, res, next) => {
    res.sendFile(__dirname + 'res/index.html');
});

const PORT = 3000;

const server = app.listen(PORT, function(){
    console.log('App is listening on port %s', PORT);
})

const io = require('socket.io')(server);

io.on("connection", function(socket){
    console.log("A user connected");
    socket.on("disconnect", function(){
        console.log("User disconnected");
    });
});

