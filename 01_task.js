// Scope ................................

// globle scope ...

// var a = 10; 
// let b = 20;
// const c = 30;
// console.log(a,b,c);

// local scope ...

// if (true){
//     var d = 40; 
//     let e = 50;
//     const f = 60;
// }



// document.getElementById("javaScript").innerHTML=d;
// document.getElementById("javaScript").innerHTML=e);  err;
// document.getElementById("javaScript").innerHTML=f);    erro;

// +++++++++++++++++++++++++++++ String ++++++++++++++++++++++++

const Name = "Ismail";
const lastName = "Bhattipuri";
const p1 = "hello i am a student";
const num = 5;
// document.write(Name);
// document.write("<br>",lastName);
// const myName = new String('ismail2');
// const newString = Name.substring(0,3);
// Name.toUpperCase
// document.getElementById("javaScript").innerHTML=newString;
// const array = [Name.match(lastName)];

let result = document.getElementById("javaScript");
result.innerHTML= Name
+"<br>"
+lastName
+"<br>"
+p1
+"<br>"
+"<br> indexOf a is : "
+Name.indexOf("a")
+"<br> lastIndexOf a: "
+Name.lastIndexOf("a")
+"<br> charCodeAt 3: "
+Name.charCodeAt(3)
+"<br> codePointAt3: "
+Name.codePointAt(3)
+"<br>concat(lastName): "
+Name.concat(lastName)
+"<br>endsWith(l): "
+Name.endsWith("l")
+"<br>includes(i): "
+Name.includes("i")
+"<br>localeCompare(lastName): "
+Name.localeCompare(lastName)
+"<br>match(student) : "
+p1.match("student")
+"<br>slice(0,3) : "
+Name.slice(0,3)
+"<br>substring(0,3) : "
+Name.substring(0,3)
+"<br>toLocaleUpperCase() : "
+Name.toLocaleUpperCase()
+"<br>toLocaleLowerCase() : "
+Name.toLocaleLowerCase()

//  ..............   CLOSURE it will return all lexical scope  .......

// function randomColor(color) {
//     let colors = ["red", "green", "blue", "black", "orange", "purple"];
//     color = colors[Math.floor(Math.random() * colors.length)];
//     return color;
// }

function getRandomColor(color) {
    return color = '#' + Math.floor(Math.random()*16777215).toString(16);
  }

function clickHandler(fontSize,fontFamily,textColor,color){
    return function(){
        document.body.style.fontSize = fontSize;
        document.body.style.fontFamily = fontFamily;
        document.body.style.color = textColor;
        document.body.style.backgroundColor = color;
    }
}

document.getElementById("btn1").onclick = clickHandler("10px","Cooper Black",getRandomColor(),getRandomColor());
document.getElementById("btn2").onclick = clickHandler("12px","Palace Script MT",getRandomColor(),getRandomColor());
document.getElementById("btn3").onclick = clickHandler("10px","Snap ITC",getRandomColor(),getRandomColor());