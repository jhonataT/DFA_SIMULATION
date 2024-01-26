 import './styles.css'

export const DiagramCard = ({ currentState = 'Q0', currentEvent = '', previousState }) => {
  console.log(`type-${currentState}-${currentEvent}${previousState ? `_${previousState}` : ''}`)
  
  return <section className='diagram-card__container'>
    <div className='diagram-card__content'>
      <div
        className={`type-${currentState}-${currentEvent}${previousState ? `-${previousState}` : ''}`}
      />
    </div>
  </section>
}