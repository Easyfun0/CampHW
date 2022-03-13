// 9X9
for (i = 2; i <= 9; i++){
    for (x = 1; x <= 9; x++){
        total = i * x;
        console.log(i + ' x ' + x + ' = ' + total);
    }
}
// 三角形
let tri = ''

for (let i = 0; i <= 4; i++){
    for (let h = 0; h <= i; h++){
        tri += '*';
    }
    tri += '\n'
}
console.log(tri);

let tri1 = '*'
for (let i = 1; i <= 5; i++){
    console.log(tri1.repeat(i));
}
// 正三角

let tri2 = ''
for (let h = 1; h <= 5; h++){
    for (let w = 0; w <= 4 - h; w++){
        tri2 += ' ';
    }
    for (let a = 0; a < 2 * h - 1; a++){
        tri2 += '*';
    }
    tri2 += '\n';
}

console.log(tri2);


let tri3 = '*'
let tri4 = ' '

for (let i = 0; i <= 4; i++){
    console.log(tri4.repeat(4 - i)+ tri3.repeat(i + 1) + tri3.repeat(i));
}