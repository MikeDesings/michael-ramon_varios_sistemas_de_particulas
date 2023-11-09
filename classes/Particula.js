class Particula {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);
    this.lifespan = Math.ceil(random(10, 200));
    this.isAlive = true;
    this.side = Math.ceil(random(3, 15));
  }
  update() {
    this.r = random();

    if (this.r < 0.25) {
        // hacia arriba
      this.pos.x -= this.side;
    } else if (this.r < 0.5) {
        // hacia la derecha
      this.pos.x += this.side;
    } else if (this.r < 0.75) {
        // hacia abajo
        this.pos.x += this.side;
    } else (this.r < 0.6) {
        // hacia la izquierda
    }
    this.lifespan -= 1;
    if(this.lifespan <= 0){
        this.isAlive = false;
    }
  }
  display() {
    square(this.pos.x, this.pos.y, this.side);
  }
}
