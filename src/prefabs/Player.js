class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add to scene
        scene.add.existing(this);

<<<<<<< HEAD
        // initialize class variables here
        this.isJumping = false;
=======
        //States the player can be in
        this.isJumping = false;
        this.isFalling = false;
        this.moveSpeed = 0;
>>>>>>> de3a049431c3f23722aad89b0576ea308b5b3ad6
        
        // add sfx here this.sfx<name> = scene.sound.add('sfx_<soundname>');
        // make sure the file is already loaded in menu.js
    }
    create() {
        // define key values
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {

<<<<<<< HEAD
        }
    }
=======
    update() {
        if(Phaser.Input.Keyboard.JustDown(this.keyA)) {
            this.isJumping = true;
        }
    }
        
>>>>>>> de3a049431c3f23722aad89b0576ea308b5b3ad6
    reset() {}
}