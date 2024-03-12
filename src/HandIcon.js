import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

// IMAGES 객체를 이용해, value prop 값에 따라 이미지 주소를 다르게 지정한다
const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg
};

// alt에는 value prop을 그대로 넣어준다
function HandIcon({value}) {
  const src = IMAGES[value];
  return <img src={src} alt="rock"></img>;
}

export default HandIcon;