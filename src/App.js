import './App.css';
import BtnOp from './Components/btnOp/btnOp';

function App() {
  return (
    <div className="App">
      <h1>Premier projet</h1>
      <div className='buttons'>
        <BtnOp op="+"/>
        <BtnOp op="-"/>
        <BtnOp op="/"/>
        <BtnOp op="*"/>
        </div>
    </div>
  );
}


export default App;
