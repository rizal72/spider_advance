input.onButtonPressed(Button.A, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    -255,
    SuperBit.enMotors.M3,
    -255
    )
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    SuperBit.MotorStopAll()
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    255,
    SuperBit.enMotors.M3,
    255
    )
    basic.showIcon(IconNames.Surprised)
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
