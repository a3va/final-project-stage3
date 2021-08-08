class Alien{
    constructor(x, y){
     this.x = x;
     this.y = y;

    this.a1Image = loadImage("Alien1.jpg");
    this.a2Image = loadImage("Alien2.jpg");
    this.a3Image = loadImage("Alien3.jpg");
    this.a4Image = loadImage("Alien4.jpg");
    }

    display() {
        
        if(gameState === 1){
            this.AddImage(this.a1Image);
        } 
    
        if(gameState === 2){
            this.AddImage(this.a2Image);
        }

        if(gameState === 3){
            this.AddImage(this.a2Image)
        }
    }

    
}