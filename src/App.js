// import logo from './logo.svg';
import './App.css';
import PureComp from './PureComp';
import ClickComp from './ClickComp';
import OverComp from './OverComp';
// import HigherComp from './HigherComp';

function App() {

  return (
    <div className="my">
      <h1 className='head'>Handson To Show Much Things</h1>
      <div className='MyShow'>
        <ClickComp />
        <OverComp />
      </div>
      {/* <HigherComp /> */}
      <div className='single'>
        <PureComp />
      </div>
    </div>
  );
}

export default App;
