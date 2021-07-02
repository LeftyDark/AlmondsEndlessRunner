class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add to scene
        scene.add.existing(this);

        // initialize class variables here
        this.isJumping = false;
        
        // add sfx here this.sfx<name> = scene.sound.add('sfx_<soundname>');
        // make sure the file is already loaded in menu.js
    }
    create() {
        // define key values
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {

        }
    }
    reset() {}
}