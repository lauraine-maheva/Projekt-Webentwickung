

class Bar{//pour creer les bar

    constructor(bar, x, y, height, color){//le parametre que change chaque fois quon trace un rectangle

        this.form= SVG(bar, 'rect' , {});
        this.x = x;
        this.y = y;
        this.height = height;
        this.color = color;
    }
    draw(){
        setattr(this.form, {x: this.x, y:this.y, width:90, height: this.height, fill:this.color});
    }// this.form est egal au rctangle .fat reference a this form de la ligne 7
}