class EnemyTank extends BaseTank{
    /** @type {PlayerTank} */
    player
    /** @type {number} */
    tankSpeed = 100
    /** @type {number} */
    shotInterval = 2000
    /** @type {number} */
    nextShot = 0
    constructor(scene, x, y, texture, frame, player){
        super(scene, x, y, texture, frame)
        this.player = player
        this.hull.angle = Phaser.Math.RND.angle()
    }
    update(time, delta){
        super.update()
    }
    damage(){
        this.damageCount++
        if(this.damageCount >= this.damageMax){
            this.turret.destroy()
            this.hull.destroy()
        }else if(this.damageCount == this.damageMax -1){
            this.burn()
        }
    }
}