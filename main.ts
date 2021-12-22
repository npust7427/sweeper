let sonar2 = 0
let Switch = 1
basic.forever(function () {
    if (sonar2 < 10) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M2A,
        100
        )
    } else {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        100,
        robotbit.Motors.M2A,
        100
        )
    }
})
basic.forever(function () {
    sonar2 = sonar.ping(
    DigitalPin.P8,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    basic.pause(200)
})
