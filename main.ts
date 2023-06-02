input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    while (input.temperature() >= 26 && input.temperature() <= 34) {
        basic.showString("T. NORMAL")
        basic.showIcon(IconNames.Tortoise)
    }
    while (input.temperature() < 26) {
        basic.showString("T. BAJA")
        basic.showIcon(IconNames.Confused)
    }
    while (input.temperature() > 34) {
        basic.showString("T. ALTA")
        basic.showIcon(IconNames.Sad)
    }
})
