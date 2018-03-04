
const dweetClient = require('node-dweetio')
const five = require('johnny-five')
const board = new five.Board()
const dweetio = new dweetClient()

board.on('ready', () => {
  const firstLedPort = 13
  const secondLedPort = 12

  const firstLed = new five.Led(firstLedPort)
  const secondLed = new five.Led(secondLedPort)

  const dweetThing = 'web-client-iot-case'

  dweetio.listen_for(dweetThing, (dweet) => {
    if(dweet.content.on) {
       firstLed.on()
       secondLed.on()
       return
    }

     firstLed.off()
     secondLed.off()
  })

})
