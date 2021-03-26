class Monster{
    constructor(x, y) {
        var options = {
          density: 5, 
          frictionAir: 0
                  }				
        this.body = Bodies.rectangle(x, y, 400, 200, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Monster-01.png");
    

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,400,200);
        pop();
      }
}





