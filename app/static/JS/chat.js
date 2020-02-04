$(document).ready( function () {

	var socket = io();

	socket.on('connect', function() {
		console.log('I connected');
		socket.emit('test', {data: 'Your mom gay'});
	});

	socket.on('test', function(data) {
		console.log(data.data);
	})

})