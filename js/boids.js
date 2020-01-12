
var canvas = document.getElementById('boidCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var w  = window.innerWidth
var h = window.innerHeight;
var c = canvas.getContext('2d');
var g = 4;

function rnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rndColour() {
    var col = 'rgba(' + rnd(150, 255) + ', ' + rnd(150, 255) + ', ' + rnd(150, 255) + ', 1)'; 
    return col;
}

function Circle(){
    
    this.r = 6;

    this.x = rnd((this.r * 2), (w - (this.r * 2)));
    this.y = rnd((h / 2), this.r);
    this.dx = rnd(1, 6);
    this.dy = rnd(1, 6);
    this.colour = rndColour();
    

    this.draw = function()
    {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI *2, false);
        c.fillStyle = this.colour;
        c.fill();

    }

    this.update = function()
    {
        if(this.x + this.r > w || this.x - this.r < 0)
        {
            this.dx = -this.dx;
        }
        this.x += this.dx;

        /* gravity */

        // y bounds
        if(this.y + this.r > h || this.y - this.r < 0)
        {
            this.dy = -this.dy;
            
        }

        this.dy = this.dy - g;

        this.y -= this.dy;
        

               
  


  
        this.draw();
    }

}


// generate circles
var circles = [];

for (let i = 0; i < 21; i++) {
    var circ = new Circle();
    circles.push(circ);
    
}


// animate loop
var animate = function() { 
    requestAnimationFrame(animate);
    c.clearRect(0, 0 , w, h);

   console.log(circles[0].dy);


   for (let i = 0; i < circles.length; i++) {
       circles[i].update();
       
   }


 

 }


 animate();