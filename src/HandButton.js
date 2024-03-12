import HandIcon from './HandIcon';
import backgroundImg from './assets/purple.svg'

// Button 프로퍼티에 인라인 스타일을 적용하기 위해 객체로 속성값을 지정해 준다
const style = {
  width: '166px',
  height: '166px',
  border: 'none',
  outline: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  // 대시(-)로 여러 단어가 연결된 속성명은 CamelCase로 작성
  backgroundColor: 'transparent',
  // 이미지 주소는 import 구문을 통해서 가져온 값을 템플릿 문자열로 넣어준다
  backgroundImage: `url('${backgroundImg}')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
};

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  
  // Button 컴포넌트에 style 속성 지정
  return (
    <button style={style} onClick={handleClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;