class Sistema {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.ps = []
    this.t = random(100);
  }
update(){
    // 0. Aumentar el tiempo
    this.t += 0.1;
    // 1. Actualización de posición
    this.pos.x = map(noise(this.t), 0,1,0,width);
    this.pos.y = map(noise(this.t + 10), 0,1,0,height);
    // 2. Agregamos partículas
    this.p = new Particula(this.pos.x, this.pos.y);
    this.ps.push(p);

    // 3.  Verificacion y eliminación de particulas muertas
    for (let i = 0; i < this.ps.length; i++)
if (!ps[i].isAlive){
    ps.splice(i, 1);
}
display(){
    for (let i = 0; i < this.ps.length; i++)
    this.ps[i].update();
    this.ps[i].display();
    }
}
}
}
