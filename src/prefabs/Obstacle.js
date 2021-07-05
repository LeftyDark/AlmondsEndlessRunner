class Obstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add to scene
        scene.add.existing(this);
        scene.physics.add.existing(this, 0);

        // initialize class variables here
        this.startX = x;
        this.startY = y;
        this.moveSpeed = game.settings.obstacleSpeed;
        
        // add sfx here this.sfx<name> = scene.sound.add('sfx_<soundname>');
        // make sure the file is already loaded in menu.js
    }
    create() {
        // define key values
        
    }
    update() {
    }
    reset() {
    }

}