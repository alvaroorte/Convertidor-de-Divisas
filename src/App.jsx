import './App.css'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ConvertidorDivisas from './divisas';


function App() {

  return (
    <>
        <div className="App">
            <header className="App-header">
              <ConvertidorDivisas />
            </header>
        </div>
    </>
  );
}

export default App
