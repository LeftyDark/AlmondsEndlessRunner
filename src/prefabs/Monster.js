//This will become like the obstacle or player class thing probably later but I am currently 
class Monster extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add to scene
        scene.add.existing(this);
        
        
        // add sfx here this.sfx___ = scene.sound.add('sfx_---');
    }

    update() {
    }
    reset() {}
}