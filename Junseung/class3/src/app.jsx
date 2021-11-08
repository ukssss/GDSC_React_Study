import React, { Component, useEffect, useState } from 'react';

import InputFourNumber from './Component/inputFourNumber.jsx';
import InputResult from './Component/inputResult.jsx';
import { 
    removeAllSpace, 
    makeRandomAnswer, 
    checkNumber, 
    findStrikeAndBall 
} from "./utils/utilFunction.js"

function App(){
    const [inputValue, inputValueChange] = useState("");
    const [inputAnswer, inputAnswerChange] = useState(makeRandomAnswer());
    const [inputResult, inputResultChange] = useState([]);
    
    const addTryEvent = (fn) => {
        return (inputValue) => {
            const resultObj = { tries : inputValue, strike : 0, ball : 0 }

            return (inputArray,inputAnswer) => {
                const [strike, ball] = fn(inputArray, inputAnswer);

                resultObj.strike = strike;
                resultObj.ball = ball;
                
                inputResultChange([...inputResult, resultObj]);    
            }
        }
    }

    const inputChangeEvent = (e) => inputValueChange(e.target.value);
    

    const inputSubmitEvent = (e) => {
        e.preventDefault();
        const $input = document.querySelector("input");
        
        // 1. 공백 제거하기
        const input = removeAllSpace(inputValue);
        // 2. 테스트하기(문자 숫자 여부)
        const inputArray = checkNumber(input);
        // 3. 변경하기(스트라이크 볼 계산하기) - 함수의 재사용을 위한 커링 이용
        const inputCurring = addTryEvent(findStrikeAndBall);

        inputCurring(inputValue)(inputArray, inputAnswer);

        $input.focus();     // focus 유지
        $input.value = "";  // 값 초기화
    }

    return (
        <div>
            <InputFourNumber 
                inputSubmitEvent = {inputSubmitEvent}
                inputChangeEvent = {inputChangeEvent} 
            />
            <InputResult inputResult = {inputResult}/>
        </div>
        
    )
}

export default App;