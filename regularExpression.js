// +++++++++++ regular Expresion ++++++
// Regular expressions are patterns used to match
// character combinations in strings. In JavaScript,
// regular expressions are also objects.
// These patterns are used with
//  the exec() and test() methods of RegExp,
// and with the match(), matchAll(), replace(),
// replaceAll(), search(), and split() methods of String. This chapter describes JavaScript regular expressions.

// Character classes
// .	any character except newline
// \w\d\s	word, digit, whitespace
// \W\D\S	not word, digit, whitespace
// [abc]	any of a, b, or c // inside Square brackets
// [^abc]	not a, b, or c
// [a-g]	character between a & g
// Anchors
// ^abc$	start / end of the string
// \b\B	word, not-word boundary

// Escaped characters ...........

// \.\*\\	escaped special characters
// \t\n\r	tab, linefeed, carriage return
// Groups & Lookaround
// (abc)	capture group
// \1	backreference to group #1
// (?:abc)	non-capturing group
// (?=abc)	positive lookahead
// (?!abc)	negative lookahead

// Quantifiers & Alternation ...........

// a*a+a?	0 or more, 1 or more, 0 or 1
// a{5}a{2,}	exactly five, two or more
// a{1,3}	between one & three
// a+?a{2,}?	match as few as possible
// ab|cd	match ab or cd

const reg = /ismail/g;
const text = "ismail is name ismail is boy 9087 and ismail good coder";
// console.log(text.replace(reg, "ICB"));
// let response = reg.exec(text);// to get index of text
// console.log(response);
// response = reg.exec(text);//to get index of next same value
// console.log(response);
// console.log(reg.test(text)); // if value is ther then true else false
// console.log(text.match(reg)); // shows all value which matches
// console.log(text.matchAll(reg));
// console.log(text.replaceAll(reg));
// let result = text.search(reg);
// console.log(result); //get index of search value else -1 //only first value
// console.log(text.split(reg));
