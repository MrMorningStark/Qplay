import './App.css';
import { Route, Routes } from 'react-router-dom'
import Page from './tv/homePage/components/Page';
import LiveTv from './tv/LiveTv/LiveTv';

function App() {
  return <Routes>
    <Route path='/' element={<Page />} />
    <Route path='/liveTv' element={<LiveTv />} />
  </Routes>
}

export default App;
