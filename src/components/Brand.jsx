import logoTealorMade from '../img/logoTealorMade.jpg'

import './Brand.css'


function Brand() {
  return (
    <header>
      <div className='logo-container'>
        <img src={logoTealorMade} alt="logo" />
      </div>
    </header>

  )
}

export default Brand