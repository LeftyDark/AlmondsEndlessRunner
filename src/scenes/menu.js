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
        this.load.image('menu','./assets/Sprites/MainMenu.png');
        this.load.image('bean', './assets/Sprites/enemy_bean-export.png');
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
        this.bean1 = this.physics.add.sprite(game.config.width-40, game.config.height-450, 'bean');
        this.bean1.setVelocityY(120);
        this.bean1.setCollideWorldBounds(true);
        this.bean2 = this.physics.add.sprite(game.config.width-120, game.config.height-450, 'bean');
        this.bean2.setVelocityY(120);
        this.bean2.setCollideWorldBounds(true);
        this.bean3 = this.physics.add.sprite(game.config.width-200, game.config.height-450, 'bean');
        this.bean3.setVelocityY(120);
        this.bean3.setCollideWorldBounds(true);
        this.bean4 = this.physics.add.sprite(game.config.width-280, game.config.height-450, 'bean');
        this.bean4.setVelocityY(120);
        this.bean4.setCollideWorldBounds(true);
        this.bean5 = this.physics.add.sprite(game.config.width-360, game.config.height-450, 'bean');
        this.bean5.setVelocityY(120);
        this.bean5.setCollideWorldBounds(true);
        this.bean6 = this.physics.add.sprite(game.config.width-440, game.config.height-450, 'bean');
        this.bean6.setVelocityY(120);
        this.bean6.setCollideWorldBounds(true);
        this.bean7 = this.physics.add.sprite(game.config.width-520, game.config.height-450, 'bean');
        this.bean7.setVelocityY(120);
        this.bean7.setCollideWorldBounds(true);
        this.bean8 = this.physics.add.sprite(game.config.width-600, game.config.height-450, 'bean');
        this.bean8.setVelocityY(120);
        this.bean8.setCollideWorldBounds(true);
        this.add.image(0, 0, 'menu').setOrigin(0);
       
        
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