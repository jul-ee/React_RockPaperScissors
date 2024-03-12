// children prop을 사용해서 '처음부터' 버튼 생성
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;