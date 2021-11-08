// 공백 제거 함수 선언
const removeAllSpace = (inputValue) => {
    return inputValue.replace(/ /g,"");
}

// 랜덤 정답 함수
const makeRandomAnswer = () => {
    let answer = new Array(4).fill(0).map((answerItem) => {
        return Math.floor(Math.random() * 10)
    })

    if (new Set([...answer]).size === 4){
        return answer
    } else {
        return makeRandomAnswer()
    }   
}

// 숫자인지 아닌지 test하는 함수
const checkNumber = (input) => {
    try {
        if (!parseInt(input)) throw alert("숫자를 입력하세요"); 
        if (new Set([...input]).size !== 4) throw alert("4개의 다른 숫자를 입력하세요");

        return [...input];

    } catch (e) { 
        console.error(e);
    }
}

// strike와 ball 여부를 확인 하는 함수
const findStrikeAndBall = (inputArray, inputAnswer) => {
    let [strike,ball] = [0,0];

    inputArray.forEach((inputItem, InputIdx) => {
        inputItem = parseInt(inputItem);
        
        if (inputItem === inputAnswer[InputIdx]) {
            strike += 1
        } else if (inputAnswer.includes(inputItem)) {
            ball += 1
        }
    })

    return [strike, ball];
}

export {
    removeAllSpace,
    makeRandomAnswer,
    checkNumber,
    findStrikeAndBall,
}