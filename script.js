// Logical Operators

// 1. && : both conditions are true
console.log(10 > 5 && 20 > 15); // true

// 2. && : both conditions are true
console.log(10 > 15 && 20 > 10); // false

// 3. || : at least one condition is true
console.log(10 > 20 || 15 > 10); // true

// 4. || : both conditions are false
console.log(5 > 10 || 20 < 15); // false

// 5. ! : reverse true to false
console.log(!(10 > 5)); // false

// 6. ! : reverse false to true
console.log(!(10 < 5)); // true

// 7. Two conditions using && and ||
let a = (10 > 5 && 20 > 15) || (5 > 10);
console.log(a); // true

// 8. Three conditions using &&, ||, and !
let a = (10 > 5 && 20 > 15) || !(5 > 10);
console.log(a); // true


// Ternary Operator

// 9. Age eligibility
let age = 20;
console.log(age >= 18 ? "Eligible" : "Not Eligible");

// 10. Marks
let marks = 40;
console.log(marks >= 35 ? "Pass" : "Fail");

// 11. Number greater than 10
let number = 15;
console.log(number > 10 ? "Greater than 10" : "Not greater than 10");

// 12. Even or odd
let number = 8;
console.log(number % 2 === 0 ? "Even" : "Odd");

// 13. Salary
let salary = 35000;
console.log(salary > 30000 ? "Good Salary" : "Low Salary");


// Concatenation & Template Strings

// 14. First name, last name, city using +
let firstName = "Aalan";
let lastName = "Bryant";
let city = "Neyveli";
console.log(firstName + " " + lastName + " " + city);

// 15. Name and age using concatenation
let name = "Aalan";
let age = 24;
console.log("My name is " + name15 + " and I am " + age15 + " years old.");

// 16. Product, price, brand using +
let product = "Laptop";
let price = 55000;
let brand = "Dell";
console.log("I bought a " + brand + " " + product + " for ₹" + price + ".");

// 17. Template string
let name = "Aalan";
let qualification = "B.Tech IT";
let company = "STACKLY";
console.log(`My name is ${name}, I have completed ${qualification}, and I work at ${company}.`);

// 18. Name, age, city using template string
let name = "Aalan";
let age = 24;
let city = "Neyveli";
console.log(`My name is ${name}, I am ${age} years old, and I live in ${city}.`);


// Type Casting — Implicit

// 19. String + Number
let a = "10" + 5;
console.log(a);        // "105"
console.log(typeof a); // string

// 20. Number + Number
let a = 10 + 5;
console.log(a);        // 15
console.log(typeof a); // number

// 21. Number + true
let a = 10 + true;
console.log(a);        // 11
console.log(typeof a); // number

// 22. Number + null
let a = 10 + null;
console.log(a);        // 10
console.log(typeof a); // number

// 23. String + true
let a = "Hello " + true;
console.log(a);        // "Hello true"
console.log(typeof a); // string

// 24. String + Array
let a = "Hello " + [1, 2, 3];
console.log(a);        // "Hello 1,2,3"
console.log(typeof a); // string

// 25. Number + Object
let a = 10 + {};
console.log(a);        // "10[object Object]"
console.log(typeof a); // string

// 26. Three different expressions
let a = "5" + 10;
let b = 10 + true;
let c = 10 + null;
console.log(a, typeof a); // 510 string
console.log(b, typeof b); // 11 number
console.log(c, typeof c); // 10 number


// Type Casting — Explicit

// 27. String to Number
let a = Number("100");
console.log(a); // 100

// 28. String to Number + typeof
let a = Number("25");
console.log(a);
console.log(typeof a); // number

// 29. true to Number
console.log(Number(true)); // 1

// 30. false to Number
console.log(Number(false)); // 0

// 31. Empty string to Number
console.log(Number("")); // 0

// 32. null to Number
console.log(Number(null)); // 0

// 33. undefined to Number
console.log(Number(undefined)); // NaN

// 34. "Hello" to Boolean
console.log(Boolean("Hello")); // true

// 35. Empty string to Boolean
console.log(Boolean("")); // false

// 36. 0, 1, -1 to Boolean
console.log(Boolean(0));  // false
console.log(Boolean(1));  // true
console.log(Boolean(-1)); // true

// 37. Array to Boolean
console.log(Boolean([])); // true

// 38. Object to Boolean
console.log(Boolean({})); // true


// Conditional Statements

// 39. Using if
let age = 20;
if (age >= 18) {
    console.log("Eligible");
}

// 40. Using if...else
let age = 16;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// 41. Marks
let marks = 50;
if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 42. Time using else if
let time = 15;
if (time >= 1 && time <= 6) {
    console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
    console.log("Morning");
} else if (time >= 13 && time <= 17) {
    console.log("Afternoon");
} else if (time >= 18 && time <= 19) {
    console.log("Evening");
} else if (time >= 20 && time <= 24) {
    console.log("Night");
} else {
    console.log("Invalid Time");
}

// 43. Temperature
let a = 30;
if (a > 35) {
    console.log("Hot");
} else if (a >= 20 && a <= 35) {
    console.log("Normal");
} else {
    console.log("Cold");
}

// 44. Nested if
let age = 20;
let height = 175;
let weight = 65;
if (age >= 18) {
    if (height >= 170) {
        if (weight >= 60) {
            console.log("Eligible");
        }
    }
}


// Switch Statement


// 45. Traffic Light
let trafficlight = "red";
switch (trafficlight) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Wait");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid traffic light");
}

// 46. Day
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case "Wednesday":
        console.log("Wednesday");
        break;
    case "Thursday":
        console.log("Thursday");
        break;
    case "Friday":
        console.log("Friday");
        break;
    case "Saturday":
        console.log("Saturday");
        break;
    case "Sunday":
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// 47. Choice
let choice = 2;
switch (choice47) {
    case 1:
        console.log("Start");
        break;
    case 2:
        console.log("Settings");
        break;
    case 3:
        console.log("Exit");
        break;
    default:
        console.log("Invalid choice");
}


// Loops


// 48. for loop: 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 49. while loop: 10 to 1
let a = 10;
while (a >= 1) {
    console.log(a);
    a--;
}

// 50. for...of and for...in
// Array of fruits using for...of

let fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

// Object using for...in

let person = {
    name: "Aalan",
    role: "Front End Developer",
    experience: "0 Years"
};
for (let key in person) {
    console.log(key + ":", person[key]);
}
