 import './styles.css'

export const DiagramCard = ({ currentState = 'Q0', currentEvent = '' }) => {
  return <section className='diagram-card__container'>
    <div className='diagram-card__content'>
      <div className={`type-${currentState}-${currentEvent}`} />
    </div>
  </section>
}