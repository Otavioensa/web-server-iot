
const dweetClient = require('node-dweetio')
const five = require('johnny-five')
const board = new five.Board()
const dweetio = new dweetClient()

board.on('ready', () => {

  const temperatureSensor = new five.Sensor({
    pin: 'A0',
    threshold: 4
  })

  temperatureSensor.on('change', (value) => {
    const dweetThing = 'web-client-iot-case'
    const tweetMessage = {
      temperature: value
    }

    dweetio.dweet_for(dweetThing, tweetMessage, (err, dweet) => {

      if(err) {
        console.log('An error has ocurred: ', err)
      }

      console.log(dweet.content)
    })
  })
})
