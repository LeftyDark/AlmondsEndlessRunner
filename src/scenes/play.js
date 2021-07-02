class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    init() {}
    preload() {}
    create() {
        this.sound.play('playBGMF');
    }
    update() {}
    // collision check function(s) here
}