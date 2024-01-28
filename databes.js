//(2)الموضوع المحاضره عن الالمتغيرات
//var متغير
//let متغير
// console.log(); طباعة
//الفرق مابي var let
//----------------------------------
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
//------------------------------------------
// var m='hello 55';

// console.log(m); //طباعه
// console.log(m);
// console.log(m);
// console.log(m);
//---------------------------------------
// let m=" mohamed ";
// let age="21";
// let t=' tarek ';
// console.log('hi'+ m);
// console.log(age +m);
// console.log(t);
// console.log(m+t);
//----------------------------------------
// let m='mo',t='tt',h='hh';

// console.log(m+",");
// console.log(t+",");
// console.log(h+",");
//--------------------------------------------
// console.log(m);
// console.log(t);
// let t=22; // يطلع التفاصيل الخطاء
// var m="mm";//undefined
//---------------------------------
// var m=22;
// var m=21;
// console.log(m);//21
//---------------------------------------
// var m=22;
// {
// var m=21;
// console.log(m);//21
// }
// console.log(m);//21
//---------------------------------------
// {
// let m=21;
// console.log(m);//21
// }
// console.log(m);//خطاء
//-----------------------------------------------
//ماشافوش بغض
// let m=30;
// {
//     let m=21;
//     console.log(m);//21
//     }
// console.log(m);//30
//-----------------------------------------------
// let m=30;
// {
//     let t=21; // الون مش مضفي علي شان مش موكوت
//     console.log(m);//30
//     }
// console.log(t);//خطاء علي شان مش شيفو
//-----------------------------------------------
// var m=30;
// {
//     var t=21; // الون مش مضفي علي شان مش موكوت
//     console.log(t);//30
//     }
// console.log(t);//خطاء علي شان مش شيفو
//--------------------------------------------------------
// ---3-----
// data types

// 2
//2.2
//m

// let m="mmm"+2+5+3; // ايعتبر كل العناصر نصوص (mmm253)

// console.log(m);

// let n=2+5+3+"mmm"; // 10mmm
// console.log(n);

// let m;
// console.log(m); // undefined

//-----------------
// const n2={
//   nn:"mm",
//   m:12,

// };
// console.log(n2.nn);
// console.log(n2["m"]);

// //--------------------

// console.log(n [2]);

//------------------------------
// const n2=["dv",20,30,"mm",true,false,2.2];
// var n3=["dv",20,30,"mm",true,false,2.2];
// let n=["dv",20,30,"mm",true,false,2.2];
// console.log(n[0]);//dv
// console.log(n2[1]);//20
// console.log(n3[6]);//2.2
// console.log(n3[-1]);//undefined
// const n2={m:"dv",n:20,c:true,b:2.2};
// console.log(n2);
// console.log(n2.m);
// console.log(n2["m"]);

// let n;
// console.log(n);
//-------------------------------------
//------- المحاضرة4-----
//---- unary operators-- عنصر واحد
//  '++' '--' '+' '-' -- (typeof)-> نوع المتغير
// let x ="3";
// console.log(+x);//3
// console.log(-x);//-3
// console.log(--x);//2
// console.log(++x);//4
// console.log(x--);//3 نفس الرقم
//-----------------------------------------
//----Binary Operator ---- متغير واحد بس 2 قيمة
// let n=2;
// n="hello"
// console.log(n);// hello
//--------------------------------------------
//---- comparison operator مقارنة ------
// let b= 4 ;
// let b2= "3";
// console.log(b==b2); //true
// console.log(b===b2);
// console.log(b!==b2);
// console.log(b>b2);//true
//----------------------------------
//--- logical operator منطقي-------

// let b=" truem" && " " ;  (AND)
// console.log(b); //" " fales
//   ---------------
// let b2=" m" || " " ;  (OR)
// console.log(b2); // m  true
//---------------------------------
//---  string operator ----
// let name1="mohamed";
// let name2 ="tarek";
// console.log(name1+name2);
// console.log(name1-name2);//NaN
// console.log(name1==name2); //false
// let n={
//     name:"mmmmmm",
//     age:22,
// }
// console.log(n.name +n.age);
// let m=["mm",22]
// console.log(m.length); //length-> عدد المصفوفة 2
// console.log(m[0])
//---------------------------------
// let m ={
// m:"mm",
// a:22,
// };
// console.log( "m" in m);
// let m1=['m',"n"]
// console.log( 1 in m);
// console.log( "length" in m);
//-----------------------------------
//------------typeof نوع
// let n2=5;
// console.log(typeof n2); //nbr // نوع
// let m=5;
// let m1;
// console.log(typeof m==typeof m2);
// let m="m"
//-----------------------------------
//-----ternary operator
// ? :
//شرح المتغير؟ترو :فلس
// let m="mm"; // true
// // m=="bb"?console.log("nn"):console.log("bb"); // false (bb)
// m=="mm"?console.log("nn"):console.log("bb"); //true (nn)
// let n=0
// ++n
// n?console.log(++n):console.log(n); //2
//----------------------------------
// ----- if-----

