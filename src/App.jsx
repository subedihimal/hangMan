import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SinglePlayer from './pages/SinglePlayer';
import DualPlayer from './pages/DualPlayer';
import Background from './components/Background';

function App() {

  return (
    <>
      <Background>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/singlePlayer" element={<SinglePlayer />} />
          <Route path='/dualPlayer' element={<DualPlayer />} />
        </Routes>
      </Background>
    </>
  )
}

export default App
