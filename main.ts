/**
 * 轉彎角度控制
 * 
 * 800
 * 
 * 1200
 * 
 * 1500
 */
input.onButtonPressed(Button.A, function () {
    Switch = 1
})
input.onButtonPressed(Button.B, function () {
    Switch = 0
})
let sonar2 = 0
let Switch = 0
Switch = 0
/**
 * 1. 超音波
 * 
 * 2. 行走、轉彎
 * 
 * 3. A鍵走、B鍵停
 * 
 * 4. 隨機轉彎
 */
basic.forever(function () {
    if (Switch == 1) {
        if (sonar2 < 10) {
            robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            -100,
            robotbit.Motors.M2A,
            -100
            )
            basic.pause(1000)
            robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            -50,
            robotbit.Motors.M2A,
            100
            )
            basic.pause(800)
        } else {
            robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            100,
            robotbit.Motors.M2A,
            100
            )
        }
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
