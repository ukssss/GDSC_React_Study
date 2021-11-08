const React = require("react");
const { useState } = React;

const WordRelay = () => {
  const [word, setWord] = useState("유주");
  const [value, setValue] = useState(""); 
  const [result, setResult] = useState(""); 
  const [answer, setAnswer] = useState([]); //답안 저장하는 배열
  const inputEl = React.useRef(null);


  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      word[word.length - 1] === value[0] &&
      value.length >= 2 && //두 글자 이상의 단어를 쓸 것(한 글자 안됨)
      value.indexOf(" ") < 0 && //띄어쓰기 금지
      answer.includes(value) === false //중복되는 단어를 사용하면 안됨.
    ) {
      setResult("딩동댕");
      setWord(value);
    } else if (value.indexOf(" ") >= 0) {
      setResult("띄어쓰기는 할 수 없습니다.");
    } else if (value.length < 2) {
      setResult("두 글자 이상 입력해주세요.");
    } else if (answer.includes(value) === true) {
      setResult("중복된 단어는 사용할 수 없습니다.");
    }
      else {
      setResult("땡");
    }
    setValue("");
    inputEl.current.focus();
  };

  //중복되는 답안을 피하기위해, 배열에 답안을 저장하는 함수 만듦 
  function handleAddInput() {
    let updateAnswer = [
      ...answer, word
    ];
    updateAnswer = updateAnswer.filter((v,i)=> updateAnswer.indexOf(v) === i); //배열 중복값 제거
    console.log(updateAnswer);
    setAnswer(updateAnswer);
  }

  return (
    <>
      <h2>제시단어: {word}</h2>
      <div>[규칙]</div>
      <ul>
        <li>띄어쓰기 X</li>
        <li>두 글자 이상의 단어를 쓸 것</li>
        <li>중복되는 단어 X</li>
      </ul>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button onClick={handleAddInput}>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
