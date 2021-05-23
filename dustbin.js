class dustbin {
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.leftbody=Bodies.rectangle(x-100+10+40,y-60-10-50,20,100,options)
        this.rightbody=Bodies.rectangle(x+100-40, y-60-10-50,20,100,options)
        this.centrebody=Bodies.rectangle(x,y-60,100,20,options)
        this.image=loadImage("Images/dustbingreen.png");
        World.add(world, this.leftbody);
        World.add(world, this.rightbody);
        World.add(world, this.centrebody);

    }
    display(){
        push();
        rectMode(CENTER);
        fill(255);
        imageMode(CENTER)

        image(this.image,this.centrebody.position.x,this.centrebody.position.y-50,100,100)
        rect(this.centrebody.position.x,this.centrebody.position.y,100,10)
        rect(this.leftbody.position.x,this.leftbody.position.y,10,100)
        rect(this.rightbody.position.x,this.rightbody.position.y,10,100)
        
        pop();

    }
};

