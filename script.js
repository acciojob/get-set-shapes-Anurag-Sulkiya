//complete this code
class Rectangle {

	constructor(width, height){
        this._width = width;
		this._height = height;
	}

	get width(){
      this._width = width;
	}

	get height(){
       this._height = height
	}

	getArea(){
		return this.width * this.height;
	}
}

class Square extends Rectangle {

	constructor(side){
       super(side, side);
		this._side = side;
	}
	
	getPerimeter(){
		return 4*this._side;
	}
	
}

const rectangle = new Rectangle(5,10);
console.log(Rectangle.width);
console.log(Rectangle.height);
console.log(Rectangle.getArea());

const square = new Square(7);
console.log(square.width);
console.log(square.height);
console.log(square.getArea());
console.log(square.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
