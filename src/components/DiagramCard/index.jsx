 import './styles.css'

export const DiagramCard = ({ currentState = 'Q0', currentEvent = '', previousState }) => {
  return <section className='diagram-card__container'>
    <div className='diagram-card__content'>
      <div
        className={`type-${currentState}-${currentEvent}${previousState ? `-${previousState}` : ''}`}
      />
    </div>
  </section>
}