let json = ""
let temp = 0
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate1200
)
basic.forever(function () {
    basic.pause(5000)
    temp = input.temperature()
    json = "{" + "\"temp\"" + ":" + temp + "}"
    serial.writeString(json)
})
