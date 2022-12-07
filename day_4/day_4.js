const fs = require('fs');                                   //This is needed to import a txt file
const { start } = require('repl');
const rawData = fs.readFileSync("input.txt", 'utf-8');      //This actually imports txt file (utf-8 is the style?... either way it's importaint)
//console.log(rawData)
let myString1 = '';
let myString2 = '';
let myString3 = '';
let startNumb = 0;
let endNumb = 0;
let set1 = new Set();
let set2 = new Set();
let elfNumber = 0;
let isNotInsideOther = false;
let hasOverlap = 0;

function getNumbers() {
    for (i in rawData) {
        // console.log(rawData[i])
        if (rawData[i] != "," && rawData[i] != "\n" && rawData[i] != "-") {
            if (myString1 == '') {
                myString1 = rawData[i];
            }else if (myString2 == "") {
                myString2 = rawData[i];
            }else if (myString3 == "") {
                myString3 = rawData[i];
            }
        }

        if (rawData[i] == ",") {
            //Concat myNums
            endNumb = parseInt(myString1 + myString2 + myString3);
            // console.log("EndNumb", endNumb);
            // console.log("StartNum", startNumb)
            myString1 = '';
            myString2 = '';
            myString3 = '';
            //Next Elf
            for (let j = startNumb; j <= endNumb; j++) {
                set1.add(j)
            }
        }
        if (rawData[i] == "-") {
            //Concat myNubs
            startNumb = parseInt(myString1 + myString2 + myString3);
            myString1 = '';
            myString2 = '';
            myString3 = '';
        }

        if (rawData[i] == "\n") {
            //elfNumber++;
            //Concat myNums
            endNumb = parseInt(myString1 + myString2 + myString3);
            myString1 = '';
            myString2 = '';
            myString3 = '';
            //Next Elf
            for (let j = startNumb; j <= endNumb; j++) {
                set2.add(j)
            }
            // Going to need to compare the two sets here
            //console.log("Iran", elfNumber)
            compareSets(set1, set2)
            //Reset Sets
            set1 = new Set();
            set2 = new Set();

        }
    }
}

function compareSets(mySet1, mySet2){
    let myArray1 = Array.from(mySet1);
    let myArray2 = Array.from(mySet2);

    for (i in myArray1) {
        if (mySet2.has(myArray1[i])) {
            hasOverlap++
            break
        }
    }
}
getNumbers();
console.log(hasOverlap);

// Below was the answer to the first section of the project.

// const fs = require('fs');                                   //This is needed to import a txt file
// const { start } = require('repl');
// const rawData = fs.readFileSync("input.txt", 'utf-8');      //This actually imports txt file (utf-8 is the style?... either way it's importaint)
// //console.log(rawData)
// let myString1 = '';
// let myString2 = '';
// let myString3 = '';
// let startNumb = 0;
// let endNumb = 0;
// let set1 = new Set();
// let set2 = new Set();
// let elfNumber = 0;
// let isNotInsideOther = false;

// function getNumbers() {
//     for (i in rawData) {
//         // console.log(rawData[i])
//         if (rawData[i] != "," && rawData[i] != "\n" && rawData[i] != "-") {
//             if (myString1 == '') {
//                 myString1 = rawData[i];
//             }else if (myString2 == "") {
//                 myString2 = rawData[i];
//             }else if (myString3 == "") {
//                 myString3 = rawData[i];
//             }
//         }

//         if (rawData[i] == ",") {
//             //Concat myNums
//             endNumb = parseInt(myString1 + myString2 + myString3);
//             // console.log("EndNumb", endNumb);
//             // console.log("StartNum", startNumb)
//             myString1 = '';
//             myString2 = '';
//             myString3 = '';
//             //Next Elf
//             for (let j = startNumb; j <= endNumb; j++) {
//                 set1.add(j)
//             }
//         }
//         if (rawData[i] == "-") {
//             //Concat myNubs
//             startNumb = parseInt(myString1 + myString2 + myString3);
//             myString1 = '';
//             myString2 = '';
//             myString3 = '';
//         }

//         if (rawData[i] == "\n") {
//             //elfNumber++;
//             //Concat myNums
//             endNumb = parseInt(myString1 + myString2 + myString3);
//             myString1 = '';
//             myString2 = '';
//             myString3 = '';
//             //Next Elf
//             for (let j = startNumb; j <= endNumb; j++) {
//                 set2.add(j)
//             }
//             // Going to need to compare the two sets here
//             //console.log("Iran", elfNumber)
//             compareSets(set1, set2)
//             //Reset Sets
//             set1 = new Set();
//             set2 = new Set();

//         }
//     }
// }

// function compareSets(mySet1, mySet2){
//     let myArray1 = Array.from(mySet1);
//     let myArray2 = Array.from(mySet2);

//     let checkRight = myArray1.filter(val => !myArray2.includes(val))
//     let checkLeft = myArray2.filter(val => !myArray1.includes(val))

//     if (Object.keys(checkRight).length == 0 || Object.keys(checkLeft).length == 0) {
//         elfNumber++;
//     }
// }
// getNumbers();
// console.log(elfNumber)