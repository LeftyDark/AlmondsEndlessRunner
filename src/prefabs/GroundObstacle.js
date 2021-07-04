class GroundObstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add to scene
        scene.add.existing(this);
        this.moveSpeed = -40;
        this.setCollideWorldBounds(true);
        this.setVelocityX(this.moveSpeed);
        
        // add sfx here this.sfx___ = scene.sound.add('sfx_---');
    }

    update() {}
    reset() {}
}