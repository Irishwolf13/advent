const splitDataArray = [];
let Points = [];
let lowerCaseLetters = "a";
let upperCaseLetters = "A";
let lowerPoint = 1;
let upperPoint = 27;
let totalScore = 0;
let foundDuplicates = [];
const fs = require('fs');
const rawData = fs.readFileSync("sample.txt", 'utf-8');
const dataArray = rawData.split("\n");
let firstHalf = "";
let secondHalf = "";
let frank = {};

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
    for (i in dataArray) {
        const half = Math.ceil(dataArray[i].length / 2);
        firstHalf = dataArray[i].slice(0, half);
        secondHalf = dataArray[i].slice(half);
        let breakHelper = true;

        for (i in firstHalf) {
            if (breakHelper){
                for (j in secondHalf){
                    if (firstHalf[i] == secondHalf[j]) {
                        foundDuplicates.push(secondHalf[j]);
                        breakHelper = false;
                        break
                    }
                }
            }else {
                break
            }
        }
    }
    console.log("Arra", foundDuplicates)
    for (i in foundDuplicates) {
        for (j in Points) {
            if (foundDuplicates[i] == Points[j]) {
                totalScore = totalScore + Points[parseInt(j) + 1]
                console.log(totalScore)
                break
            }
        }
    }
}

function threeLines() {
    
}
createPoints(Points, lowerCaseLetters, lowerPoint);
createPoints(Points, upperCaseLetters, upperPoint);
//findDuplicateItem();
threeLines();