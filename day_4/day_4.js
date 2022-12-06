const fs = require('fs');                                   //This is needed to import a txt file
const { start } = require('repl');
const rawData = fs.readFileSync("sample.txt", 'utf-8');      //This actually imports txt file (utf-8 is the style?... either way it's importaint)
//console.log(rawData)
let myString1 = '';
let myString2 = '';
let myString3 = '';
let startNumb = 0;
let endNumb = 0;
let set1 = new Set();
let set2 = new Set();

function getNumbers() {
    for (i in rawData) {
        // console.log(rawData[i])

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
        if (rawData[i] == "\n") {
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


            //console.log("set1", set1)
            //console.log("set2", set2)
            set1 = new Set();
            set2 = new Set();

        }
        if (rawData[i] == "-") {
            //Concat myNubs
            startNumb = parseInt(myString1 + myString2 + myString3);
            myString1 = '';
            myString2 = '';
            myString3 = '';
        }
        if (rawData[i] != "," && rawData[i] != "\n" && rawData[i] != "-") {
            if (myString1 == '') {
                myString1 = rawData[i];
            }else if (myString2 == "") {
                myString2 = rawData[i];
            }else if (myString3 == "") {
                myString3 = rawData[i];
            }
        }
    }
}

getNumbers();