var socket;

$(document).ready( function () {

	socket = io();

	socket.on('connect', function() {
		console.log('I connected');
	});

	socket.on('update', function(data) {
		console.log(data);
	})

})

function sendMessage() {
	var msg = $('#message').val();
	var username = $('#username').val();

	var data = {
		msg: msg,
		username: username
	}

	console.log(data)
	socket.emit('chat-msg', data);
}