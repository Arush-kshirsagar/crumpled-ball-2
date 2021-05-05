class Dustbin {
    constructor(x, y) {
       
        this.x=x;
        this.y=y;
        this.dustbinWidth=200;
        this.dustbinHeight=213;
        this.wallthickness=20;
        this.image=loadImage("dustbingreen.png");
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallthickness, { isStatic:true });
        this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth / 2 ,this.y- this.dustbinHeight / 2,this.wallthickness,this.dustbinHeight, { isStatic: true })
       
        this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth / 2 ,this.y- this.dustbinHeight / 2, this.wallthickness,this.dustbinHeight, { isStatic:true })
        

        
        World.add(world, this.bottomBody);
        World.add(world, this.leftWallBody);
        World.add(world, this.rightWallBody)
    }
    display(){
     
      var posleft=this.leftWallBody.position;
      var posright=this.rightWallBody.position;
      var posbottom=this.bottomBody.position;
    
      
      push();
      translate(posleft.x,posleft.y);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill("red");
      stroke(4);
      rotate(this.angle)
      //rect(0,0,this.wallthickness,this.dustbin.height);
      
      pop();
      

     push();
      translate(posright.x,posright.y);
      rectMode(CENTER);
      angleMode(RADIANS)
      fill("red");
      stroke(4);
      rotate(-1*this.angle)
      //rect(0,0,this.wallthickness,this.dustbin.height);
      pop();
      
      push();
      translate(posbottom.x,posbottom.y+10);
      rectMode(CENTER);
      angleMode(RADIANS)
      fill("red");
      stroke(4);
      imageMode(CENTER)
      image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
      pop();
    }

}