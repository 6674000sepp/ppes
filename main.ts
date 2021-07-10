basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        led.plotBarGraph(
        pins.analogReadPin(AnalogPin.P0),
        1023
        )
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 500)
    }
})
