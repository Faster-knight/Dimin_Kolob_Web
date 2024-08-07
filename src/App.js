import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/App.css';
import PlayComponent from './js/PlayComponent';
import IndexComponent from './js/IndexComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="content">
        <Routes>
          <Route path="/" element={<IndexComponent />}></Route>
          <Route path="/using-fiber-react" element={<PlayComponent />}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
