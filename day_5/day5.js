const fs = require('fs');                                   //This is needed to import a txt file
const rawData = fs.readFileSync("input.txt", 'utf-8');      //This actually imports txt file (utf-8 is the style?... either way it's importaint)

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class stackLinkedList {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.legnth = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        const newNode = new Node(value);
        if (this.legnth == 0) {
            this.top = newNode;
            this.bottom = newNode;
        }else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.legnth++;
        return this;
    }
    pop(){
        if (!this.top) {                        //If this is true, this is an empty stack
            return null;
        }
        if (this.top == this.bottom) {          //If this is true, then there is only one node left
            this.bottom = null;
        }
        const holdingPointer = this.top;        //This holds removed node in memory
        this.top = this.top.next;
        this.legnth--;
        return holdingPointer;                  //This will return the node that was removed.  
    }
}

class stackArrays {
    constructor(){
        this.array = [];
    }
    peek(){
        return this.array[this.array.length-1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        return this.array.pop();        
    }
}

function processFromRawData() {
    let myPosition = 1;
    let myNewArrayNumber = 1;
    for (i in rawData) {

        if (myPosition == 2) {
            if (rawData[i] == '1') {
                createStacksFromArrays(myArray1, myStack1)
                createStacksFromArrays(myArray2, myStack2)
                createStacksFromArrays(myArray3, myStack3)
                createStacksFromArrays(myArray4, myStack4)
                createStacksFromArrays(myArray5, myStack5)
                createStacksFromArrays(myArray6, myStack6)
                createStacksFromArrays(myArray7, myStack7)
                createStacksFromArrays(myArray8, myStack8)
                createStacksFromArrays(myArray9, myStack9)
                break
            }
            if (rawData[i] != ' ') {
                myArray1.push(rawData[i])
            }
        }
        if (myPosition == 6) {
            if (rawData[i] != ' ') {
                myArray2.push(rawData[i])
            }
        }
        if (myPosition == 10) {
            if (rawData[i] != ' ') {
                myArray3.push(rawData[i])
            }
        }
        if (myPosition == 14) {
            if (rawData[i] != ' ') {
                myArray4.push(rawData[i])
            }
        }
        if (myPosition == 18) {
            if (rawData[i] != ' ') {
                myArray5.push(rawData[i])
            }
        }
        if (myPosition == 22) {
            if (rawData[i] != ' ') {
                myArray6.push(rawData[i])
            }
        }if (myPosition == 26) {
            if (rawData[i] != ' ') {
                myArray7.push(rawData[i])
            }
        }
        if (myPosition == 30) {
            if (rawData[i] != ' ') {
                myArray8.push(rawData[i])
            }
        }
        if (myPosition == 34) {
            if (rawData[i] != ' ') {
                myArray9.push(rawData[i])
            }
        }
        if (rawData[i] == '\n') {
            myPosition = 0;
        }
        myPosition++;
    }
}

function createStacksFromArrays(myArray, myStack) {
    let verArray = myArray.reverse()
    for (i in verArray) {
        myStack.push(verArray[i])
    }
}

function moveCargo() {
    let setMove = false;
    let moveNumber = '';

    let setStartingStack = false;
    let startingStackNumber = '';

    let setEndingStack = false;
    let endingStackNumber = '';

    for (i in rawData) {
        // This gets our number of cases to move
        if (rawData[i] === 'f') {
            setMove = false;
        }
        if (setMove == true) {
            if (rawData[i] != ' ') {
                moveNumber = moveNumber + rawData[i];
            }else {
                if (moveNumber != ''){
                    moveNumber = parseInt(moveNumber);
                    //console.log("MoveNumber", moveNumber);
                    setMove = false;
                }
            }
        }
        if (rawData[i] === 'e'){
            setMove = true;
        }

        //This gets us our stack to remove from
        if (rawData[i] === 't' || rawData[i] === "o") {
            setStartingStack = false;
        }
        if (setStartingStack == true) {
            if (rawData[i] != ' ') {
                startingStackNumber = startingStackNumber + rawData[i];
            }else {
                if (startingStackNumber != ''){
                    startingStackNumber = parseInt(startingStackNumber);
                    //console.log("StartingStack", startingStackNumber)
                    setStartingStack = false;
                }
            }
        }
        if (rawData[i] === 'm'){
            setStartingStack = true;
        }

        //This gets us our stack to move TO
        if (rawData[i] === 'm') {
            setEndingStack = false;
        }
        if (setEndingStack == true) {
            if (rawData[i] != ' ') {
                if ( rawData[i] != 'o') {
                    endingStackNumber = endingStackNumber + rawData[i];
                    endingStackNumber = parseInt(endingStackNumber);
                    //console.log("endingStackNumber", endingStackNumber);
                    setEndingStack = false;
                    // *** Make Moves here ***
                    makeMovesHere(moveNumber, startingStackNumber, endingStackNumber);
                    // Reset Numbers
                    moveNumber = '';
                    startingStackNumber = '',
                    endingStackNumber = '';
                }
            }
        }
        if (rawData[i] === 't'){
            setEndingStack = true;
        }
    }
}

function makeMovesHere(numbToMove, fromHere, toHere) {
    // console.log(numbToMove)
    // console.log(fromHere)
    // console.log(toHere)
    for (let i = 1; i <= numbToMove; i++) {
        myStacks[toHere -1].push(myStacks[fromHere -1].pop())
    }
}

const myArray1 = [];
const myArray2 = [];
const myArray3 = [];
const myArray4 = [];
const myArray5 = [];
const myArray6 = [];
const myArray7 = [];
const myArray8 = [];
const myArray9 = [];
const myStack1 = new stackArrays();
const myStack2 = new stackArrays();
const myStack3 = new stackArrays();
const myStack4 = new stackArrays();
const myStack5 = new stackArrays();
const myStack6 = new stackArrays();
const myStack7 = new stackArrays();
const myStack8 = new stackArrays();
const myStack9 = new stackArrays();
const myStacks = [myStack1, myStack2, myStack3, myStack4, myStack5, myStack6, myStack7, myStack8, myStack9]

processFromRawData();
moveCargo();
for (i in myStacks) {
    console.log(myStacks[i].peek())
}