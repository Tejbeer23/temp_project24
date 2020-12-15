class paper{
    constructor(){
        var options ={
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
        }
        this.body = Bodies.circle(20,350,5,5,options,{isStatic:false})
        World.add(world,this.body);
    }

    display(){
        
        ellipse(20,350,5,5);
        fill("white");

    }
}