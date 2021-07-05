class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    init() {}
    preload() {
        // load audio here
        this.load.audio('sfx_select', './assets/SoundEffects/cursor.wav');
        this.load.audio('menuBGM', './assets/BGM/lofi.wav');
        this.load.audio('playBGMS', './assets/BGM/slower_play.wav');
        this.load.audio('playBGMF', './assets/BGM/fastpiano_play.wav');

        // load image here
        this.load.image('white_placeholder','./assets/Sprites/white.jpg');
    }
    create() {
        menuBGM = this.sound.add('menuBGM');
        menuBGM.loop = true;
        menuBGM.play();
        //this.sound.play('menuBGM');
        game.settings = {
            obstacleSpeed: -100
        }
        this.sound.play('sfx_select');
        this.add.image(0, 0, 'white_placeholder');
        
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.sound.stopAll();
            this.scene.start('playScene');
        }
        // this.scene.start('playScene');
    }
}