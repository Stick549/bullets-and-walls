var car, wall, speed, weight, deformation;
function setup() {
  createCanvas(400,400);
  bullet = createSprite(-20, 200, 50, 50);
  wall = createSprite(200, 200, 60, 200)
  speed = random(55, 90)
  weight = random(400, 1500)
  thickness = random(22,83)
  bullet.velocityX = 8
  bullet.shapeColor = "green"
  thick3 = thickness*thickness*thickness
  def1 = 0.5*weight*speed*speed
  deformation = def1/thick3
  console.log(deformation)
}

function draw() {
  background("white");  
  if (bullet.isTouching(wall)){
    bullet.velocityX = 0
    if (deformation > 10){
      bullet.shapeColor = "red"
    }
  drawSprites();
}}