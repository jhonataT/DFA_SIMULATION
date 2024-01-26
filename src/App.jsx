import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import { AtmKeyBoard } from './components/AtmKeyboard';
import { AtmOutputCash } from './components/AtmOutputCash';
import { AtmScreenMonitor } from './components/AtmScreenMonitor';
import { DiagramCard } from './components/DiagramCard';
import { DiagramLabelCard } from './components/DiagramLabelCard';
import { DiagramEventLabels, DiagramStateLabels } from './core/mocks/diagram/diagramLabels';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentStateAndEvent, setCurrentStateAndEvent] = useState({
    currentEvent: '',
    currentState: 'Q0',
    previousState: ''
  });

  const handleChangeStateOrEvent = (currentEvent, currentState, previousState = '') => {
    setCurrentStateAndEvent({ currentEvent, currentState, previousState });
  }

  return <main className='main__container'>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      theme="light"
      className="toastify-class"
      style={{ zIndex: 400000 }}
    />
    <container className='atm__container'>
      <AtmScreenMonitor
        {...{
          handleChangeStateOrEvent,
          hasCard: currentStateAndEvent['currentState'] !== 'Q0',
          selectedOption,
          handleSelectedOption: setSelectedOption,
          currentState: currentStateAndEvent['currentState'], 
        }}
      />
      <AtmOutputCash isActive={currentStateAndEvent['currentState'] === 'Q2'}/>
      <AtmKeyBoard 
        {...{
          handleChangeStateOrEvent,
          hasCard: currentStateAndEvent['currentState'] !== 'Q0',
          handleSelectedOption: setSelectedOption,
          selectedOption,
          currentState: currentStateAndEvent['currentState'],
        }}
      />
    </container>
    <container className='diagram_container'>
      <DiagramCard
        currentEvent={currentStateAndEvent['currentEvent']}
        currentState={currentStateAndEvent['currentState']}
      />
      <DiagramLabelCard
        labelList={DiagramStateLabels}
        currentId={currentStateAndEvent['currentState']}
      />
      <DiagramLabelCard
        labelList={DiagramEventLabels}
        currentId={currentStateAndEvent['currentEvent']}
      />
    </container>
  </main>
}

export default App
