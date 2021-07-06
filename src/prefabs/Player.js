class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add to scene
        scene.add.existing(this);
        scene.physics.add.existing(this, 0);
        //States the player can be in
        this.isJumping = false;
        this.isFalling = false;
        this.JUMP_VELOCITY = -700;
        
        
        // add sfx here this.sfx<name> = scene.sound.add('sfx_<soundname>');
        // make sure the file is already loaded in menu.js
    }
    create() {
        // define key values 
    }

    update() {
        if(this.isFalling == false && Phaser.Input.Keyboard.DownDuration(keySPACE, 250)) {
            this.isJumping = true;
            this.body.velocity.y = this.JUMP_VELOCITY;
            
        }
        if(this.body.velocity.y >0) {
            this.isFalling = true;
            this.isJumping = false;
            console.log('fall');
        }
        else {this.isFalling = false;}
        
        
    }
        
    reset() {}
}