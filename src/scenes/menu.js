class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    init() {}
    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/cursor.wav');

        // load image
        this.load.image('white_placeholder','./assets/white.png');
    }
    create() {
        this.sound.play('sfx_select');
        this.white - this.add.tileSprite(300, 300, 640, 480, 'white').setorigin(0,0);
    }
    update() {
        
    }
}