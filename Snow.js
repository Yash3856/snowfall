class Snow
{
     constructor(x,y,r)
     {
        var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		this.image = loadImage("snow4.webp")
		World.add(world, this.body);

	}
	display()
	{
			
			var snow=this.body.position;
			
			push()
			translate(snow.x, snow.y);
			imageMode(CENTER)
			image(this.image,0,0,this.r,this.r)
			pop()
			
	}

}


     