class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add to scene
        scene.add.existing(this);

        //States the player can be in
        this.isJumping = false;
        this.isFalling = false;
        this.moveSpeed = 0;
        
        // add sfx here this.sfx___ = scene.sound.add('sfx_---');
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(this.keyA)) {
            this.isJumping = true;
        }
    }
        
    reset() {}
}