class Obstacle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add to scene
        scene.add.existing(this);

        // initialize class variables here
        this.moveSpeed = game.settings.obstacleSpeed;
        
        // add sfx here this.sfx<name> = scene.sound.add('sfx_<soundname>');
        // make sure the file is already loaded in menu.js
    }
    create() {
        // define key values
    }
    update() {
        this.x -= this.moveSpeed;
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }
    reset() {
        this.x = game.config.width;
    }
}