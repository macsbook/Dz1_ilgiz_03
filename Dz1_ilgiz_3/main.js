


//// Регулярные выражение


// const str = 'AaaSssbbbzzzssddds'

// const reqExp = new RegExp('s','gi')


// console.log(str.match(reqExp));
// console.log(str.replace(reqExp, '*'));



//// new variant req exp

// const reqExp = /s/gi



// console.log(str.match(reqExp));



// validate number


// const nums = prompt('Введите цифры')

// const input = document.querySelector('#num');
// const button = document.querySelector('#submit')
// const result = document.querySelector('#result')




// const numExp = /\w/g
// console.log(numExp.test(nums));

// button.addEventListener('click',() => {
//   // console.log(reqExp.test(input.value));
//   if (reqExp.test(input.value)) {
//     result.innerText = 'Success';
//     result.style.color = 'green'
//   }else {
//     result.innerText = 'Failed';
//     result.style.color = 'red'
//   }
// })



// const reqExp = /^\+996\d{3} \d{2}-\d{2}-\d{2}$/gi




/// recursion


// for(let i = 0; i < 100;i++) {
//   console.log(i);
// }



// let num = 0;
// let filed = ''

// function rec1() {
//   num++
//   console.log(num);
//   if(num > 1000) return
//   rec1()
// }
// rec1()


//// rec 2
// function addNum() {
//   num++
//   filed += `${num}`
//   console.log(filed);
//   if(num >= 30) return
//   addNum()
// }
// addNum()




// const people = {
//   'John': {
//     age: 45,
//     parents: {
//       "Fred": {
//         age: 65,
//         parents: {
//           "Paren1": {
//             age: 100,
//             parents: {
//               'ffdfdf': {
//
//               },
//               'fdsafd': {
//
//               }
//             }
//           },
//           "parent2": {
//             age: 120
//           }
//         }
//       },
//       "Marry": {
//         age: 64
//       }
//     }
//   },
//   "Sam": {
//     age: 18,
//     parents: {
//       "Alex": {
//         age: 40
//       },
//       "April": {
//         age: 38
//       }
//     }
//   }
// }



// function personList(obj) {
//   for(let key in obj.parents) {
//     personList(obj.parents[key])
//   }
// }

// console.log(people);

// people.John
// people["John"]

//
// for(let key in people) {
//   personList(people[key])
// }


const Bank = document.querySelector('#num')
const Click = document.querySelector('#submit')
const result = document.querySelector('#result')
const Data = document.querySelector('#Data')
const Day = document.querySelector('#day')
const result2 = document.querySelector('#result3')
    Click.addEventListener('click', () => {
  if (RegExp.test(Bank.value)){
    result.innerText ='Success'
    result.style.color = 'green'
  }else {
    result.innerText = 'Failed';
    result.style.color = 'red'
  }
})
const RegExp = /^\d{1,2}\d{13}$/gi

const regExp2 = /(0|1)|2[0-9]|3[0-1]-\(0[1-9]|1[0-2]-\d{4}$/gi
Day.addEventListener('click',() => {
  if (regExp2.test(Data.value)){
    result2.innerText = 'Success'
    result2.style.color = 'green'
  }else{
    result2.innerText = 'Failed'
    result2.style.color = 'red'
  }
})
// Day.addEventListener('click',() => {
//   if (ReqExp.test(Data.value)){
//     result2.innerText = 'True'
//     result2.style.color = 'green'
//   }else {
//     result2.innerText = 'False';
//     result2.style.color = 'red'
//   }
// })
// const ReqExp = /^\a{1,31}\a {1,12}$/gi

