import './styles.css';

export const ActionButton = ({ label, type = 'success' }) => {
  return <div className='action-button__container'>
    <button className={type}>
      {label}
    </button>
  </div>
}