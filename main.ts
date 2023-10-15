input.onButtonPressed(Button.A, function () {
    geluidsterkte += -10
})
input.onButtonPressed(Button.B, function () {
    geluidsterkte += 10
})
let geluidsterkte = 127
basic.showIcon(IconNames.EighthNote)
basic.forever(function () {
    music.ringTone(262)
    music.setVolume(geluidsterkte)
})
