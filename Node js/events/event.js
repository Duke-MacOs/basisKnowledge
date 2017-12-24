var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();

life.on('listen', function(who) {
	console.log(who);
});

life.emit('listen', 'Jason');

life.setMaxListeners(11); // 默认10个监听