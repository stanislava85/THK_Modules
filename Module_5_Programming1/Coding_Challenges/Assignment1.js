//https://codepen.io/_stani_slava_/pen/GRZZqJB

const weeklyIncome = parseInt(prompt("weekly income:"));
const foodCost = parseInt(prompt("food cost:"));
const housingCost = parseInt(prompt("housing cost:"));
const transportationCost = parseInt(prompt("transportation cost:"));
const otherCost = parseInt(prompt("other cost:"));
const howMuchYouWantToSaveInAYear = parseInt(prompt("how much you want to save in a year:"));

const howMuchYouWantToSaveAWeek = howMuchYouWantToSaveInAYear / 52;

const totalWeeklyCost = foodCost + housingCost + transportationCost + otherCost;
const output = weeklyIncome - totalWeeklyCost;

const X = howMuchYouWantToSaveAWeek - output;
if (output > howMuchYouWantToSaveAWeek){
	console.log("You are on track!");
}else{
	console.log("You need to save " + X + " more a week!");
	}