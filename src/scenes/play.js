class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    init() {}
    preload() {
        this.load.image('placeholder_ground','./assets/Sprites/placeholder_ground.png');
    }

    create() {
        this.sound.play('playBGMF');
        this.MAX_VELOCITY = 500;
        this.physics.world.gravity.y = 1000;

        //creating ground
        this.ground = this.add.group();
        for( let i = 0; i < game.config.width; i += 20) {
            let groundTile = this.physics.add.sprite(i, game.config.height - 20, 'placeholder_ground').setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
        }
    }
    update() {}
    // This collision function will run a specific function depending on 
    //what two object are colliding
    checkCollision(player, object, resultFunction) {
        if(player.x < object.x + object.width &&
            player.x + player.width > object.x &&
            player.y < object.y + object.height &&
            player.height + player.y > y)
            { resultFunction};
    }
    monsterCollision() {
        //returns the player to menu upon colliding with the monster
        this.scene.play("menuScene");
    }
}