function sortImportedText() {
    const fs = require('fs')                            // Importing the fs module

    // Intitializing the readFileLines with filename
    fs.readFile("input.txt", (err, data) => {
        if (err) throw err;                             // This catches errors if there is no text file
        let myTotalCalories = 0;                        // This is my counter variable
        let myCurrentElf = 0;                           // This is my Elf variable
        const dataArray = data.toString().split("\n");  // This is the array created from the input.txt
        const elfWithCalories = [];                     // This is the object I'm going to fill with elves and their calories

        // This will loop through the array, adding numbers together until a blank line is reached.
        for (i in dataArray) {
            if (dataArray[i] == '') {
                myCurrentElf++;
                let myElf = [`Elf ${myCurrentElf}`, myTotalCalories];
                elfWithCalories.push(myElf);
                myTotalCalories = 0;
            }else {
                myTotalCalories = myTotalCalories + parseInt(dataArray[i])
            }
        }
        elfWithCalories.sort( (a, b) => a[1] - b[1] );
        console.log('The Top 3 Elves are as follows:')
        console.log(elfWithCalories[elfWithCalories.length -1][0], "Total Calories:", elfWithCalories[elfWithCalories.length -1][1])
        console.log(elfWithCalories[elfWithCalories.length -2][0], "Total Calories:", elfWithCalories[elfWithCalories.length -2][1])
        console.log(elfWithCalories[elfWithCalories.length -3][0], "Total Calories:", elfWithCalories[elfWithCalories.length -3][1])
        console.log("Top 3 Elves have: ", elfWithCalories[elfWithCalories.length -1][1] + elfWithCalories[elfWithCalories.length -2][1] + elfWithCalories[elfWithCalories.length -3][1], "Calories combined.")
    })

}

sortImportedText();