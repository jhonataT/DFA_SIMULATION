import { IoHomeOutline } from "react-icons/io5";
import { TbCreditCardOff } from "react-icons/tb";
import { FcMoneyTransfer } from "react-icons/fc";
import { MonitorOptions } from '../../core/mocks/atm/monitorOptions';
import { customToast } from "../CustomToast";
import './styles.css';

const VerticalBar = () => (
  <div className='vertical-bar__container'>
    <div /><div /><div /><div /><div /><div />
  </div>
)

const FeedBackScreen = ({ currentState }) => {
  const getTitle = () => {
    if(currentState === 'Q2') {
      return 'Retire as suas notas abaixo!';
    } else if(currentState === 'Q3') {
      return 'Saldo Disponível de R$ ****';
    } else if(currentState === 'Q4') {
      return 'Empréstimo Disponível!';
    } else if(currentState === 'Q6' || currentState === 'Q7') {
      return 'Pagamento Realizado';
    }
  }

  return <div className='feedback-screen__container'>
    <div className='feedback-screen__content'>
      <p>{getTitle()}</p>
      <FcMoneyTransfer className='feedback-icon'/>
    </div>
  </div>
}

export const AtmScreenMonitor = ({
  selectedOption = 0,
  hasCard = false,
  handleChangeStateOrEvent,
  handleSelectedOption,
  currentState
}) => {
  const handleInsertCard = () => handleChangeStateOrEvent('C', 'Q1');

  const handleChangeOption = (currentOption) => {
    handleSelectedOption(currentOption);
    customToast("Clique em 'CONFIRMAR' para continuar.", 'success');
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

  return <div className='atm-monitor__container'>
    <VerticalBar />
    <div className='atm-monitor__content'>
      <section>
        <header className="atm-header__container">
          <button className="header-option__container" onClick={handleChangeToPreviousState}>
            <IoHomeOutline size={12} color='rgba(255, 255, 255, .4)' className='icon'/>
            <small>Voltar</small>
          </button>
          <button className="header-option__container" onClick={handleCancelOperation}>
            <small>Retirar Cartão</small>
            <TbCreditCardOff size={12} color='rgba(255, 255, 255, .4)' className='icon'/>
          </button>
        </header>
        {(currentState !== 'Q5' ? MonitorOptions.slice(0, 4): MonitorOptions.slice(4)).map(row => (
          <div className='monitor-options__container' key={row.id}>
            <button
              onClick={() => handleChangeOption(row.id)}
              className={row?.id === selectedOption ? 'active' : ''}
            >
              <small>{row?.id}. {row?.title}</small>
            </button>
          </div>
        ))}
        {
          (['Q2', 'Q3', 'Q4', 'Q7', 'Q6'].includes(currentState) && 
            <FeedBackScreen
              currentState={currentState}
            />
          )
        }
        {
          !hasCard && <div className='atm-monitor--withoutCard'>
            <button className='insert-card__container' onClick={handleInsertCard}>
              Inserir Cartão
            </button>
          </div>
        }
      </section>
    </div>
    <VerticalBar />
  </div>
}