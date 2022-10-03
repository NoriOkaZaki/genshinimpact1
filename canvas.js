var image = document.querySelector("img");
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// context
var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 300);
// c.fillRect(200, 100, 100, 100);
// c.fillRect(300, 100, 100, 300);

// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(500, 100, 100, 300);
// c.fillRect(600, 100, 100, 100);
// c.fillRect(600, 300, 100, 100);
// c.fillRect(700, 100, 100, 300);

// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(900, 100, 100, 300);
// c.fillRect(1000, 100, 100, 100);

// c.fillStyle = 'rgba(0, 0, 0, 0.5)';
// c.fillRect(1200, 100, 100, 100);
// c.fillRect(1200, 250, 100, 150);

// // line
// c.beginPath();
// c.moveTo(500, 450);
// c.lineTo(450, 550);
// c.lineTo(350, 550);
// c.lineTo(425, 600);
// c.lineTo(375, 700);
// c.lineTo(475, 625);
// c.lineTo(550, 675);
// c.lineTo(525, 575);
// c.lineTo(600, 500);
// c.lineTo(495, 550);
// c.lineTo(500, 450);

// c.strokeStyle = "yellow";
// c.stroke();

// c.beginPath();

// c.moveTo(800, 500);
// c.lineTo(1000, 500);
// c.lineTo(800, 650);
// c.lineTo(900, 400);
// c.lineTo(1000, 650);
// c.lineTo(800, 500);

// c.strokeStyle = "orange";
// c.stroke();



// // Arc /circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.fill();
// c.strokeStyle = 'blue';
// c.stroke();

for (var i=0; i < 30; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 6, false);
    c.strokeStyle = '#0ff';
    c.stroke();
    
}
// Below here is for moving circles

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
var minRadius = 2;

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
});

// function that creates circle
function Circle(x, y, dx, dy, radius) {
    
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        var r;
        var g;
        var b;
        

        this.draw = function () {
            r = Math.random() * 255;
            g = Math.random() * 255;
            b = Math.random() * 255;

            // c.drawImage(
            //     image, this.x, this.y, this.radius * 15, this.radius * 15
            // )
            
            
            
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle = `rgb(${r}, ${g}, ${b})`;
            c.stroke();
            c.fillStyle = `rgb(${r}, ${g}, ${b})`;
            c.fill();

        }
        this.update = function () {
            if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;

            // interactivity
            if (mouse.x -this.x < 50 && mouse.x - this.x > -50
                && mouse.y - this.y < 50 && mouse.y -this.y > -50) {
                if(this.radius < maxRadius) {
                    this.radius += 5;
                }
            } else if (this.radius > this.minRadius){
                this.radius -= 1;
            }

            this.draw();
        }
    
}



var circleArray = [];

for (var i = 0; i < 1000; i++){
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    var radius = Math.random() * 3 +1;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for ( var i = 0; i < circleArray.length; i++ ) {
        circleArray[i].update();
    }
    
}

// var screen = document.querySelector('canvas');
// screen.addEventListener('click', animate);

animate();