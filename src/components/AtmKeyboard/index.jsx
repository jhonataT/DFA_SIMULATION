import cardSvg from '../../assets/card.svg';
import { ActionButton } from '../ActionButton';
import { customToast } from '../CustomToast';
import './styles.css';

export const AtmKeyBoard = ({
  hasCard = false,
  handleChangeStateOrEvent,
  handleSelectedOption,
  selectedOption,
  currentState
}) => {
  
  const handleConfirmOption = () => {
    if(currentState === 'Q0') {
      customToast('Você deve inserir um cartão para continuar', 'error');
      handleSelectedOption(null);
      return;
    }
    
    if(!selectedOption || (selectedOption >= 5 && currentState !== 'Q5')) {
      customToast('Você deve selecionar uma opção válida antes de confirmar', 'error');
      return;
    }

    let newStateData = { event: '', state: '' };

    if(selectedOption === 1 && currentState === 'Q1') {
      newStateData.event = 'D';
      newStateData.state = 'Q2';
    } else if(selectedOption === 2 && currentState === 'Q1') {
      newStateData.event = 'H';
      newStateData.state = 'Q3';
    } else if(selectedOption === 3 && currentState === 'Q1') {
      newStateData.event = 'J';
      newStateData.state = 'Q4';
    } else if(selectedOption === 4 && currentState === 'Q1') {
      newStateData.event = 'E';
      newStateData.state = 'Q5';
    } else if(selectedOption === 5 && currentState === 'Q5') {
      newStateData.event = 'F';
      newStateData.state = 'Q6';
    } else if(selectedOption === 6 && currentState === 'Q5') {
      newStateData.event = 'G';
      newStateData.state = 'Q7';
    }

    handleSelectedOption(null);
    handleChangeStateOrEvent(newStateData.event, newStateData.state);
  }

  const handleCancelOperation = () => {
    if(!hasCard) {
      customToast('Você não possui um cartão inserido.', 'error');
      handleSelectedOption(null);
      return;
    }

    handleSelectedOption(null);
    handleChangeStateOrEvent('B', 'Q0', currentState);
  };

  const handleChangeToPreviousState = () => {
    let newStateToChange = 'Q1';

    if(currentState === 'Q0' || currentState === 'Q1') {
      customToast('Você não pode utilizar essa função agora.', 'error');
      handleSelectedOption(null);
      return;
    } else if(currentState === 'Q6' || currentState === 'Q7') {
      newStateToChange = 'Q5';
    }

    handleSelectedOption(null);
    handleChangeStateOrEvent('V', newStateToChange, currentState);
  }

  return <section className='arm-keyboard__container'>
    <div className='key-board__container'>
      <div className='keys-list__container'>
        { new Array(9).fill('').map((_, idx) => (
          <div key={`key-idx__${idx+1}`} className='key__content'>
            <button onClick={() => handleSelectedOption(idx+1)} className={selectedOption === idx+1 ? 'btn-active' : ''}>
              {idx+1}
            </button>
          </div>
        ))}
      </div>
      <div className='action-buttons__container'>
        <ActionButton type='success' label='CONFIRMAR' handleClick={handleConfirmOption} />
        <ActionButton type='warning' label='VOLTAR' handleClick={handleChangeToPreviousState}/> 
        <ActionButton type='danger' label='CANCELAR' handleClick={handleCancelOperation}/>
      </div>
    </div>
    <div className='input-card__container'>
      <h6>Inserir Cartão</h6>
      <div className='input-card__content'>
        <div/>
        {hasCard && <img src={cardSvg} alt='credit card'/> }
      </div>
    </div>
  </section>
}