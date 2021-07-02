class AirObstacle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add to scene
        scene.add.existing(this);
        this.moveSpeed = 4;
        
        // add sfx here this.sfx___ = scene.sound.add('sfx_---');
    }

    update() {
        this.x -= this.moveSpeed;
    }
    reset() {}
}