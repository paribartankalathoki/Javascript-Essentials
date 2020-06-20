console.log("Hello javascript!");

/**
* functions
* functions are the tasks defined by a set of instructions that can be run at a certain point in time
*/

function makeCoffee(sugar, milk) {
	var instructions = "Boil water, ";
	instructions += " pour into a cup, ";
	instructions += " add coffee granules,";
	instructions += " add " + sugar + " spoons of sugar,";
	instructions += " add "+ milk + " % milk.";
	return instructions;
};

console.log( makeCoffee(3, 10));

var car = {
	color: "red",
	speed: 200,
	drive: function() {
		return "drive";
	}
};

var list = [
	"Apple",
	"Orange",
	"Pineapple"
];

var car = {
	make: "volvo",
	speed: 1000,
	engine: {
		size: 0.2,
		make: "bmw",
		fuel: "petrol",
		position: [
			{maker: "BMWER"}, {maker: "MBWER2"}
		]
	}
};

// access the member of the method
console.log("accessing the members of car: ", car.make);

// add two numbers

function add(a, b) {
	return a+b;
};

console.log(add(10, 20));


var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons:[
            { maker: "BMW" },
            { maker: "BMW2" }
        ]
    },
    drive: function(){ return "dive"; }
};

var array = [ 
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
    function(){ return "dive"; }
];

function name() {
	var fullname = "firstname lastname";
	function join(name) {
		return "MR. "+ name;
	}
	return concat(fullname);
};


// comparision operators in js
// == it always check only the value assign in the object
// == operators always return boolean value and it is case sensative

// NaN is a preemmitive datatype and use never use NaN with comparision operator

// === it always check data type as well as value in assigned in the objects



// if condition


var carsLeft = 0;
carsLeft = 0;
greenMan = "Yes";

if(greenMan === 'yes') {
	console.log('cross the road');
} else if (carsLeft === 0) {
	console.log('all clear, cross the road.');
} else {
	console.log("stay where you are.");
}



var classRegister = ["abc", "def", "ghi"];

// normal for loop
for (var i = classRegister.length - 1; i >= 0; i--) {
	console.log(classRegister[i]);
}

for (var i = 0; i < classRegister.length; i++) {
	classRegister[i]
}

// for in loop

for(var index in classRegister) {
	console.log('classRegister Index: ' + classRegister[index]);
}

// es6 example:

var symbolName = "value reference in memory";
let letSymbol = "scoped value";
const symName = "constant value in memory"



var element = document.createElement('div');

element.style.cssText = "width:200px; height:20px; background:blue;";

element.onclick = function(){ alert('hello'); };

//document.body.appendChild( element );

var target = document.getElementById('yellow');

document.body.insertAfter( element, target );