class ground{

constructor(x,y,width,height){

var property = {

'isStatic':true

}

this.body = Bodies.rectangle(x,y,width,height,property);
this.width = width;
this.height = height;
World.add(world,this.body)

}

show(){
var pos = this.body.position
rectMode(CENTER)
rect(pos.x,pos.y,this.width,this.height)






}

















}