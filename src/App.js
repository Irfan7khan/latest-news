
import './App.css';
// import Mcarts from './components/Mcarts';
// import Testapi from './components/Testapi';
import NewsApp from './components/NewsApp';
// import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NewsApp />
      
      {/* <Routes>
        <Route path='/' element={ <Testapi/>} />
        <Route path='/movies/:id' element={ <Mcarts/>} />
      </Routes> */}

      
    </div>
  );
}

export default App;
