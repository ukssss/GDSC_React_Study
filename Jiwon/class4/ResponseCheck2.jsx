import React, { useState, useRef} from 'react';

const ResponseCheck = () =>{
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);
    const [count, setCount] = useState(0);
    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();
    

    const onClickScreen = () => {
        if (state === 'waiting' && count === 0){ // 아쿠아 배경에서 클릭하면 빨간 배경이 됨
            setState('ready');
            setMessage('초록색이 되면 클릭하세요');
            timeout.current = setTimeout( ()=>{
                setState('now');
                setMessage('지금 클릭');
                startTime.current = new Date()
            }, Math.floor(Math.random() * 1000) +3000); //2초~3초후에 초록색으로 바꿔줌.
        }
        else if (state === 'ready'){ //성급하게 클릭
            clearTimeout(this.timeout)
            setState('waiting');
            setMessage('성급했음! 실패! 다시 클릭해서 시작하세요');
            setCount(0);
        }
        else if(state ==='now' && count === 2){ //반응속도 체크
            endTime.current = new Date();
            setCount(count + 1);
            setState('waiting');
            setMessage('3번 끝');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current];
            });
            timeout.current = setTimeout( ()=>{
                setMessage('다시 시작');
                setCount(0);
                startTime.current = new Date()
            }, 3000);
        }
        else if(state==='now' && count !==2 ){
            setState('ready');
            setMessage('초록색이 되면 클릭하세요');
            setCount(count+1);
            endTime.current=new Date();
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current];
            });
            timeout.current = setTimeout( ()=>{
                setState('now');
                setMessage('지금 클릭');
                startTime.current = new Date()
            }, Math.floor(Math.random() * 1000) +3000);
        }
    };

    const renderAverage = () =>{
        return result.length === 0
            ? null 
            : <> 
            <div>평균 시간: {result.reduce((a,c) => a + c)/ result.length}ms</div>
            <button onClick = {onMassageReset}>결과리셋</button>
        </>
    };
{/*
    const onGameReset = () => {
        setState('waiting')
        setMessage('리셋합니다.')
        timeout.current = setTimeout( ()=>{
           onClickScreen(); 
        }, 3000);
    };
*/}
    const onMassageReset = () => {
        setResult([]);
    };

    return (
        <>
            <button className = {state} onClick = {onClickScreen}>리셋!</button>
            <div 
            id="screen" 
            className={state} 
            onClick={onClickScreen}
            >
                {message}
                <br></br>
                {count}번째 클릭 
            </div>
            {renderAverage()}
        </>
    );
};

export default ResponseCheck;