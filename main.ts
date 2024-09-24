controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . . . 4 . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . . . . . . 4 . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 f 8 8 8 8 5 f 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fdd111111ddf......
    ......fbdd1111dddf......
    ......fcdbfddfbdbf......
    .......fbcf11fcbfff.....
    .......ffb1111bcfbcf....
    ........fcdb1bdfbbbf....
    .......ffffffffffcf.....
    .....fcb1bcfffff........
    .....f1b1b1ffff.........
    ......ffbff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite)
mySprite.setPosition(5, 8)
scene.setBackgroundColor(8)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
