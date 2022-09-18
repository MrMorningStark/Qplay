import './App.css';
import { Route, Routes } from 'react-router-dom'
import Page from './tv/homePage/components/Page';
import LiveTv from './tv/LiveTv/LiveTv';
import { init } from '@noriginmedia/norigin-spatial-navigation';



function App() {

  init( {
    throttleKeypresses: true,
    throttle: 100
  } );

  return <Routes>
    <Route path='/' element={<Page/>} />
    <Route path='/liveTv' element={<LiveTv />} />
  </Routes>
}

export default App;


