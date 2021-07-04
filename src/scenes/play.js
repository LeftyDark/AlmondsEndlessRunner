class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    init() {}
    preload() {
        this.load.image('ground','./assets/Sprites/placeholder_ground.png');
        this.load.image('player', './assets/Sprites/noun_runningman_20.png');
        //running person by Kathleen Black from the Noun Project
        this.load.image('obstacle', './assets/Sprites/placeholder_obstacle_20.png');
        //obstacle by Ian Rahmadi Kurniawan from the Noun Project
        this.load.image('monster', './assets/Sprites/placeholder_deathbox.png');
    }

    create() {
        this.sound.play('playBGMF');
        this.MAX_VELOCITY = 500;
        this.physics.world.gravity.y = 1000;
        this.cameras.main.setBackgroundColor('#CCC');

        //creating ground
        this.ground = this.add.group();
        for( let i = 0; i < game.config.width; i += 20) {
            let groundTile = this.physics.add.sprite(i, game.config.height - 20, 'ground').setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
        }
        //creating the different objects in scene. Will need to be edited later to randomly generate obstacles over time
        this.player = new Player(this, game.config.width/2, game.config.height-100, 'player');
        this.physics.add.collider(this.player, this.ground);
        
        this.obstacle = new Obstacle(this, game.config.width*0.8, game.config.height-100, 'obstacle');
        this.obstacle.setVelocityX(this.obstacle.moveSpeed);
        this.physics.add.collider(this.obstacle, this.ground);
        this.airObstacle = new Obstacle(this, game.config.width*0.9, game.config.height-350, 'obstacle');
        this.airObstacle.body.allowGravity = false;
        this.airObstacle.setVelocityX(this.obstacle.moveSpeed);
        this.monster = this.physics.add.sprite(game.config.width-590, game.config.height-260, 'monster');
        this.monster.body.immovable = true;
        this.monster.body.allowGravity = false;
        this.physics.add.collider(this.monster, this.ground);
    }
    update() {
        this.obstacleDelete(this.obstacle, this.monster);
        this.obstacleDelete(this.airObstacle, this.monster);
        this.gameOver(this.player, this.monster);
        this.pushPlayer(this.player, this.obstacle);
    }
    // This function will delete an obstacle when it collides with the monster at the edge of the screen.
    //It has a slight bug where if the two obstacles are both colliding at the same time, it will fail to delete 1 of them.
    obstacleDelete(object1, object2) {
        if (object1.x < object2.x + object2.width && 
            object1.x + object1.width > object2.x && 
            object1.y < object2.y + object2.height &&
            object1.height + object1.y > object2. y) {
                object1.destroy();
        } else {
            return false;
        }
    }
    gameOver(player, monster) {
        //returns the player to menu upon colliding with the monster
        if (player.x < monster.x + monster.width && 
            player.x + player.width > monster.x && 
            player.y < monster.y + monster.height &&
            player.height + player.y > monster. y) {
                this.sound.stopAll();
                this.scene.start("menuScene");
        } else {
            return false;
        }
    }
    pushPlayer(player, gObstacle) {
        if (player.x < gObstacle.x + gObstacle.width && 
            player.x + player.width > gObstacle.x && 
            player.y < gObstacle.y + gObstacle.height &&
            player.height + player.y > gObstacle. y) {
                player.setVelocityX(gObstacle.moveSpeed);
        } else {
            player.setVelocityX(0);
        }
    }
    CreateGroundObstacle() {
        //this.newObstacle = 
    }
}