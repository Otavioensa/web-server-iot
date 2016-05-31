
	var dweetClient = require('node-dweetio');
  var dweetio = new dweetClient();
	var five = require('johnny-five');
	var board = new five.Board();

	board.on('ready', function () {

		// Definimos uma variação de 3 graus para enviar o valor para a Dashboard
		var tempSensor = new five.Sensor({
			pin: "A0",
			threshold: 4
		});
		
		tempSensor.on("change", function(value) {
			var params = {
				temperatura: value
			};
			dweetio.dweet_for("web-client-iot-cs", params, function(err, dweet){
			  console.log(dweet.content); 
			});
	  });

	});



