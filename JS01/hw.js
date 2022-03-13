// // let year = prompt("輸入年份")

// // if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
// //     alert(year + "是閏年")
// // } else {
// //     alert(year + "不是閏年");
// // }



// // for (let a = 0; a >= 0; a-2){
// //     // if (a % 2 == 0)
// //         console.log(a);
// // }


// // 9X9

// for (i = 2; i <= 9; i++){
//     for (x = 1; x <= 9; x++){
//         sum = i * x;
//         console.log(i + ' x ' + x + ' = ' + sum);
//     }
// }
// // 三角形
// let star = ''
// for (let i = 0; i <= 4; i++) {
//     for (let h = 0; h <= i; h++) {
//         star += '*';
//     }
//         star += '\n'
// }
//     console.log(star);

// let star3 = '*'
// for (let i = 1; i <= 5; i++) {
//     console.log(star3.repeat(i) );
// }
// // 正三角

// let p = "";
// for (let i = 1; i <= 5; i++) {
//     for (let h = 0; h <= 4 - i; h++) {
//         p += " ";
//     }
//     for (let a = 0; a < 2 * i - 1; a++) {
//         p += "*";
//     }
//     p += "\n";
// }
// console.log(p);

// let star2 = '*';
// let p1 = ' ';

// for (let i = 0; i <= 4; i++){
//     console.log(p1.repeat(4 - i) + star2.repeat(i + 1) + star2.repeat(i));
// }
let list = [false, 1, 0, 1, 2, 0, 1, 3, "a"]
// list.forEach(function (item, index, arr) {
//     if (item < 1 && typeof item === "number") {
//         arr.splice(index, 1) && arr.push(item)
//     }
// })

// console.log(list);


function moveZerosToEnd(arr) {
  // 程式碼寫在這裡
    if (arr.length[1] < 1 && typeof arr === "number") {
        arr.splice(0, 1) && arr.push(0, 1);
    }

    return arr
}
let result = moveZerosToEnd(list);
console.log(result); 


// const filt1 = [12, 5, 8, 130, 44];
// function isBigEnough(value) {
//   return value >= 10;
// }

// let filtered = filt1.filter(isBigEnough);