import { IoHomeOutline } from "react-icons/io5";
import { TbCreditCardOff } from "react-icons/tb";
import { MonitorOptions } from '../../core/mocks/atm/monitorOptions';
import './styles.css';

const VerticalBar = () => (
  <div className='vertical-bar__container'>
    <div /><div /><div /><div /><div /><div />
  </div>
)

export const AtmScreenMonitor = ({ selectedOption = 0 }) => {
  return <div className='atm-monitor__container'>
    <VerticalBar />
    <div className='atm-monitor__content'>
      <section>
        <header className="atm-header__container">
          <button className="header-option__container">
            <IoHomeOutline size={12} color='rgba(255, 255, 255, .4)' className='icon'/>
            <small>Voltar</small>
          </button>
          <button className="header-option__container">
            <small>Retirar Cartão</small>
            <TbCreditCardOff size={12} color='rgba(255, 255, 255, .4)' className='icon'/>
          </button>
        </header>
        {Array.isArray(MonitorOptions) && MonitorOptions.map(row => (
          <div className='monitor-options__container' key={row.id}>
            <button className={row?.id === selectedOption ? 'active' : ''}>
              <small>{row?.id}. {row?.title}</small>
            </button>
          </div>
        ))}
      </section>
    </div>
    <VerticalBar />
  </div>
}