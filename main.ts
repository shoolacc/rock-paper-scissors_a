radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == player1_choice) {
        basic.showString("Draw!")
    } else {
        if (receivedNumber < player1_choice) {
            if (receivedNumber == 0 && player1_choice == 2) {
                basic.showString("Win!")
                game.setScore(1)
                basic.showString("" + (game.score()))
            } else {
                basic.showString("Win!")
                game.setScore(1)
                basic.showString("" + (game.score()))
            }
        } else {
            if (player1_choice == 0 && receivedNumber == 2) {
                basic.showString("Lose")
            } else {
                basic.showString("Lose")
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    game.setScore(0)
})
input.onGesture(Gesture.Shake, function () {
    player1_choice = randint(0, 2)
    if (player1_choice == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        radio.sendNumber(0)
    }
    if (player1_choice == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        radio.sendNumber(1)
    }
    if (player1_choice == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        radio.sendNumber(2)
    }
})
let player1_choice = 0
basic.showString("Shake to play")
game.setScore(0)
basic.forever(function () {
    radio.setGroup(4)
})
