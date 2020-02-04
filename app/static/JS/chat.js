$(document).ready( function () {

	var socket = io();

	socket.on('connect', function() {
		console.log('I connected');
	});

	socket.on('test', function(data) {
		console.log(data.data)
		socket.emit('test2', 'hi', function(data) {
			console.log(data);
		})
	})

})