import HandIcon from './HandIcon';
import './HandButton.css';    // 기존의 스타일을 다루고 있던 객체들 대신, HandButton.css 파일을 import한다

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);

  return (
    <button className="HandButton" onClick={handleClick}>
      <HandIcon className="HandButton-icon" value={value} />
    </button>
  );
}

export default HandButton;