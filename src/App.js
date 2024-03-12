import Button from './Button';
import HandButton from './HandButton';

// JSX 문법으로 컴포넌트를 작성할 때,
// 컴포넌트를 단일 태그가 아니라 여는 태그와 닫는 태그 형태로 작성하면 그 안에 작성된 코드가 childred 값에 담기게 된다
// 굳이 Button 컴포넌트의 파일로 돌아가지 않아도 '처음부터'라는 값이 어떻게 쓰일지 미리 예측할 수 있고, 더욱 직관적인 코드 작성 가능
function App() {
  const handleClick = (value) => console.log(value);
  const handleClearClick = () => console.log('처음부터');
  return(
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <HandButton value="rock" onClick={handleClick} />
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} />
    </div>
  );
}

export default App;