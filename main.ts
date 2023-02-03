input.onPinPressed(TouchPin.P2, function () {
    current_score = current_score + 1
    if (current_score == 5) {
        current_score = 0
    }
})
let current_score = 0
let score = [
images.createImage(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `),
images.createImage(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `),
images.createImage(`
    . . # . .
    . # . # .
    . . . # .
    . . # . .
    . # # # .
    `),
images.createImage(`
    . # # # .
    . . . # .
    . # # # .
    . . . # .
    . # # # .
    `),
images.createImage(`
    . # . # .
    . # . # .
    . # # # .
    . . . # .
    . . . # .
    `),
images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
]
current_score = 0
basic.forever(function () {
    score[current_score].showImage(0)
})
