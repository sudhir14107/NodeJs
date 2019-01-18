var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area : (x,y) => (x*y)
};

function solveRect(l,b){
    console.log(`Solving for rectangle l : ${l} and b : ${b}`);
    if(l<0 && b<0){
        console.log('Rectangle dimensions should be greater than zero');
    }
    else{
        console.log(`Area of the Rectangle is : ${rect.area(l,b)}`);
        console.log(`Perimeter of the Rectangle is : ${rect.perimeter(l,b)}`)
    }
}

solveRect(2,2)
solveRect(2,3)