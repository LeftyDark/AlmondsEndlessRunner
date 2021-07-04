class AirObstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add to scene
        scene.add.existing(this);
        this.moveSpeed = -40;
        this.setCollideWorldBounds(true);
        this.setVelocityX(this.moveSpeed);
        this.body.allowGravity = false;
        
        // add sfx here this.sfx___ = scene.sound.add('sfx_---');
    }

    update() {
        this.x -= this.moveSpeed;
    }
    reset() {}
}