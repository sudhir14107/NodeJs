// var rect = {
//     perimeter: (x,y) => (2*(x+y)),
//     area : (x,y) => (x*y)
// };

var rect= require('./rectangle')

function solveRect(l,b){
    //console.log(`Solving for rectangle l : ${l} and b : ${b}`);
    rect(l,b, (err,rectangle) => {
        if(err){
            console.log("Error :"+err.message);
        }
        else{
            console.log(`Area is of ${l} and ${b} is ${rectangle.area()}`)
            console.log(`Perimeter is of ${l} and ${b} is ${rectangle.perimeter()}`)
        }
    });
    console.log("This is after the rect")
}

solveRect(2,2)
solveRect(2,3)