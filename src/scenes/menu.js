class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    init() {}
    preload() {
        this.load.audio('sfx_select', './assets/cursor.wav');
    }
    create() {}
    update() {
        this.sound.play('sfx_select');
    }
}