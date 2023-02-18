// let balance = 10000;
// const payment = 11000;

// alert(`Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных стредств на счету`);

// if (payment <= balance) {
//   balance -= payment;
//   alert(`На счету осталось ${balance}`);
// } else {
//   alert(`На счету недостаточно средств для проведения операции!`);
// }
// alert("Операция завершена");

// -----------------------------------------------------------------

// const totalSpent = 5000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = 2;
// } else if (totalSpent >= 1000 && totalSpent <= 5000) {
//   discount = 5;
// } else if (totalSpent > 5000) {
//   discount = 10;
// }

// alert(`Оформляем заказ на сумму ${payment} со скидкой ${discount}%`);

// -----------------------------------------------------------------

// const x = 15;

  // switch (x) {
  //   case 5:
  //   case 10:
  //     console.log('5 or 10');
  //     break;
  //   default:
  //     console.log('default');
  // }

// if (prompt('What is the official name of JavaScript?') === 'ECMAScript') {
//   alert("You'r right!");
// } else {
//   alert("Don't you know?");
// }

// const x = prompt('Enter any number');

// if (x > 0) {
//   alert("It's positive number!");
// } else if (x < 0) {
//   alert("It's negative number!")
// } else {
//   alert("It's zero");
// }

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// -----------------------------------------------------------------

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }


// link += !link.endsWith('/') && link.includes('my-site') ? '/' : '';

// console.log(link);

// -----------------------------------------------------------------

// const hours = 66;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }

// -----------------------------------------------------------------

// const daysUntilDeadline = 5;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Today!');
//     break;
//   case 1:
//     console.log('Tomorrow')
//     break;
//   case 2:
//     console.log('The day after tomorrow');
//     break
//   default:
//     console.log('Soon...');
// }

// -----------------------------------------------------------------

// const min = 20;
// const max = 100;

// for (let i = min; i <= max; i++) {
//   if (i % 5 !== 0) {
//     continue
//   }
//   console.log(i);
// }

// -----------------------------------------------------------------

// const login = prompt('Enter the login:');
// const password = "I'm an admin";

// switch (login) {
//   case 'Admin':
//     const enteredPassword = prompt('Enter the password:');
//     alert(enteredPassword === password ? "Hello!" : "Incorrect password");
//     break;
//   case null:
//     alert('Cancel');
//     break;
//   default:
//     alert("I don't know you");
// }

// -----------------------------------------------------------------

// const newArray = [1, 2, 3];
// newArray[40] = 40;
// console.table(newArray);
// console.log('The length of the array:',newArray.length);
// console.log(newArray[33]);

// -----------------------------------------------------------------

// const cart = [54, 28, 105, 70, 92, 17, 120];

// let total = 0;

// for (price of cart) {
//   total += price;
// }

// console.log(total);

// -----------------------------------------------------------------

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// array1.splice(2, 0, array2);

// console.log(array1);

// -----------------------------------------------------------------

// const num = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3];
// const k = 516;

// var addToArrayForm = function (num, k) {
//   const string = num.reduce((numberAsAString = '', item) => numberAsAString += String(item));
//   const result = Number(string) + k;
//   return String(result).split('').map(item => Number(item));

// };

// var addToArrayForm = function(num, k) {
//     let res = [], i=num.length
//     while(i-- > 0 || k){
//         if(i >= 0)  k += num[i];
//         res.unshift(k%10)
//         k = Math.floor(k/10)
//     }
//     return res
// };

// console.log(addToArrayForm(num, k));

// -----------------------------------------------------------------

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const sortedArray = [];

// while (langs.length) {
//   let nextLang = langs[0];

//   for (const lang of langs) {
//     if (lang < nextLang) {
//       nextLang = lang;
//     }
//   }

//   sortedArray.push(nextLang);
//   const elToDelite = langs.indexOf(nextLang);
//   langs.splice(elToDelite, 1);
// }

// console.log(sortedArray);

document.addEventListener("keydown", event => {
  console.log("key: ", event.key);
  console.log("code: ", event.code);
});