import './styles.css';

export const DiagramLabelCard = ({ currentId = 0, labelList }) => {
  return <section className='diagram-label-card__container'>
    <div className='diagram-label--events'>
      {
        Array.isArray(labelList) && labelList.map(row => (
          <div key={`diagram-${row.id}`} className="label-group__content">
            <p className={`label${row.id === currentId ? '--active' : ''}`}>
              {row.id} - {row.label}
            </p>
          </div>
        ))
      }
    </div>
  </section>
}