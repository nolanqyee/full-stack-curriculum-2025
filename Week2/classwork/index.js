// 1. Write a JavaScript program to find the longest string in a given array
function findLongestString(arr) {
    let result = "";
    arr.forEach((element) => {
        result = element.length > result.length ? element : result;
    });
    return result;
}

// Test for findLongestString
const testArr1 = ["apple", "banana", "cherry", "date"];
console.log("Expected: banana, Output:", findLongestString(testArr1));

// 2. Write an arrow function that calculates the area of a rectangle
const calculateArea = (width, height) => width * height; // implied return, works when no curly braces
// Test for calculateArea
console.log("Expected: 20, Output:", calculateArea(4, 5));

// 3. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books:
const library = [
    {
        title: "The Road Ahead",
        author: "Bill Gates",
        readingStatus: true,
    },
    {
        title: "Walter Isaacson",
        author: "Steve Jobs",
        readingStatus: false,
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        readingStatus: false,
    },
];

function displayReadingStatus() {
    library.forEach((book) => {
        // with dots
        // console.log(book.title + " by " + book.author + (book.readingStatus ? ", being read" : ", not being read"));
        const { title, author, readingStatus } = book;
        const message = `${title} by ${author}. ${
            readingStatus ? "Is being read" : "Is not being read"
        }`;
        console.log(message);
    });
}

// Test for displayReadingStatus
displayReadingStatus();

// 4. Square the value of every element in an array, then print the result
function squareAndPrint(arr) {
    arr.forEach((num) => {
      console.log(num ** 2); // exponentiation operator
    })
}

// Test for squareAndPrint
const testArr2 = [1, 2, 3, 4, 5];
squareAndPrint(testArr2);

// 5. Filter array to numbers greater than 5
function filterGreaterThanFive(arr) {
    return arr.filter((num) => num > 5);
}

// Test for filterGreaterThanFive
const testArr3 = [3, 8, 1, 5, 9];
console.log("Expected: [8, 9], Output:", filterGreaterThanFive(testArr3));
