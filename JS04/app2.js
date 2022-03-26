const resultNum = document.querySelector('.display')
const numberKey = document.querySelectorAll('.number-key')
const operatorKey = document.querySelectorAll('.operator-key')
const ac = document.querySelector('.row :first-child')
const negative =document.querySelector('.row :nth-child(2)')
const numbers = []
let numView = '0'
let calRes = []


// const clickNum = (numS) => {
//     console.log(numS);
// }

// for (let i = 0; i < numbers.length; i++){
//     const numberEl = numbers[i]
//     numberEl.addEventListener('click', () => {
//         clickNum(i.toString())
//     })
// }


const getValue = () => {
    const currentResult = resultNum.textContent
    return currentResult
}
let updateNum = (e) => {
    
    // let btnTxt = e.target.innerText
    // if (numView === '0') {
    //     numView = ''
    //     // console.log(btnTxt.charAt(0));
    //     numView += btnTxt
    //     resultNum.innerText = numView
    // } else {
    //     resultNum.innerText = parseFloat(btnTxt + numView).toLocaleString()
    // }

    // const btnTxt = resultNum.textContent
    // if (btnTxt === '0') {
    //     resultNum.textContent = e
    // } else {
    //     resultNum.textContent = parseFloat(btnTxt + e).toLocaleString
    // }
    console.log(e);

    // const currentResult = getValue()
    // if (currentResult === '0') {
    //     numEl.textContent = e
    // } else {
    //     numEl.textContent = e
    // }


    // console.log(btnTxt);
    // console.log(typeof numView);
}
// for (i = 0; i < numberKey.length; i++) {
//     numberKey[i].addEventListener('click',updateNum)
// }
for (let i = 0; i < numberKey.length; i++) {
    const numEl = numberKey[i]
    numEl.addEventListener('click', () => {
        updateNum(i)
    })
    console.log(numEl);
}

ac.addEventListener('click', () => {
    numView = '0'
    resultNum.innerText = numView

})

negative.addEventListener('click', () => {
    // console.log(typeof numView);
    let newView = ''
    if (numView !== 0) {
        newView ='-' + numView
        resultNum.innerText = newView
        // console.log(('-' + numView.charAt(0)));
    } 
    
})

let operation = (e) => {
    let opeNum;
    let ope = e.target.innerText
    switch (ope) {
        case '+':
            opeNum = numView
            resultNum.innerText = numView
            calRes.push(opeNum)
            calRes.push('+')
            break
        case '-':
            opeNum = numView
            resultNum.innerText = numView
            calRes.push(opeNum)
            calRes.push('-')
            break
    }
}

for (i = 0; i < operatorKey.length; i++) {
    operatorKey[i].addEventListener('click', operation)
}









// numberKey.addEventListener('click', NewNumber.bind('',numberKey[i].outerText))
// operatorKey.addEventListener('click', () => {
//     console.log(operatorKey[i].outerText);
// })



// Array.from(document.querySelectorAll('number-key')).forEach(number_key => {
//     number_key.addEventListener('click', () => ButtonClick(number-key.id))
// })


    // let numView_len = numView.length
    // numView = numView.slice(0, numView_len -1)
    // if (numView === '') {
    //     numView = '0'
    // }
    // resultNum.innerHTML = numView