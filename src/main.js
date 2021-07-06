/***************************

Names:
    Masasteru Nakajima
    Ryan McCarty
    Nathanael Fonken

Project Title:
    Endless Runner

Date Completed:
    July 5, 2021

Creative Tilt Justification: 
-We added both ground and air obstacles to our runner, and also made them function differently, the obstacles
on the ground pushed the player towars the can that makes them lose, whereas the air obstacles stop the 
player's jump and put them in an uncontrolled fall while slowing them down, potentially forcing them to 
land in a ground obstacle, pushing them and forcing them to jump again. In addition, our lose condition was
different than most endless runners, it being colliding with a can on the left end of the screen rather than
being hitting any obstacle or falling off the map.
-Our visual style was hopefully unique in following a bean trying to escape from a can of beans attempting to 
pack him, something that I imagine has rarely been done before as the scenario for an endless runner.
    
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