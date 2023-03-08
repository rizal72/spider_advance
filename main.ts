input.onButtonPressed(Button.A, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M2, -255)
})
input.onButtonPressed(Button.AB, function () {
    SuperBit.MotorStopAll()
})
input.onButtonPressed(Button.B, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
