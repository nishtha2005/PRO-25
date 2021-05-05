class Paper {
    constructor(x,y,width,height){
        var options = {
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, 70, 70, options);
        this.width = 70;
        this.height = 70;
        this.image = loadImage("paper.png");

        World.add(world, this.body);
        
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop();
    }
}