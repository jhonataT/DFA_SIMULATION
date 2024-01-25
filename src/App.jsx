import './app.css';
import { AtmKeyBoard } from './components/AtmKeyboard';
import { AtmOutputCash } from './components/AtmOutputCash';
import { AtmScreenMonitor } from './components/AtmScreenMonitor';

function App() {
  return <main className='main__container'>
    <container className='atm__container'>
      <AtmScreenMonitor/>
      <AtmOutputCash/>
      <AtmKeyBoard/>
    </container>
    <container>
      <h1>2</h1>
    </container>
  </main>
}

export default App
