class Obstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, location) {
        super(scene, x, y, texture, frame);

        // add to scene
        scene.add.existing(this);

        // initialize class variables here
        this.moveSpeed = game.settings.obstacleSpeed;
        this.location = location;
        
        // add sfx here this.sfx<name> = scene.sound.add('sfx_<soundname>');
        // make sure the file is already loaded in menu.js
    }
    create() {
        this.setCollideWorldBounds(true);
        if (this.location == 'air') {
            this.body.allowGravity = 'false';
        }
        // define key values
    }
    update() {
    }
    reset() {
    }
}