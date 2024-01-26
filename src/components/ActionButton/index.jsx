import './styles.css';

export const ActionButton = ({ label, type = 'success', handleClick }) => {
  return <div className='action-button__container'>
    <button className={type} onClick={handleClick}>
      {label}
    </button>
  </div>
}