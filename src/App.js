import { BrowserRouter } from 'react-router-dom';
import './App.css';
// 
import HomePage from './component/HomePage';


function App() {
  return (
    <div>
   
     
      <BrowserRouter>
      <HomePage/>
  </BrowserRouter>,
    </div>
  );
}

export default App;
