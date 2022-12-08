const fs = require('fs');                                   //This is needed to import a txt file
const rawData = fs.readFileSync("input.txt", 'utf-8');      //This actually imports txt file (utf-8 is the style?... either way it's importaint)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }
    enter(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    exit() {
        if (!this.first) {
            return null;
        }
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

function checkRawData() {
    const myDataToCheck = new Queue;
    let firstCheck = 0;
    let targetSet = 14;
    let mySet = new Set;
    for (i in rawData) {
        if (firstCheck < 14){
            myDataToCheck.enter(rawData[i]);
            mySet.add(rawData[i])
            firstCheck++
            if (myDataToCheck.length == 14) {
                //Make first check here
                if (mySet.size == 14) {
                    console.log(targetSet);
                }
                mySet = new Set;
            }
        }else {
            myDataToCheck.exit();
            myDataToCheck.enter(rawData[i]);
            targetSet++;
            mySet.add(myDataToCheck.first.value) //1
            mySet.add(myDataToCheck.first.next.value) //2
            mySet.add(myDataToCheck.first.next.next.value) //3
            mySet.add(myDataToCheck.first.next.next.next.value) //4
            mySet.add(myDataToCheck.first.next.next.next.next.value) //5
            mySet.add(myDataToCheck.first.next.next.next.next.next.value) //6
            mySet.add(myDataToCheck.first.next.next.next.next.next.next.value) //7
            mySet.add(myDataToCheck.first.next.next.next.next.next.next.next.value) //8
            mySet.add(myDataToCheck.first.next.next.next.next.next.next.next.next.value) //9
            mySet.add(myDataToCheck.first.next.next.next.next.next.next.next.next.next.value) //10
            mySet.add(myDataToCheck.first.next.next.next.next.next.next.next.next.next.next.value) //11
            mySet.add(myDataToCheck.first.next.next.next.next.next.next.next.next.next.next.next.value) //12
            mySet.add(myDataToCheck.first.next.next.next.next.next.next.next.next.next.next.next.next.value) //13
            mySet.add(myDataToCheck.last.value)
            //Make check here
            if (mySet.size == 14) {
                console.log(mySet)
                console.log(targetSet);
                break;
            }
            mySet = new Set;
        }
        
    }
}

checkRawData();