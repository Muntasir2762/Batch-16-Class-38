

for (let i=1; i<=10; i++){ // 1, 2, 3, ....9, 10, 11
    console.log("Hello world");
    console.log(i);
}

let marks = [34, 65, 76, 89, 98];

// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);

for(let i = 0; i<=4; i++){ //0, 1, 2, 3, 4

    if(marks[i] >= 80){
        console.log(marks[i]+"=The grade is A+");
    }

    else if(marks[i] >= 70){
        console.log(marks[i]+"=The grade is A");
    }

    else if(marks[i] >= 60){
        console.log(marks[i]+"=The grade is A-");
    }

    else if(marks[i] >= 50){
        console.log(marks[i]+"=The grade is B");
    }

    else if(marks[i] >= 40){
        console.log(marks[i]+"=The grade is C");
    }

    else if(marks[i] >= 33){
        console.log(marks[i]+"=The grade is D");
    }

    else{
        console.log(marks[i]+"=The grade is F");
    }
}


// let number = [12, 34, 65, 78, 97, 80, -23, 56, -87];

// let age = [67, 89, 12, 78, 3, 5, 19, 18];

// "You are eligible for voting"
// "You are not eligible for voting"


// let year = [2005, 2016, 2025, 2023, 2021];