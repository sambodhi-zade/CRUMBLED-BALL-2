class ground {
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.ground = Bodies.rectangle(600,340,1200,15, options);

        World.add(world, this.ground); 
    }
    display(){

        push();
        rectMode(CENTER);

        fill("yellow");
        
       rect(this.ground.position.x,this.ground.position.y,1200,15);
       pop();
    }
};                                                           