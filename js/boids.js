
var canvas = document.getElementById('boidCanvas');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var w  = window.innerWidth
var h = window.innerHeight;
var c = canvas.getContext('2d');


function rnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rndColour() {
    var col = 'rgba(' + rnd(150, 255) + ', ' + rnd(150, 255) + ', ' + rnd(150, 255) + ', 0.8)'; 
    return col;
}

function Circle(){
    
    this.r = 6;

    this.x = rnd((this.r * 2), (w - (this.r * 2)));
    this.y = rnd((this.r * 2), (h - (this.r * 2)));
    this.dx = rnd(1, 5);
    this.dy = rnd(1, 5);
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
    
        if(this.y + this.r > h || this.y - this.r < 0)
        {
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }

}

var circles = [];

for (let i = 0; i < 999; i++) {
    var circ = new Circle();
    circles.push(circ);
    
}

console.log(circles.length);


var animate = function() { 
    requestAnimationFrame(animate);
    c.clearRect(0, 0 , w, h);

   // console.warn('%c < %cWee ', 'color:lime;background:black','color:pink;background:black;font-weight:bolder');


   for (let i = 0; i < circles.length; i++) {
       circles[i].update();
       
   }


 

 }


 animate();