// let m="mt";
// if(m="mt"){
//     console.log("mmm");
// }else{
//     console.log("tttt");
// }
//--------------------------------
//---  switch -------

// let n ="mm"
// switch(n){
//  case "mm":
//         console.log("yes")
//     break
// case "mt":
//     console.log("no")
// }

// let n =145
// switch(n){
//  case 166:
//         console.log("yes")
//     break
// case 145:
//     console.log("no")
//     case 145:
//     console.log("no1")
//     case 145:
//     console.log("no2")
// }
//------------------------
// const c=[40,31,24,80,5];
// let t=c[0]

// loop  عدد5
// let m=prompt("mm")

// while(m==""||m==null){
//     m=prompt("nn")
// }

// let m=0;
// do{
// m++;
// console.log(m);
// }while(m<0);
// let i
// for(i=0;i<=100;i+=2){
// console.log();
// }

// let m=["m","n","b"]

// for(let m1 of m){
// console.log(m1);
// }

// let m={
//     m1:"d",

// }
// console.log(m["m1"]);
// for(let m1 in m){
// console.log(m1); //رقم
// console.log(m[index]);
// m
// }
// function m(){
//     Math.floor
// }

//..........المسالة 1.........
// function factorial(x) {
//    var result=1;
//       for(var i=x; i>0 ; i--){
//      result*=i;
//   }

//    return result;
//      }
// console.log(factorial(5));
// console.log(factorial(3));

// // //........المسالة2........
// function getMinMax(array){
// if(array==""||array==null){
//   let max=0;
//   let min=0;
// return [min,max]
// }else{

//    max=array.reduce((a,b)=>a>b?a:b)
//    min=array.reduce((a,b)=>a<b?a:b)
//    return[min,max]
// }
// }
// console.log(getMinMax([4,5,2,3,7]));
// console.log(getMinMax([10,3,55,23,55]));
// console.log(getMinMax([5]));
// console.log(getMinMax([]));

//------------------------------------
//    parameters
// function n(m,g="mmm"){

//     // if(g===undefined){
//     //     g="mt";
//     // }

// // g=g||"mtdvd";

//     return `hello ${m} g ${g}`;
// }

// console.log(n('tarek'));

//------------------------
//--------task6--------
// try{
// console.log("mm");
// console.log(m);
// console.log("mm");
// }catch(error){

// }
// finally{console.log("mm");}
// function g(){

// }
// console.log("mm");
// {
//     console.log(v);
// }
// console.log(1223+"dgfx");
// console.log(typeof NaN); 
// console.log(typeof Number("a") );// number

//     error
// console.log();
// console.log("mm");
// console.error("Error");
// console.log(nn);
// throw Error("bbbfbgfngfmngfn")
// console.log("mm");

// function m(t){
//     console.log(t); 
// }
// m("mm");
// alert("mm") //
// const myObject = {
//     name: "Mohandhany",
//     getName: () => {
//       try {
//         return this.name;
//       } catch (error) {
//         throw error;
//       } finally {
//         console.log("finally");
//       }
//     },
//   };
//   console.log(myObject.getName());

// try {
//     console.log(welcome);
//   } catch (error) {
//     throw new Error("Something went wrong");
//     console.log(error);
//   }
  //-------------------------------------
  // let e = /[A-z0-9._]+@(hotmail|yahoo|gmail)\.com/;
// let e1=/[A-z0-9]+@+/;
// let e2=/(hotmail|yahoo|gmail)+/;
// let e3 =/.com+/;
// let n = e.test(email);
// let n1=e1.test(email)
// let n2=e2.test(email)
// let n3=e3.test(email)
//-----------task6-----
// let email = prompt("Enter your email");
// let password;

// while (email === "" || email === null) {
//   email = prompt("Enter your email");
// }

