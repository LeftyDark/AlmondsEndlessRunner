class Player extends Phaser.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add to scene
        scene.add.existing(this);

        this.isJumping = false;
        this.moveSpeed = 1;
        
        // add sfx here this.sfx___ = scene.sound.add('sfx_---');
    }

    update() {}
    reset() {}
}