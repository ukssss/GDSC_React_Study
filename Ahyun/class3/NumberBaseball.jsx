import React, {useRef, useState, useCallback} from 'react';
import Try from "./Try";
import style from "./style";

const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};


/*로컬저장소에 점수 저장 및 업데이트*/
function updateScore() {
  if (localStorage.getItem("score")===null){
    localStorage.score=JSON.stringify(0);
  }
  let updateScore = JSON.parse(localStorage.getItem('score'));
  updateScore += 1;
  localStorage.setItem('score', JSON.stringify(updateScore));
}


const NumberBaseball = () => {
  const [answer, setAnswer] = useState(getNumbers());
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [tries, setTries] = useState([]);
  const [hint, setHint] = useState('');
  const inputEl = useRef(null);


  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setTries((t) => ([
        ...t,
        {
          try: value,
          result: '홈런!',
        }
      ]));
      setResult('홈런!');
      updateScore();
      alert('게임을 다시 실행합니다.');
      setValue('');
      setAnswer(getNumbers());
      setHint(answer[1]);
      setTries([]);
      inputEl.current.focus();
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패입니다! 답은 ${answer.join(',')}였습니다!`); // state set은 비동기
        alert('게임을 다시 시작합니다.');
        setValue('');
        setAnswer(getNumbers());
        setHint(answer[1]);
        setTries([]);
        inputEl.current.focus();
      } else {
        console.log('답은', answer.join(''));
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            console.log('strike', answerArray[i], answer[i]);
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            console.log('ball', answerArray[i], answer.indexOf(answerArray[i]));
            ball += 1;
          }
        }
        setTries(t => ([
          ...t,
          {
            try: value,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`,
          }
        ]));
        setValue('');
        inputEl.current.focus();
      }
      
    }
  }, [value, answer]);

  const onChangeInput = useCallback((e) => setValue(e.target.value), []);
  
  function giveHint() {
    setResult(`숫자 ${hint}(이)가 포함되어있습니다.`)
  }
  

  return (
    <>
    <div style = {style.main}>
      <h3>{result}</h3>
      <form onSubmit={onSubmitForm}>
        <input
          style = {style.input}
          ref={inputEl}
          maxLength={4}
          value={value}
          onChange={onChangeInput}
        />
        <button style = {style.inputButton}>입력!</button>
      </form>
      <button onClick = {giveHint} style = {style.hintButton}>힌트</button>
      <div>시도: {tries.length}</div>
      <div>홈런횟수: {localStorage.getItem('score')}</div>
      <div>
        {tries.map((v, i) => (
          <Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v}/>
        ))}
      </div>
    </div>
    </>
  );
};

export default NumberBaseball;