function sortImportedText() {
    // Intitializing the readFileLines with filename
    const fs = require('fs')
    const rawData = fs.readFileSync("input.txt", 'utf-8')

    let dataArray = rawData.split("\n");                        // This splits rawData up by each returned line in .txt file
    let myTotalCalories = 0;
    let myCurrentElf = 0;   
    const elfWithCalories = [];                                 // This is the object I'm going to fill with elves and their calories

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
    console.log('The Top 3 Elves are as follows:');
    console.log(elfWithCalories[elfWithCalories.length -1][0], "Total Calories:", elfWithCalories[elfWithCalories.length -1][1]);
    console.log(elfWithCalories[elfWithCalories.length -2][0], "Total Calories:", elfWithCalories[elfWithCalories.length -2][1]);
    console.log(elfWithCalories[elfWithCalories.length -3][0], "Total Calories:", elfWithCalories[elfWithCalories.length -3][1]);
    console.log("Top 3 Elves have: ", elfWithCalories[elfWithCalories.length -1][1] + elfWithCalories[elfWithCalories.length -2][1] + elfWithCalories[elfWithCalories.length -3][1], "Calories combined.");

}
sortImportedText();