// import { RiMoneyDollarCircleFill } from "react-icons/ri";
// import { PiMoneyFill } from "react-icons/pi";
import { SiBitcoincash } from "react-icons/si";
import './styles.css';

export const AtmOutputCash = ({ isActive = false }) => {
  return <section className='atm-output__container'>
    <div className='atm-output__content'>
      <div className='atm-output__content--output'>
        {isActive && <div className='output-box--active'>
          {
            new Array(24).fill().map((_, idx) => (
              <SiBitcoincash className="cash-icon" key={`${idx}-money-icon`} />
            ))
          }
        </div>
        }
      </div>
    </div>
  </section>
}