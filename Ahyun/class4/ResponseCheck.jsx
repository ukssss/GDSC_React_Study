import React, { useState, useRef } from 'react';

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);
    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if (state === 'waiting') {
            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000); 
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');
        } else if (state === 'ready') { 
            clearTimeout(timeout.current);
            setState('waiting');
            setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
        } else if (state === 'now') { 
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요.');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current]
            }); 
            updateScore()
        };
    };

    function updateScore() {
      if (localStorage.getItem("score")===null){
        localStorage.score=JSON.stringify(0);
      }
      let updateScore = JSON.parse(localStorage.getItem('score'));
      if (updateScore > endTime.current - startTime.current) {
        localStorage.setItem('score', JSON.stringify(endTime.current - startTime.current));
      }
      
    }

    const onReset = () => {
        setResult([]);
    };

    const averageStyle = {
      fontSize: "33px"
    }

    const buttonStyle = {
      borderRadius: "12px",
      padding: "10px 20px",
      fontSize: "18px",
      fontWeight: "500",
      borderColor: "#f44336",
      color: "red",
      backgroundColor: "white"
    }

    const renderAverage = () => {
        return result.length === 0
          ? null
          : <>
            <div style = {averageStyle}>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
            <button style = {buttonStyle} onClick={onReset}>리셋</button>
          </>
      };

      return (
        <>
          <div id="score">신기록: {localStorage.getItem('score')}ms</div>
          <div
            id="screen"
            className={state}
            onClick={onClickScreen}
          >
            {message}
            {renderAverage()}
          </div>
        </>
      );
    };
    
    export default ResponseCheck;