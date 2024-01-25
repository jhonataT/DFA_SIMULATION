import './app.css';
import { AtmOutputCash } from './components/AtmOutputCash';
import { AtmScreenMonitor } from './components/AtmScreenMonitor';

function App() {
  return <main className='main__container'>
    <container className='atm__container'>
      <AtmScreenMonitor/>
      <AtmOutputCash/>
    </container>
    <container>
      <h1>2</h1>
    </container>
  </main>
}

export default App
