class Pig{
    constructor (x,y){
var options={
    restitution:0.5,
    friction:0.3,
    density:1
}

        this.pig= Bodies.rectangle(x,y,30,30,options);
        this.height=30;
        this.width=30;
        World.add(world,this.pig);

}
display(){
var pos= this.pig.position
var angle=this.pig.angle

push()
fill ("pink");
strokeWeight(7);
stroke ("green")
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER);
rect(0,0,30,30);
pop()

}
}