// Variables
// Most of the time, a JavaScript application needs to work with information. Here are two examples:

// An online shop – the information might include goods being sold and a shopping cart.
// A chat application – the information might include users, messages, and much more.
// Variables are used to store this information.

// A variable
// A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

// To create a variable in JavaScript, use the let keyword.

// The statement below creates (in other words: declares) a variable with the name “message”:
let message;
// Now, we can put some data into it by using the assignment operator =:



message = 'Hello'; // store the string 'Hello' in the variable named message

// The string is now saved into the memory area associated with the variable. We can access it using the variable name:


alert(message); // shows the variable content

// To be concise, we can combine the variable declaration and assignment into a single line:

// let message = 'Hello!'; // define the variable and assign the value

// alert(message); // Hello!

// We can also declare multiple variables in one line:

// let user = 'John', age = 25, message = 'Hello';

// That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a single line per variable.

// The multiline variant is a bit longer, but easier to read:

// let user = 'John';
// let age = 25;
// let message = 'Hello';
// Some people also define multiple variables in this multiline style:
// We can easily grasp the concept of a “variable” if we imagine it as a “box” for data, with a uniquely-named sticker on it.

// For instance, the variable message can be imagined as a box labeled "message" with the value "Hello!" in it:
// We can put any value in the box.

// We can also change it as many times as we want:

// let message;

// message = 'Hello!';

message = 'World!'; // value changed

alert(message);
// When the value is changed, the old data is removed from the variable:
// There are two limitations on variable names in JavaScript:

// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.
// Examples of valid names:

let userName;
let test123;
// When the name contains multiple words, camelCase is commonly used. That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.

// What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning.

// These names are valid:

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

// Case matters
// Variables named apple and APPLE are two different variables.
// Reserved names
// There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.

// For example: let, class, return, and function are reserved.

// The code below gives a syntax error:

// let let = 5; // can't name a variable "let", error!
// let return = 5; // also can't name it "return", error!

// To declare a constant (unchanging) variable, use const instead of let:

const myBirthday = '18.04.1982';
// Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:

// const myBirthday = '18.04.1982';

// myBirthday = '01.01.2001'; // error, can't reassign the constant!
// When a programmer is sure that a variable will never change, they can declare it with const to guarantee and clearly communicate that fact to everyone.

// Uppercase constants
// There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.

// Such constants are named using capital letters and underscores.

// For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:
// summary
// We can declare variables to store data by using the var, let, or const keywords.

// let – is a modern variable declaration.
// var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
// const – is like let, but the value of the variable can’t be changed.
// Variables should be named in a way that allows us to easily understand what’s inside them.