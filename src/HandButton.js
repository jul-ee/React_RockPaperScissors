import HandIcon from './HandIcon';

// HandButton 컴포넌트의 button 태그 안에 HandIcon 컴포넌트 배치
// 버튼을 클릭했을 때 handleClick 함수가 실행되도록 이벤트 핸들러 추가
function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button onClick={handleClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;