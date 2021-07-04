class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add to scene
        scene.add.existing(this);
        scene.physics.add.existing(this, 0);
        //States the player can be in
        this.isJumping = false;
        this.isFalling = false;
        this.moveSpeed = 0;
        this.xVelocity = 0;
        
        // add sfx here this.sfx<name> = scene.sound.add('sfx_<soundname>');
        // make sure the file is already loaded in menu.js
    }
    create() {
        // define key values
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(this.keySPACE)) {
            this.isJumping = true;
            console.log('jump');
        }
    }
        
    reset() {}
}