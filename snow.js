class Snow{
    constructor(x,y){
      var  options = {
        friction : 1,
        density : 0.5,
        restitution : 0.8
        
      }
      this.body=Bodies.circle(x,y,25,options);
      this.r=25
      World.add(world,this.body) 
      this.image=loadImage("snow4.webp")

    }
    display(){
     imageMode(CENTER)

    image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
    }
}