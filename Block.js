class Block{
    constructor(x, y) {
        var options = {
           
            restitution :0.8,
            friction :1.0,
            density:20           
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.width = 100;
        this.height = 100;

        World.add(world, this.body);
      }
      display(){
        
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        stroke("black")
        strokeWeight(5)
        fill("yellow")
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,100,100);
        pop();
        }
      
      
}