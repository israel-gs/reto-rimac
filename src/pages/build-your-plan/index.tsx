import Header from '@components/header'
import { IconArrowLeft } from '@components/icons'
import Stepper from '@components/stepper'
import { GlobalContext } from '@context/global'
import { useContext } from 'react'
import { useLocation } from 'wouter'
import CarInfoCard from './components/car-info-card'
import Coverages from './components/coverages'
import Divider from './components/divider'
import PriceSelector from './components/price-selector'
import './index.css'

export default function BuildYourPlan () {
  const { user, plate } = useContext(GlobalContext)
  const [, navigate] = useLocation()

  const handleGoBack = () => {
    navigate('/', {
      replace: true
    })
  }

  return (
    <div>
      <Header hasBorder />
      <div className='a'>
        <div className='b'>
          <Stepper currentStep={2} steps={['Datos', 'Arma tu plan']} />
        </div>
        <div className='c'>
          <div className='build__info-container'>
            <button className="build__back-button" onClick={handleGoBack}>
              <IconArrowLeft />
              VOLVER
            </button>
            <h1>¡Hola, <span>{user?.name}!</span></h1>
            <p>Conoce las coberturas para tu plan</p>
            <CarInfoCard plate={plate} brand='Wolkswagen' model='Golf' year='2019' />
          </div>
          <div className='price-selector__main-container'>
            <PriceSelector
              min={12_500}
              max={16_500}
              increment={100}
              currency='$'
              onChange={(value) => { console.log(value) }}
            />
          </div>
          <div className='divider__container'>
            <Divider />
          </div>
          <div className='coverages__main-container'>
            <Coverages />
          </div>
        </div>
        <div className='d'></div>
      </div>
    </div>
  )
}
