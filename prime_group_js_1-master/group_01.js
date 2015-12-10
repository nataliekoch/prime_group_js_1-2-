var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var atticusBonus = [];
var jemBonus = [];
var booBonus = [];
var scoutBonus = [];

var employees = [atticus, jem, boo, scout];

var bonusEmployees = [atticusBonus, jemBonus, booBonus, scoutBonus];

function calcBonus() {
	for(i = 0; i < employees.length; i++){
		stiCalc(employees[i], bonusEmployees[i]);
	}
}

// Write a function that consumes one employee array, and 
//returns another array that contains:
// - The first item should also contain the employees name.
// - The second item should contain the percentage of STI the employee is to receive.
// - The third item should be the adjusted annual compensation (base annual + STI)
// - The fourth item should be the employees total bonus rounded to the nearest dollar.
var stiCalc = function (employeeArray, bonusEmployees) {

	bonusEmployees[0] = employeeArray[0];

	var sti = 0;
	// To calculate an individuals STI:
	// - Those who have a rating of a 2 or below should not receive a bonus.
	if (employeeArray[3]<=2) {
		sti = 0;
	}
	// - Those who have a rating of a 3 should receive a base bonus of 4% of 
	//their base annual income.

	else if (employeeArray[3]==3) {
		sti = .04;
	}
	// - Those who have a rating of a 4 should receive a base 
	//bonus of 6% of their base annual income.

	else if (employeeArray[3]==4) {
		sti = .06;
	}
	// - Those who have a rating of a 5 should receive a base bonus of 10% 
	//of their base annual income.
	else if (employeeArray[3]==5) {
		sti = .10
	}

	// - If they have 4 employee numbers, this means they have been with the company for longer than 15 years, 
	// and should receive an additional 5%.
	if (employeeArray[1].length==4) {
		sti += .05
	}
	// - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%. 

	if (employeeArray[2]>65000) {
		sti -= .01;
	}
	// - No bonus can be above 13% total.
	if (sti > .13) {
		sti = .13;
	}

	bonusEmployees[1] = sti;
	// - The third item should be the adjusted annual compensation (base annual + STI)
	bonusEmployees[2]=  Number(employeeArray[2]) + Number(employeeArray[2])*sti;

	// - The fourth item should be the employees total bonus rounded to the nearest dollar.

	bonusEmployees[3] = Math.round(Number(employeeArray[2])*sti);

	return bonusEmployees;
}

calcBonus();
console.log(bonusEmployees);



