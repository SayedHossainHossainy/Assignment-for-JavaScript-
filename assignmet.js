// Equality oprators(==)
// let numNeigbours =prompt("How many neigbours does your country?");
// if (numNeigbours==1){
//     console.log("Only one border");
// }else if(numNeigbours >1){
//     console.log("more than one border");
// }else if(numNeigbours==1 || numNeigbours<1){
//     console.log("No border");
// }




// Equality oprators(===)

// if (numNeigbours===1){
//     console.log("Only one border");
// }else if(numNeigbours >1){
//     console.log("more than one border");
// }else if(numNeigbours=== 0 || numNeigbours< -1){
//     console.log("No border");
// }




// let numNeigbours =prompt("How many neigbours does your country?");
// if (numNeigbours==1){
//     console.log("Only one border");
// }else if(numNeigbours >1){
//     console.log("more than one border");
// }else if(numNeigbours==1 || numNeigbours<1){
//     console.log("No border");
// }


// Logical operator


// let country = "Portaghal";
// let language = "English";
// let population = 40;



//  if(country=="Portaghal" && language =="English" && population =="50"){
//     console.log("she can life here.");

//  }else{
//     console.log("she can not life here");
//  }








// switch case

// let language = "amrica";
// switch(language)
// {
//     case "chaines":console.log("Most Number of native speakers");
//     break;

//     case "spanish":console.log("2nd place in number of native speaker");
//     break;

//     case "english":console.log("3rd place");
//     break;

//     case "hindi":console.log("Number 4");
//     break;

//     case "arabic":console.log("5th most spoken language");
//     break;

//     default:console.log("Great language to D");

// }






//function

// function describeCountry(country, population, capital) {

//     let result = country + "has" + population + "people and its capital city is" + capital

//     return result;
// }
// let afghanistan = describeCountry(" Afghanistan ", " 30 Milion ", " Kabul ");
// let Germany = describeCountry(" Germany ", " 6 Milion ", " German ");

// let Iran = describeCountry(" Iran ", " 82 Milion ", " Tehran");
// // console.log(afghanistan);
// // console.log(Germany);
// console.log(Iran);







// function decliration vs expressions

// let china = percentageQfWorld1(1441);
// let Germany = percentageQfWorld1(1345);
// let Iran = percentageQfWorld1(8000);

// function percentageQfWorld1(population) {
//     let result = (population / 7900 * 100);
//     return 'china has ' + population + ' million people so its about ' + result + '% of the world population.';
// }
// console.log(china);
// console.log(Germany);
// console.log(Iran);
// let china = percentageQfWorld2(1441);
// let Germany = percentageQfWorld2(1345);
// let Iran = percentageQfWorld2(8000);

// function percentageQfWorld2(population) {
//     let result = (population / 7900 * 100);


// }
// console.log(percentageQfWorld2(1345));
// console.log(percentageQfWorld2(8000));

// introductio to array

// let population = [74646, 54646, 6666, 64667];
// console.log(population);


// Basic array operation and metods

// let neighbours = ["USA", "Iran", "Afghanistan"];
// neighbours.push("Paksaitan");
// console.log(neighbours);


// let neighbours = ["USA", "Iran", "Afghanistan", "Paksaitan"];
// delete neighbours[3];
// console.log(neighbours);


// let neighbours = ["USA", "Iran", "Afghanistan"];
// let result = neighbours.indexOf("USA");
// console.log(result);


let neighbours = ["Paksaitan", "Iran", "Afghanistan"];
neighbours[0] = "Repablic of Paksaitan";
console.log(neighbours);