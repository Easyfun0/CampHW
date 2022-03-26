const resultNum = document.querySelector('.display')
const numberKey = document.querySelectorAll('.number-key')
const operatorKey = document.querySelectorAll('.operator-key')
const ac = document.querySelector('.row :first-child')
const negative = document.querySelector('.row :nth-child(2)')
const decimal = document.querySelector('.row:nth-of-type(6n) button:nth-child(2)')
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

console.log(decimal);
const getValue = () => {
    const currentResult = resultNum.textContent
    // console.log(currentResult);
    return currentResult
}

const getValueAsNum = () => {
    return parseFloat(getValue())
}



let updateNum = (e) => {
    let btnTxt = e.target.innerText
    if (numView === '0') {
        numView = ''
        console.log(btnTxt.charAt(0));
    }
    if (numView === '-') {
        
    }
    // else {

    // }
    numView += btnTxt
    resultNum.innerText = numView
}

for (i = 0; i < numberKey.length; i++) {
    numberKey[i].addEventListener('click',updateNum)
}

ac.addEventListener('click', () => {
    numView = '0'
    resultNum.innerText = numView

})

negative.addEventListener('click', () => {
    // console.log(typeof numView);
    let newView = updateNum
    if (numView !== 0) {
        newView ='-' + numView
        resultNum.innerText = newView
        // console.log(('-' + numView.charAt(0)));
    }   
})
decimal.addEventListener('click', () => {
    const currentValue = updateNum()
    if (!currentValue.includes('.')) {
        
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