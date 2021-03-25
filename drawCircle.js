class drawCircle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.arc(this.x,this.y,this.radius,0,2*Math.PI);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }
    display();
}