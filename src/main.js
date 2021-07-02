/***************************

Names:
    Masasteru Nakajima
    (Insert Name Here)
    (Insert Name Here)

Project Title:
    Endless Runner

Date:
    July 6, 2021

Project Length:
    ???

    
***************************/


let config = {
    type: Phaser.CANVAS,
<<<<<<< HEAD
    width: 1280,
    height: 720,
=======
    width: 640,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
>>>>>>> de3a049431c3f23722aad89b0576ea308b5b3ad6
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3

let keyLEFT, keyRIGHT, keyW, keyA, keyS, keyD, keySPACE;