const splitDataArray = [];
let Points = [];
let lowerCaseLetters = "a";
let upperCaseLetters = "A";
let lowerPoint = 1;
let upperPoint = 27;
let totalScore = 0;
let foundYou = [];

function createPoints(myArray, myLetter, myNumber) {
    for (let i = 0; i < 25; i++) {
        if (i == 0) {
            myArray.push(myLetter);
            myArray.push(myNumber);
        }
        myLetter = String.fromCharCode(myLetter.charCodeAt(0) + 1)
        myNumber++;
        myArray.push(myLetter);
        myArray.push(myNumber);
    }
}

function findDuplicateItem(){
    const fs = require('fs');
    const rawData = fs.readFileSync("sample.txt", 'utf-8');
    const dataArray = rawData.split("\n");
    let firstHalf = "";
    let secondHalf = "";

    for (i in dataArray) {
        const half = Math.ceil(dataArray[i].length / 2);
        firstHalf = dataArray[i].slice(0, half);
        secondHalf = dataArray[i].slice(half);
        for (i in firstHalf) {
            console.log(firstHalf[i]);
        }
    }
}

//createPoints(Points, lowerCaseLetters, lowerPoint);
//createPoints(Points, upperCaseLetters, upperPoint);
findDuplicateItem();