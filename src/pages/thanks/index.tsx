import ThanksDesktopMan from '@assets/thanks-desktop-man.svg'
import ThanksMobileMan from '@assets/thanks-mobile-man.svg'
import Button from '@components/button'
import Header from '@components/header'
import { GlobalContext } from '@context/global'
import { useContext } from 'react'
import './index.css'

export default function Thanks () {
  const { user } = useContext(GlobalContext)

  return (
    <div>
      <Header hasBorder />
      <div className='thanks__main-container'>
        <div className='thanks__mobile-image-container'>
          <img src={ThanksMobileMan} alt='thanks' className='thanks__desktop-image' />
        </div>
        <div className='thanks__desktop-image-container'>
          <img src={ThanksDesktopMan} alt='thanks' className='thanks__desktop-image' />
        </div>
        <div className='thanks__mmessage-container'>
          <h1 className='thanks__title'>
            <span className='thanks__title--red'>¡Te damos la bienvenida!</span> <br />
            Cuenta con nosotros para proteger tu vehículo
          </h1>
          <p className='thanks__message'>
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:
          </p>
          <p className='thanks__email'>
            {user?.email}
          </p>
          <div>
            <Button className='thanks__button'>CÓMO USAR MI SEGURO</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
