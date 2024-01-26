import { useEffect, useState } from 'react';
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

  useEffect(() => {
    if(selectedOption && currentStateAndEvent['currentState'] !== 'Q0') {
      const getEventByOption = (option) => {
        if(option === 1) return 'D';
        else if(option === 2 && currentStateAndEvent['currentState'] === 'Q1') return 'H';
        else if(option === 3 && currentStateAndEvent['currentState'] === 'Q1') return 'J';
        else if(option === 4 && currentStateAndEvent['currentState'] === 'Q1') return 'E';
        else if(option === 5 && currentStateAndEvent['currentState'] === 'Q5') return 'F';
        else if(option === 6 && currentStateAndEvent['currentState'] === 'Q5') return 'G';
        else return '';
      }

      setCurrentStateAndEvent({
        ...currentStateAndEvent,
        currentEvent: getEventByOption(selectedOption),
        previousState: (
          getEventByOption(selectedOption) !== 'V' && getEventByOption(selectedOption) !== 'B'
        ) ? '' :
        currentStateAndEvent.previousState
      });
    }
  }, [selectedOption]);

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
    <section className='atm__container'>
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
    </section>
    <section className='diagram_container'>
      <DiagramCard
        currentEvent={currentStateAndEvent['currentEvent']}
        currentState={currentStateAndEvent['currentState']}
        previousState={currentStateAndEvent['previousState']}
      />
      <DiagramLabelCard
        labelList={DiagramStateLabels}
        currentId={currentStateAndEvent['currentState']}
      />
      <DiagramLabelCard
        labelList={DiagramEventLabels}
        currentId={currentStateAndEvent['currentEvent']}
      />
    </section>
  </main>
}

export default App
