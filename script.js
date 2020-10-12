// 1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.

// let arr = [1, 5, 7, 8, 9, 0, -5, -55, 105, 0, 5, 299, 6 , 7], max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
// }
// console.log(max);


// 2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. Створити новий масив де будуть тільки Стрінгові значення.

// let arr = ['test', 12, undefined, null, -5, 'javascript', '1', false, true, 0 , '!'];
//
// let newArr = [];
//
// for(let i = 0; i < arr.length; i++) {
//   if(typeof(arr[i]) === "string" ) {
//     newArr.push(arr[i]);
//   }
// }
//
// console.log(newArr);


// 3.	Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] – Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking. Додати можливість додати нове поле для всіх юзерів – job (true/false);

// let people = [
//   {
//     name: "Yura",
//     age: 55,
//     hobby: ["football", "ski", "hiking"],
//     type: "Admin"
//   },
//   {
//     name: "Yulian",
//     age: 28,
//     hobby: ["films", "games", "hiking"],
//     type: "user"
//   },
//   {
//     name: "Taras",
//     age: 38,
//     hobby: ["hunting", "TV", "javascript"],
//     type: "user"
//   }
//   ]
// for(let i = 0; i < people.length; i++) {
//   if (people[i].type === 'user') {
//     console.log(people[i]);
//   }
// }
//
// for(let k = 0; k < people.length; k++) {
//   for(let j = 0; j<people[k].hobby.length; j++) {
//     if(people[k].hobby[j] === 'hiking') {
//       console.log(people[k]);
//     }
//   }
// }
//
// if (confirm(`Добавити людині проперті job?`)) {
//
//   for (let i = 0; i < people.length; i++) {
//     if (confirm(`Добавити людині ${people[i].name} проперті job?`)) {
//       people[i].job = true;
//     } else {
//       people[i].job = false;
//     }
//     console.log(people[i]);
//   }
// }




// 4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.

// let element = document.getElementsByTagName('h1');
// document.addEventListener('copy', (event) => {
//   alert('Воу, полегше, це ж інетектуальна власніть. По судах затаскаю')
// })


// 5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. Вивести нумерований список з іменами всіх країн та її столицею на сторінку, назву країни зробити великими буквами.


let node = null;
let mainUrl = `https://restcountries.eu/rest/v2/all`;
let countryList = null;

window.onload = () => {
  node = fetch(mainUrl)
    .then(response => response.json())
    .then(result => node = result)
}

function showCountry() {


}
