input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 3; index++) {
            music.playTone(330, music.beat(BeatFraction.Whole))
            basic.pause(10)
        }
        basic.pause(100)
    }
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    for (let index = 0; index < 5; index++) {
        music.playTone(349, music.beat(BeatFraction.Whole))
        basic.pause(10)
    }
    for (let index = 0; index < 5; index++) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.pause(10)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(294, music.beat(BeatFraction.Whole))
        basic.pause(10)
    }
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 3; index++) {
            music.playTone(330, music.beat(BeatFraction.Whole))
            basic.pause(10)
        }
        basic.pause(100)
    }
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    for (let index = 0; index < 5; index++) {
        music.playTone(349, music.beat(BeatFraction.Whole))
        basic.pause(10)
    }
    for (let index = 0; index < 5; index++) {
        music.playTone(330, music.beat(BeatFraction.Half))
        basic.pause(10)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . . . # .
        `)
})
