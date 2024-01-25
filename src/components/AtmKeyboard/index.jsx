import cardSvg from '../../assets/card.svg';
import { ActionButton } from '../ActionButton';
import './styles.css';

export const AtmKeyBoard = ({ hasCard = false }) => {
  return <section className='arm-keyboard__container'>
    <div className='key-board__container'>
      <div className='keys-list__container'>
        { new Array(9).fill('').map((_, idx) => (
          <div key={`key-idx__${idx+1}`} className='key__content'>
            <button>{idx+1}</button>
          </div>
        ))}
      </div>
      <div className='action-buttons__container'>
        <ActionButton type='success' label='CONFIRMAR'/>
        <ActionButton type='warning' label='VOLTAR'/>
        <ActionButton type='danger' label='CANCELAR'/>
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