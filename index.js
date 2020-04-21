import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const final2014 = [];
const filter2014 = fifaData.filter(function(item){
       if ((item["Year"] === 2014) && (item["Stage"] === "Final")) {
        final2014.push(item["Home Team Name"]);
        final2014.push(item["Away Team Name"]);
        final2014.push(item["Home Team Goals"]);
        final2014.push(item["Away Team Goals"]);
        
}
});
console.log(final2014);
function winner2014(dataArray){
    if(dataArray[2] > dataArray[3]){
        console.log(`${final2014[0]} is the winner`);
    } else {
        console.log(`${final2014[1]} is the winner`);
    }
}
winner2014(final2014);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finalArray = [];
 
    data.forEach(function(item){
        if(item.Stage === "Final"){
            finalArray.push(item);
        }
    })
    return finalArray;
};
console.log(getFinals(fifaData));


/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cbFinals) {
    const finalYears = [];
    const years = cbFinals(fifaData).map(function(element){
        finalYears.push(element.Year);
    })
    return finalYears;
};
console.log(getYears(getFinals));

// console.log(getYears(getFinals(fifaData)));

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callBack) {
    const winners = [];
    const winnerFilter = callBack(fifaData).filter(function(item){
        if (item["Home Team Goals"] > item["Away Team Goals"]){
            winners.push(item["Home Team Name"]);
        } else if(item["Away Team Goals"] > item["Home Team Goals"]) {
            winners.push(item["Away Team Name"]);
        } else {
            winners.push("Teams Tied")
        }
    })
    return winners;

};

console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and 
returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(cbWinners, cbYears) {
    for(let i = 0; i < cbWinners.length; i++){
        if(cbWinners[i] !== "Teams Tied"){
        console.log(`In ${cbYears[i]}, ${cbWinners[i]} won the world cup!`)
        } else {
        console.log(`In ${cbYears[i]}, both teams tied`)
        }
    }

};

getAllWinners(getWinners(getFinals), getYears(getFinals));

/* Task 7: Create a function called `getCountryWins` that takes the parameters 
`data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    const myTeamWins = []
    data.forEach(function(element){
        if((teamInitials === element["Home Team Initials"]) && (element["Home Team Goals"] > (element["Away Team Goals"]))) {
            myTeamWins.push(element);
        } else if((teamInitials === element["Away Team Initials"]) && (element["Away Team Goals"] > (element["Home Team Goals"]))){
            myTeamWins.push(element);
        }
    })
    console.log(myTeamWins);

    const numberMyTeamWins = myTeamWins.reduce(function(accumulator, item, index){
        return accumulator + index;
    },0)
    
    return numberMyTeamWins;
}



console.log(getCountryWins(getFinals(fifaData), "ITA"));


/* Task 8: Write a function called getGoals() that accepts a parameter `data` 
and returns the team with the most goals score per appearance (average goals for) 
in the World Cup finals */

function getGoals(data) {

};

getGoals(getFinals(fifaData));
    

/* Task 9: Write a function called badDefense() that accepts a parameter `data` and
 calculates the team with the most goals scored against them per appearance
  (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data`
 and returns the the average number of home team goals and away team goals scored per
  match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
 
    /* code here */

};

getAverageGoals();


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */