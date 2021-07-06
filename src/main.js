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
    width: 640,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3

let keyLEFT, keyRIGHT, keyW, keyA, keyS, keyD, keySPACE;
let gObstacleList, aObstacleList;
let menuBGM, gameBGM;