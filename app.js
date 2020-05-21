
canvas = document.getElementById("canva1");
console.log(canvas);

w = 700;
h= 400;
// setting width
canvas.height = h;
canvas.width =w;

pen = canvas.getContext('2d');
console.log(pen);
function init(){
    canvas = document.getElementById("canva1");
    console.log(canvas);
    
    w = 700;
    h= 400;
    // setting width
    canvas.height = h;
    canvas.width =w;
    
    pen = canvas.getContext('2d');
    console.log(pen);
    // creating JSON objects
    e1 = {
        x:10,
        y:10,
        wbird : 60,
        hbird : 60,
        speed : 10,
    };
    e2 = {
        x:10,
        y:10,
        wbird : 60,
        hbird : 60,
        speed : 10,
    };
    e3 = {
        x:10,
        y:10,
        wbird : 60,
        hbird : 60,
        speed : 10,
    };
    virus = [e1,e2,e3];
  virus_image = new Image;
  virus_image.src="Assets/v1.png"
    canvas.addEventListener('keydown' , function(e){
        console.log(e);
    });
}
function draw(){
    pen.clearRect(0,0,w,h);
    // pen.fillRect(bird.x,bird.y,bird.wbird,bird.hbird);
    // pen.drawImage(virus_image,bird.x,bird.y,bird.wbird,bird.hbird)
    // pen.drawImage(virus_image,bird.x+300,bird.y+200,bird.wbird,bird.hbird)
    // pen.drawImage(virus_image,bird.x+400,bird.y+40,bird.wbird,bird.hbird)
}
function update(){
    bird.y+=bird.speed;
    if(bird.y>h || bird.y<=0){
        bird.speed*=-1;
    }
    // if(bird.y<=0){
    //     bird.speed*=-1;
    //     bird.x+=10;
    // }
}
function gameloop(){
    draw();
    update();
 console.log("mei bhi aagya bro");
}
init();
setInterval(gameloop,100);