// while (email.includes("@") === false) {
//   alert("Error:Your email should include @");
//   email = prompt("Enter your email");
// }
// while (email.endsWith(".com") === false) {
//   alert("Error:Your email should include .com");
//   email = prompt("Enter your email");
// }
// password = prompt("Enter your password");
// while (password.length < 8) {
//   alert("Error:Your password must be at least 8 characters long");
//   password = prompt("Enter your password");
// }
//----------------task6--2
// let email = prompt("Enter your email");
// let password;
// let e = /[A-z0-9._]+@(hotmail|yahoo|gmail)\.com/;


// while (email === "" || email === null) {
//   email = prompt("Enter your email");
// }

// while (n == false) {
//   try {
//     while (email.includes("@") === false) {
//       throw new Error("Your email should include @");
//     }
//   } catch (error) {
//     alert(error);
//     email = prompt("Enter your email");
//   }

//   try {
//     while (
//       (email.endsWith("hotmail") == false) &
//       (email.endsWith("yahoo") == false) &
//       (email.endsWith("gmail") == false)
//     ) {
//       throw new Error("Your email should include (hotmail|yahoo|gmail)");
//     }
//   } catch (error) {
//     alert(error);
//     email = prompt("Enter your email");
//   }
//   try {
//     while (email.endsWith(".com") === false) {
//       throw new Error("Your email should include .com");
//     }
//   } catch (error) {
//     alert(error);
//     email = prompt("Enter your email");
//   }

//   password = prompt("Enter your password");
//   while (password.length < 8) {
//     alert("Error:Your password must be at least 8 characters long");
//     password = prompt("Enter your password");
//   }
//   email = prompt("Enter your email");
//   while (email === "" || email === null) {
//     email = prompt("Enter your email");
//   }
// }
// password = prompt("Enter your password");
// while (password.length < 8) {
//   alert("Error:Your password must be at least 8 characters long");
//   password = prompt("Enter your password");
// }


// window.location.pathname("hhtps://www.google.com")


// task 7

// <!doctype html>
// <html lang="en">
//   <head>
//     <title></title>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <link rel="stylesheet" href="style.css" />
//     <script src="index.js" defer></script>
//   </head>
//   <body>
//     <h1>Welcome to our todo</h1>
//     <form>
//       <input type="text" name="todo" />
//       <button>add todo</button>
//     </form>
//     <ul class="todos"></ul>
//   </body>
// </html>

// js
// const form = document.querySelector("form");
// const input = document.querySelector('form input[name="todo"]');
// const list = document.querySelector("ul");

// function createListItem(content = "empty todo") {
//   try {
//     if (typeof content != "string")
//       throw Error(
//         "You should provide a string content as an argument to create the list item",
//       );
//     const liEl = document.createElement("li");

//     const pEl = document.createElement("p");

//     pEl.innerText = content;

//     const deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "delete";

//     const checkBtn = document.createElement("button");
//     checkBtn.innerText = "check";

//     checkBtn.addEventListener("click", (e) => {
//       e.currentTarget.parentElement.classList.toggle("checked");
//     });

//     liEl.appendChild(pEl);
//     liEl.appendChild(checkBtn);
//     liEl.appendChild(deleteBtn);

//     deleteBtn.addEventListener("click", (e) => {
//       e.currentTarget.parentElement.remove();
//     });

//     return liEl;
//   } catch (err) {
//     alert(err);
//     return createListItem();
//   }
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   console.log(input.value);

//   list.appendChild(createListItem(input.value));

//   input.value = "";
// });

// ----task8---
//  انشاء صوره
// const img = new Image(100, 200); // width, height مساحه
// img.src = "https://picsum.photos/200/301";
// document.body.appendChild(img);


// asynchronous programing
/*
callbock //طريقة القديمة

function m(callbock) {
  console.log("m1");
  callbock()
}

m(() => {
  console.log("m2");
});
setTimeout(()=>{},time)
*/
/**promise
 * حالات
 * pending حالة التشخيل 
 * fulfillmentحالة النجاح  resolve
 * rejection حالة الفشل  reject
 * 
 * كود
 * 
 * // // Promise((resolve, reject) => {
// //   resolve(img);
// // })
// loadImage().then((img) => {
//   console.log(img); // image element
//   // throw // sets the promise to rejection
//   // return // sets the proimse to fulfillment
// }); // fulfilled

// loadImage().then((img) => {
//   console.log(img); // image element
//   // throw // sets the promise to rejection
//   // return // sets the proimse to fulfillment
// }); // fulfilled

 */
