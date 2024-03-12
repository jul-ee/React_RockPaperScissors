import HandIcon from './HandIcon';

// value prop으로 각각 'rock', 'scissor', 'paper'를 넘겨준다
function App() {
  return(
    <div>
      <HandIcon value="rock" />
      <HandIcon value="scissor" />
      <HandIcon value="paper" />
    </div>
  );
}

export default App;