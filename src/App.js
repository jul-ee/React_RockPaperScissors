import { useState } from 'react';
import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { compareHand, generateRandomHand } from './utils';

const INITIAL_VALUE = 'rock';

// 승리, 패배,  무승부에 해당하는 승부 결과를 만든다
function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);    // 빈 배열을 초기 값으로 갖는 gameHistory State 생성

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);    // 승부 결과를 누적해주는 nextHistoryItem 변수 생성
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    // setGameHistory 함수로 값을 변경한다
    // gameHistory State는 참조형이므로, Spread 문법으로 새로운 배열을 만들어 값을 변경해야 한다
    setGameHistory([...gameHistory, nextHistoryItem]);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    // 초기화 기능이므로, setGameHistory 함수에 초기 값인 빈 배열을 전달해준다
    setGameHistory([]);
  };

  // join 메소드를 활용해, 승부 결과를 쉼표로 연결해서 보여준다
  // 아규먼트로 전달한 값을 배열의 각 요소들 사이에 넣어서, 결과적으로는 하나의 문자열로 만들어주는 메소드
  return(
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <p>{getResult(hand, otherHand)}</p>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <p>승부 기록: {gameHistory.join(', ')}</p>
      <div>
      <HandButton value="rock" onClick={handleButtonClick} />
      <HandButton value="scissor" onClick={handleButtonClick} />
      <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;