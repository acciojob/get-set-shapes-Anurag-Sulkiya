//complete this code
class Rectangle {
	let area = 0;
	constructor(width, height){
        this.width = width;
		this.height = height;
	}

	get width(){
      return this.width = width;
	}

	get height(){
       return this.height = height
	}
	get width(){
       return this.width = width;
	}
	
	getArea(){
		let area = this.width * this.height;
	}
}

class Square extends Rectangle {
	let side;
	let perimeter;
	constructor(width, height){
       super(height, width);
	}
	
    side = this.height = this.width;
	getPerimeter(){
		perimeter = 4*this.side;
	}
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
