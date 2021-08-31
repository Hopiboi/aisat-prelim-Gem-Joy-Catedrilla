let     canvas = document.getElementById('canvas')
canvas.width = window.innerWidth * 0.7;
canvas.height = window.innerHeight * 0.9;
let context = canvas.getContext("2d");

class Circle {
    constructor(x, y, radius, weight, randomSpawn) {
        this.radius = radius;
        this.x = randomSpawn;
        this.y = radius;
        this.weight = weight;
    }

    
     
    update() {
        this.y += this.weight

        if (this.y > canvas.height) {
            this.y = 0;
            
            let random = parseInt((Math.random() * canvas.width) + 1)
            this.x = random
            
            let randomRadius = parseInt((Math.random() * 70) + 20)
            this.radius = randomRadius

            let randomWeight = parseInt((Math.random() * 10) +1)
            this.weight = randomWeight

            
        }   

        

    }

    draw() {
        
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        context.stroke();
        context.closePath();    
    }


    randomSpawn = parseInt((Math.random() * canvas.width))
    
}

    class Player {

        constructor() {

            this.width = 50
            this.height = 50
            this.x = canvas.width/2
            this.y = canvas.height/2 
            this.speed = 50

        }
        
        update(direction){
            
            if (direction == "ArrowUp") {
                this.y = this.speed
            }

            else if (direction == "ArrowDown") {
                this.y = this.speed
            }

            else if (direction == "ArrowRight") {
                this.x = this.speed
            }

            else if (direction == "ArrowLeft") {
                this.x = this.speed
            }

            if (this.x < 0) {
                this.x = canvas.width - this.width;
            }

            else if (this.x > canvas.width){
                this.x = 0
            }

            else if (this.y < 0) {
                this.y = canvas.height
            }

            else if (this.y > canvas.height) {
                this.y = 0
            }

        }

        draw() {
            context.beginPath();
            context.rect(this.x ,this.y , this.width , this.height )
            context.stroke();
        }

    }

function animate() {

    context.clearRect(0, 0, canvas.width, canvas.height);


    for(let i = 0; i < group.length; i++) {
        group[i].update();
        group[i].draw();

    }
    requestAnimationFrame(animate);
    
    square.update()
    square.draw()

}

//x , y , radius, weight
circle = new Circle(0, 0, 20, 10);
circle1 = new Circle(0, 0, 20, 10);
circle2 = new Circle(0, 0, 20, 10);
circle3 = new Circle(0, 0, 20, 10);
circle4 = new Circle(0, 0, 20, 10);
circle5 = new Circle(0, 0, 20, 10);
circle6 = new Circle(0, 0, 20, 10);
circle7 = new Circle(0, 0, 20, 10);
circle8 = new Circle(0, 0, 20, 10);
circle9 = new Circle(0, 0, 20, 10);
let group = [circle,circle1,circle2,circle3,circle4,circle5,circle6,circle7,circle8,circle9]

const square = new Player();

animate();
