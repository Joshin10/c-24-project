class hammer{
    constructor(x,y){
    var option={
    'density':2,
    'friction':1.0,
    'resitituation':0.5
    };
    this.body=Bodies.rectangle(x,y,50,100,options);
    this.width=width
    this.height=height
    world.add(world,this.body)
}
display(){
    var pos=this.body.postion
    pos.x=mouseX
    pos.y=mouseY
    var angle=this.body.angle;
    Push();
    translate(pos.x.pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(yellow)
    rect(0,0,this.width,this.height);
    Pop();

}
}