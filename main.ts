input.onGesture(Gesture.ThreeG, function () {
    steps += 1
    time2 = control.millis()
})
let time = 0
let time2 = 0
let steps = 0
let wrong = 0
basic.forever(function () {
    time += 1
    if (time == 50 && steps < 10 || wrong == 10) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        wrong = 0
    }
    if (time == 50) {
        steps = 0
        time = 0
    }
    basic.pause(100)
    if (control.millis() - time2 > 750 || control.millis() - time2 < 250) {
    	
    } else {
        wrong += 1
    }
})
